package com.revature.model.dao.implementations;

import com.revature.model.beans.Prompt;
import com.revature.model.dao.interfaces.PromptDao;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PromptDaoImplHibernate implements PromptDao {
    private SessionFactory sessionFactory;


    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public Prompt getById(Integer id) {
        return sessionFactory.getCurrentSession().get(Prompt.class, id);
    }

    @Override
    public Integer save(Prompt prompt) {
        return (Integer) sessionFactory.getCurrentSession().save(prompt);
    }

    @Override
    public void delete(Prompt prompt) {
        sessionFactory.getCurrentSession().delete(prompt);
    }

    @Override
    public List<Prompt> getAll() {
        return (List<Prompt>) sessionFactory.getCurrentSession().createQuery("from Prompt").list();
    }
}
