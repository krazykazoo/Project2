package com.revature.controller;

import com.revature.model.beans.Friend;
import com.revature.model.beans.User;
import com.revature.model.beans.meta.UserAuth;
import com.revature.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@ResponseBody
@RequestMapping(path="/users")
public class UserController {

    private UserServices userServices;

    @Autowired
    public void setUserServices(UserServices userServices) {
        this.userServices = userServices;
    }

    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<User> authenticate(@RequestBody UserAuth userAuth, HttpServletResponse response) {

        User user = userServices.authenticate(userAuth.getUsername(),userAuth.getPassword());
        if (user != null) {
            Cookie cookie = new Cookie("id", user.getId().toString());
            response.addCookie(cookie);
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>((User) null, HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userServices.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping(path = "/friends", produces = "application/json")
    public ResponseEntity<List<Friend>> getFriends(@RequestParam("id") Integer id) {
        return new ResponseEntity<>(userServices.getFriends(id), HttpStatus.OK);
    }

    @PostMapping(path = "/create", consumes = "application/json")
    public ResponseEntity<Integer> createUser(@RequestBody User user) {
        return new ResponseEntity<>(userServices.saveUser(user), HttpStatus.OK);
    }

    //This method has user, friend, and status should be set to 1 for request
    @PostMapping(path = "/friends/addRequest", consumes = "application/json")
    public ResponseEntity<Integer> addFriendRequest(@RequestBody Friend friend) {
        return new ResponseEntity<>(userServices.addFriend(friend), HttpStatus.OK);
    }

    @GetMapping(path = "/search")
    public ResponseEntity<List<User>> searchUsers(@RequestParam("search") String search) {
        return new ResponseEntity<>(userServices.searchUsers(search), HttpStatus.OK);
    }
}
