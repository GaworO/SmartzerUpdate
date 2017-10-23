package com.smartzer.controller;

import com.smartzer.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("")
public class UserController {

    Map<String, Integer> users = new HashMap<>();

    @GetMapping("/users")
    private String getUser(Model model, User user) {
        List<User> users1 = new ArrayList<>();
        String name = "";
        Integer age = 0;

        for (Map.Entry<String, Integer> mapWithUsers : users.entrySet()) {
            name = mapWithUsers.getKey();
            age = mapWithUsers.getValue();
            users1.add(user.setValues(name, age));
        }
        model.addAttribute("users", users1);
        return "allUsers";
    }

    //Creating a new user
    @GetMapping("/user")
    private String newUser(Model model) {
        model.addAttribute("user", new User());
        return "newUser";
    }

    @PostMapping("/user")
    private String newUserPost(@ModelAttribute User user) {
        users.put(user.getName(), user.getAge());
        return "home";

    }


}



