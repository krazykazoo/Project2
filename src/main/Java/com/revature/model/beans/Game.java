package com.revature.model.beans;

import javax.persistence.*;

@Entity
@Table(name="game")
public class Game {

    @Id
    @Column
    private int id;

    @Column(name="turn_number")
    private int turnNumber;

    @Column(name = "original_prompt_fk")
    private int originalPrompt;

    public Game() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTurnNumber() {
        return turnNumber;
    }

    public void setTurnNumber(int turnNumber) {
        this.turnNumber = turnNumber;
    }

    public int getOriginalPrompt() {
        return originalPrompt;
    }

    public void setOriginalPrompt(int originalPrompt) {
        this.originalPrompt = originalPrompt;
    }

    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", turnNumber=" + turnNumber +
                ", originalPrompt=" + originalPrompt +
                '}';
    }
}
