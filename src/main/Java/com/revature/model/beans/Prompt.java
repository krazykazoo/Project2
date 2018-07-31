package com.revature.model.beans;

import javax.persistence.*;

@Entity
@Table(name="prompts")
public class Prompt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ** SHOTDOC - added generated value
    @Column
    private int id;

    @Column(name="prompt")
    private String prompt;

    public Prompt() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPrompt() {
        return prompt;
    }

    public void setPrompt(String prompt) {
        this.prompt = prompt;
    }

    @Override
    public String toString() {
        return "Prompt{" +
                "id=" + id +
                ", prompt='" + prompt + '\'' +
                '}';
    }
}
