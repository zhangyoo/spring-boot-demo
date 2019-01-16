package com.js.nj.controller;

import com.github.pagehelper.PageInfo;
import com.js.nj.entity.Teacher;
import com.js.nj.service.TeacherService;
import com.js.nj.vo.BaseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @GetMapping("/test.JSON")
    public String test(){
        return "test";
    }

    @GetMapping("/getTeachers.JSON")
    public ResponseEntity<BaseEntity> getTeachers(){
        PageInfo<Teacher> getTeachers = teacherService.getTeacherLsit(0,2);
        return ResponseEntity.ok(new BaseEntity(getTeachers.getList()));
    }
}
