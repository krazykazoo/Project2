package com.revature.model.dao.implementations;

import com.revature.model.beans.User;
import com.revature.model.dao.interfaces.UserDao;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserDaoImplHibernate implements UserDao {
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory factory) {
        this.sessionFactory = factory;
    }

    @Override
    public User authenticate(String username, String password) {
        String hql = "from User where username=? and password=?";
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
        query.setString(1, username);
        query.setString(2, password);
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
}