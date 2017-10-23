package com.smartzer.entity;

import org.springframework.stereotype.Controller;

import java.util.List;


public class User {


    private long id;
    private String name;
    private int age;



    public User() {
    }
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }


    public User setValues(String name , Integer age ) {
        User user = new User() ;
        user.setName(name);
        user.setAge(age);
        return  user ;
    }



}
