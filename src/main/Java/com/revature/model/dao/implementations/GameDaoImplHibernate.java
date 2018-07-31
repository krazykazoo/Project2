package com.revature.model.dao.implementations;

import com.revature.model.beans.Game;
import com.revature.model.beans.GameGroup;
import com.revature.model.beans.Prompt;
import com.revature.model.dao.interfaces.BaseDao;
import com.revature.model.dao.interfaces.GameDao;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GameDaoImplHibernate implements GameDao {
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public Game getById(Integer id) {
        return sessionFactory.getCurrentSession().get(Game.class, id);
    }

    @Override
    public Integer save(Game game) {
        return (Integer) sessionFactory.getCurrentSession().save(game);
    }

    @Override
    public void delete(Game game) {
        sessionFactory.getCurrentSession().delete(game);
    }

    @Override
    public List<Game> getAll() {
        return (List<Game>) sessionFactory.getCurrentSession().createQuery("from Game").list();
    }

    public List<GameGroup> getAllUserGames(Integer userId) {
        return  (List<GameGroup>)sessionFactory.getCurrentSession()
                .createQuery("from GameGroup G where G.userId =:user_id")
                .setInteger("user_id", userId)
                .list();
    }

    public List<GameGroup> getGameGroup(Integer gameId) {
        return (List<GameGroup>)sessionFactory.getCurrentSession()
                .createQuery("from GameGroup G where G.game =:game_id")
                .setInteger("game_id", gameId)
                .list();
    }

    public Integer getRandomPrompt() {
//        ** SHOTDOC -- got rid of limit 1 and added setMaxResults(1))
//        ---------------- also added rand()
        Prompt prompt = (Prompt) sessionFactory.getCurrentSession()
                .createQuery("from Prompt P order by rand()")
                .setMaxResults(1)
                .list().get(0);
        return prompt.getId();
    }

    public Integer saveGameGroup(GameGroup gameGroup) {
        return (Integer) sessionFactory.getCurrentSession().save(gameGroup);
    }

}
