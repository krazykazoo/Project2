package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users", schema="public")
public class User {

    @Id
    @Column(name="id")
    private Integer id;

    @Column(name="username")
    private String username;

    @Column(name="pass")
    private String password;

    @Column(name="first_name")
    private String firstName;

    
}
