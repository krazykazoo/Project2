package com.revature.model.beans;

import javax.persistence.*;

@Entity
@Table(name="game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ** SHOTDOC - added generated value
    @Column
    private int id;

    @Column(name="turn_number")
    private int turnNumber;

    @Column(name = "original_prompt_fk")
    private int originalPrompt;

    @Column(name = "number_playing")
    private int numberPlaying;

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

    public int getNumberPlaying() {
        return numberPlaying;
    }

    public void setNumberPlaying(int numberPlaying) {
        this.numberPlaying = numberPlaying;
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
