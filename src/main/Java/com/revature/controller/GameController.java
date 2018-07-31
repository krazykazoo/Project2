package com.revature.controller;

import com.revature.model.beans.Game;
import com.revature.model.beans.GameGroup;
import com.revature.model.beans.Prompt;
import com.revature.model.beans.UserPrompt;
import com.revature.service.GameServices;
import com.revature.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

//    ** SHOTDOC -- added get mapping here AND methods in GameServices and GameDaoImpliHibernate
    @GetMapping(path="/game/gameGroup", produces = "application/json")
    public ResponseEntity<List<GameGroup>> getGameGroup(@RequestParam("id") Integer gameId) {
        List<GameGroup> gameGroups = gameServices.getGameGroup(gameId);
        return new ResponseEntity<>(gameGroups, HttpStatus.OK);
    }

    @GetMapping(path = "/game/prompt", produces = "application/json")
    public ResponseEntity<Prompt> getPrompt(@RequestParam("id") Integer id) {
        return new ResponseEntity<>(gameServices.getPrompt(id), HttpStatus.OK);
    }

    @PostMapping(path = "/game/submitResponse", consumes = "application/json")
    public ResponseEntity<Integer> getPrompt(@RequestBody UserPrompt userPrompt) {
        return new ResponseEntity<>(gameServices.submitResponse(userPrompt), HttpStatus.OK);
    }

    @GetMapping(path = "/game/userPrompt", produces = "application/json")
    public ResponseEntity<UserPrompt> getUserPrompt(@RequestParam("gameId") Integer gameId) {
        return new ResponseEntity<>(gameServices.getLastUserPrompt(gameId), HttpStatus.OK);
    }

    @PostMapping(path = "/game/create", consumes = "application/json")
    public ResponseEntity<Game> createGame(@RequestBody List<Integer> users) {
        return new ResponseEntity<>(gameServices.createGame(users), HttpStatus.OK);
    }
}
