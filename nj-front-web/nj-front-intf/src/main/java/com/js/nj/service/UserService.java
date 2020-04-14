package com.js.nj.service;

import com.github.pagehelper.PageInfo;
import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.User;

import java.util.Map;

public interface UserService {

    User validateUser(String userName, String userPassword);

    Map<String, String> addUser(User user);

    PageInfo<User> getUserList(RequestParamDto requestParamDto);

    User selectByPrimaryKey(Long id);

    Map<String, String> updateByPrimaryKeySelective(User record);

    Map<String, String> deleteByPrimaryKey(Long id);
}
