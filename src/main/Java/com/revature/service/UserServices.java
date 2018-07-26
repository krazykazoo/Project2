package com.revature.service;

import com.revature.model.beans.User;
import com.revature.model.dao.implementations.UserDaoImplHibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServices {
    private UserDaoImplHibernate dao;

    @Autowired
    public void setDao(UserDaoImplHibernate dao) {
        this.dao = dao;
    }

    @Transactional
    public User getUserById(Integer id) {
        return dao.getById(id);
    }

    @Transactional
    public Integer saveUser(User user) {
        return dao.save(user);
    }

    @Transactional
    public void deleteUser(User user) {
        dao.delete(user);
    }

    @Transactional
    public User authenticate(String username, String password) {
        return dao.authenticate(username, password);
    }
}
