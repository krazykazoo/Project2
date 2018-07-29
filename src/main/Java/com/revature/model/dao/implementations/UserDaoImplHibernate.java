package com.revature.model.dao.implementations;

import com.revature.model.beans.Friend;
import com.revature.model.beans.User;
import com.revature.model.dao.interfaces.UserDao;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

@Component
@Repository
public class UserDaoImplHibernate implements UserDao {
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory factory) {
        this.sessionFactory = factory;
    }

    @Override
    public User authenticate(String username, String password) {
        String hql = "from User U where U.username=:username and U.password=:pword";
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
        query.setString("username", username);
        query.setString("pword", password);
        List result = query.list();
        if (result.isEmpty()) return null;
        return (User) result.get(0);
    }

    @Override
    public User getById(Integer id) {
        return sessionFactory.getCurrentSession().get(User.class, id);
    }

    @Override
    public Integer save(User user) {
        return (Integer) sessionFactory.getCurrentSession().save(user);
    }

    @Override
    public void delete(User user) {
        sessionFactory.getCurrentSession().delete(user);
    }

    public List<User> getAll() {
        return (List<User>) sessionFactory.getCurrentSession().createQuery("from User").list();
    }

    public Integer addFriend(Friend friend) {
        return (Integer) sessionFactory.getCurrentSession().save(friend);
    }

    public List<Friend> getFriends(Integer id) {
        return (List<Friend>) sessionFactory.getCurrentSession()
                .createQuery("from Friend F where F.user =:userId")
                .setInteger("userId", id)
                .list();
    }

    public List<User> searchUsers(String search) {
        return (List<User>) sessionFactory.getCurrentSession()
                .createQuery("from User U where U.firstName like '%:search%' or U.lastName like '%:search%'")
                .setString("search", search).list();
    }
}
