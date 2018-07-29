package com.revature.service;

import com.revature.model.beans.Game;
import com.revature.model.beans.GameGroup;
import com.revature.model.beans.Prompt;
import com.revature.model.dao.implementations.GameDaoImplHibernate;
import com.revature.model.dao.implementations.PromptDaoImplHibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class GameServices {
    private GameDaoImplHibernate dao;
    private PromptDaoImplHibernate pdao;

    @Autowired
    public void setDao(GameDaoImplHibernate dao) {
        this.dao = dao;
    }

    @Autowired
    public void setPdao(PromptDaoImplHibernate pdao) {
        this.pdao = pdao;
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
}
