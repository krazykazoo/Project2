package com.revature.model.dao.interfaces;

import com.revature.model.beans.User;

public interface UserDao extends BaseDao<User> {
    public User authenticate(String username, String password);
}
