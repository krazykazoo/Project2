package com.revature.model.beans;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="game_group")
public class GameGroup {

    @Id
    @Column(name="id")
    private int id;

    @Column(name="game_fk")
    private Integer game;

    @Column(name="user_fk")
    private Integer userId;

    @Column(name = "position")
    private int position;


    public GameGroup() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getGame() {
        return game;
    }

    public void setGame(Integer game) {
        this.game = game;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}
