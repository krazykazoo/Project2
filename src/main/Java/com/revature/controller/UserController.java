package com.revature.controller;

import com.revature.model.beans.User;
import com.revature.model.beans.meta.UserPass;
import com.revature.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(path="users")
public class UserController {

    private UserServices userServices;

    @Autowired
    public void setUserServices(UserServices userServices) {
        this.userServices = userServices;
    }

    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<User> authenticate(@RequestBody UserPass userPass, HttpServletResponse response) {

        User user = userServices.authenticate(userPass.getUsername(),userPass.getPassword());
        if (user != null) {
            Cookie cookie = new Cookie("id", user.getId().toString());
            response.addCookie(cookie);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        }
        else {
            try {
                response.sendError(401);
                return null;
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }
        }
    }
}
