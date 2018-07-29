package com.revature.controller;

import com.revature.model.beans.Game;
import com.revature.model.beans.GameGroup;
import com.revature.model.beans.Prompt;
import com.revature.service.GameServices;
import com.revature.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
@ResponseBody
@RequestMapping(path="/games")
public class GameController {

    private GameServices gameServices;
    private UserServices userServices;

    @Autowired
    public void setGameServices(GameServices gameServices) {
        this.gameServices = gameServices;
    }

    @Autowired
    public void setUserServices(UserServices userServices) {
        this.userServices = userServices;
    }

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<Game>> getAllGamesForUser(@RequestParam("id") Integer id) {
        List<Game> games = gameServices.getAllUserGames(id);
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @GetMapping(path = "/game/prompt", produces = "application/json")
    public ResponseEntity<Prompt> getPrompt(@RequestParam("id") Integer id) {
        return new ResponseEntity<>(gameServices.getPrompt(id), HttpStatus.OK);
    }
}
