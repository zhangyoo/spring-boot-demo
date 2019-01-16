package com.js.nj.service;

import com.github.pagehelper.PageInfo;
import com.js.nj.entity.Teacher;

public interface TeacherService {

    int insertTeacher(Teacher teacher);

    PageInfo<Teacher> getTeacherLsit(int pageNum, int pageSize);
}
