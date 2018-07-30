package com.revature.model.beans;


import javax.persistence.*;

@Entity
@Table(name = "user_prompts")
public class UserPrompt {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "game_fk")
    private int gameId;

    @Column(name = "user_fk")
    private int userId;

    @Column(name = "response")
    private String response;

    public UserPrompt() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    @Override
    public String toString() {
        return "UserPrompt{" +
                "id=" + id +
                ", gameId=" + gameId +
                ", userId=" + userId +
                ", response='" + response + '\'' +
                '}';
    }
}
