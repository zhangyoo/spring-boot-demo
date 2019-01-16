package com.js.nj.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.js.nj.dao.TeacherMapper;
import com.js.nj.entity.Teacher;
import com.js.nj.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherMapper teacherMapper;

    @Override
    @Transactional
    public int insertTeacher(Teacher teacher){
        return teacherMapper.insert(teacher);
    }

    @Override
    public PageInfo<Teacher> getTeacherLsit(int pageNum, int pageSize){
        PageHelper.startPage(pageNum, pageSize);
        List<Teacher> getTeacherLsit = teacherMapper.getTeacherLsit();
        PageInfo<Teacher> pageInfo = new PageInfo<>(getTeacherLsit);
        return pageInfo;
    }
}
