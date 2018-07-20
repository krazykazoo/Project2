package com.revature.model.service;

import com.revature.model.beans.User;
import com.revature.model.dao.implementations.UserDaoImplHibernate;
import com.revature.model.dao.interfaces.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {
    private UserDaoImplHibernate dao;

    @Autowired
    public void setDao(UserDaoImplHibernate dao) {
        this.dao = dao;
    }

    public User getUserById(Integer id) {
        return dao.getById(id);
    }

    public Integer saveUser(User user) {
        return dao.save(user);
    }

    public void deleteUser(User user) {
        dao.delete(user);
    }

    public User authenticate(String username, String password) {
        return dao.authenticate(username, password);
    }
}
