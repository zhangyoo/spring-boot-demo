package com.js.nj.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.js.nj.dao.UserMapper;
import com.js.nj.entity.Teacher;
import com.js.nj.entity.User;
import com.js.nj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User validateUser(String userName, String userPassword){
        User user = new User();
        user.setUserName(userName);
        user.setUserPassword(userPassword);
        return userMapper.validateUser(user);
    }

}
