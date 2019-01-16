package com.js.nj.controller;

import com.js.nj.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private TeacherService teacherService;

    @RequestMapping("/test")
    public String test(){
        return "/student/index";
    }

    @GetMapping("/getTeachers")
    public String getTeachers(){
        return "teacher/teacher";
    }
}
