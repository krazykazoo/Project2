package com.revature.service;

import com.revature.model.beans.*;
import com.revature.model.dao.implementations.GameDaoImplHibernate;
import com.revature.model.dao.implementations.PromptDaoImplHibernate;
import com.revature.model.dao.implementations.UserPromptDaoImplHibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class GameServices {
    private GameDaoImplHibernate dao;
    private PromptDaoImplHibernate pdao;
    private UserPromptDaoImplHibernate updao;

    @Autowired
    public void setDao(GameDaoImplHibernate dao) {
        this.dao = dao;
    }

    @Autowired
    public void setPdao(PromptDaoImplHibernate pdao) {
        this.pdao = pdao;
    }

    @Autowired
    public void setUpdao(UserPromptDaoImplHibernate updao) {
        this.updao = updao;
    }

    @Transactional
    public Game getById(Integer id) { return dao.getById(id); }

    @Transactional
    public List<Game> getAllUserGames(Integer id) {
        List<GameGroup> list = dao.getAllUserGames(id);
        List<Game> gameList = new ArrayList<>();
        for (GameGroup g: list) {
            gameList.add(dao.getById(g.getGame()));
        }
        return gameList;
    }

    @Transactional
    public Prompt getPrompt(Integer id) {
        return pdao.getById(id);
    }

    @Transactional
    public Integer submitResponse(UserPrompt userPrompt) {
        //gotta update game turn
        Game game = dao.getById(userPrompt.getGameId());
        game.setTurnNumber(game.getTurnNumber() + 1);
        dao.save(game);
        updao.save(userPrompt);

        return 1;
    }

    @Transactional
    public UserPrompt getLastUserPrompt(Integer gameId) {
        return updao.getLastSubmission(gameId);
    }

    @Transactional
    public Game createGame(List<Integer> users) {
        Game game = new Game();
        game.setTurnNumber(0);
        game.setNumberPlaying(users.size());
        game.setOriginalPrompt(dao.getRandomPrompt());
        game.setId(dao.save(game));

        int position = 0;
        for (Integer userId : users) {
            GameGroup gameGroup = new GameGroup();
            gameGroup.setGame(game.getId());
            gameGroup.setUserId(userId);
            gameGroup.setPosition(position);
            position++;
//            ** SHOTDOC -- switched this to setId() like above
            gameGroup.setId(dao.saveGameGroup(gameGroup));
        }

        return game;
    }
}
