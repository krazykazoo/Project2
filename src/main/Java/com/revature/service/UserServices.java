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
    public User authenticate(String username, String password) {
        return dao.authenticate(username, password);
    }

    @Transactional
    public List<Friend> getFriends(Integer id) {
        return dao.getFriends(id);
    }

    @Transactional
    public Integer addFriend(Friend friend) {
        return dao.addFriend(friend);
    }

    @Transactional
    public List<User> searchUsers(String search) { return dao.searchUsers(search); }

    @Transactional
    public Integer acceptFriendRequest(Integer userId, Integer friendId) {
        Friend myView = dao.getFriend(userId, friendId);
        Friend yourView = dao.getFriend(friendId, userId);

        yourView = initializeIfNeeded(friendId, userId, yourView);
        myView = initializeIfNeeded(userId, friendId, myView);

        yourView.setStatus(2);
        myView.setStatus(2);

        dao.saveFriend(yourView);
        dao.saveFriend(myView);

        return 1;
    }

    @Transactional
    public Integer rejectFriendRequest(Integer userId, Integer friendId) {
        Friend myView = dao.getFriend(userId, friendId);
        Friend yourView = dao.getFriend(friendId, userId);

        yourView = initializeIfNeeded(friendId, userId, yourView);
        myView = initializeIfNeeded(userId, friendId, myView);

        yourView.setStatus(3);
        myView.setStatus(3);

        dao.saveFriend(yourView);
        dao.saveFriend(myView);

        return 1;

    }

    private Friend initializeIfNeeded(Integer userId, Integer friendId, Friend view) {
        if (view == null) {
            view = new Friend();
            view.setUser(userId);
            view.setFriend(friendId);
            view.setStatus(2);
        }

        return view;
    }
}
