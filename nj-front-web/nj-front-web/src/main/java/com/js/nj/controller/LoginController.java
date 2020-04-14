package com.js.nj.controller;

import com.js.nj.entity.User;
import com.js.nj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public String login(){
        return "login/login";
    }

    @RequestMapping(value = "/login_in", method = RequestMethod.POST)
    public String login_in(User user, HttpServletRequest request, Model model){
        User userInfo = userService.validateUser(user.getUserName(), user.getUserPassword());
        if(userInfo == null){
            return "login/login";
        }

        HttpSession session = request.getSession();
        session.setAttribute("USER_INFO", userInfo);
        return "redirect:/index";

    }

    @RequestMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().removeAttribute(request.getSession().getId());
        return "login/login";
    }
}
