package com.revature.model.dao.implementations;

import com.revature.model.beans.User;
import com.revature.model.beans.UserPrompt;
import com.revature.model.dao.interfaces.UserPromptDao;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserPromptDaoImplHibernate implements UserPromptDao {
    SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }


    @Override
    public UserPrompt getById(Integer id) {
        return sessionFactory.getCurrentSession().get(UserPrompt.class, id);
    }

    @Override
    public Integer save(UserPrompt userPrompt) {
        return (Integer) sessionFactory.getCurrentSession().save(userPrompt);
    }

    @Override
    public void delete(UserPrompt userPrompt) {
        sessionFactory.getCurrentSession().delete(userPrompt);
    }

    @Override
    public List<UserPrompt> getAll() {
        return (List<UserPrompt>) sessionFactory.getCurrentSession()
                .createQuery("from UserPrompt").list();
    }

    public UserPrompt getLastSubmission(Integer gameId) {
        return (UserPrompt) sessionFactory.getCurrentSession()
                .createQuery("from UserPrompt U where U.gameId =:gameId order by id desc limit 1")
                .list().get(0);
    }
}
