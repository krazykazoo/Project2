package com.revature.service;

import com.revature.model.beans.Friend;
import com.revature.model.beans.User;
import com.revature.model.dao.implementations.UserDaoImplHibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServices {
    private UserDaoImplHibernate dao;

    @Autowired
    public void setDao(UserDaoImplHibernate dao) {
        this.dao = dao;
    }

    @Transactional
    public List<User> getAllUsers() { return dao.getAll();}

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
    public User authenticate(String email, String password) {
        return dao.authenticate(email, password);
    }

    @Transactional
    public List<Friend> getFriends(Integer id) {
        return dao.getFriends(id);
    }

    @Transactional
    public Integer addFriend(Friend friend) {
        return dao.addFriend(friend);
    }
}
