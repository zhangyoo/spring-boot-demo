package com.js.nj.controller;

import com.js.nj.service.PayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pay")
public class PayController {

    @Autowired
    private PayService payService;

    @RequestMapping("/index")
    public String index(){
        return "/pay/incomeIndex";
    }

}
