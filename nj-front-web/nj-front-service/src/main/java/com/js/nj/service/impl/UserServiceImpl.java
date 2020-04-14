package com.js.nj.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.js.nj.dao.UserMapper;
import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.User;
import com.js.nj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    /**
     * 验证用户是否存在
     * @param userName
     * @param userPassword
     * @return
     */
    @Override
    public User validateUser(String userName, String userPassword){
        User user = new User();
        user.setUserName(userName);
        user.setUserPassword(userPassword);
        return userMapper.validateUser(user);
    }

    /**
     * 保存用户
     * @param user
     * @return
     */
    @Override
    public Map<String, String> addUser(User user){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "保存失败！");
        Timestamp createTime = new Timestamp(System.currentTimeMillis());
        user.setCreateTime(createTime);
        if(userMapper.insertSelective(user) > 0){
            result.put("code", "0");
            result.put("msg", "保存成功");
        }
        return result;
    }

    /**
     * 获取用户列表
     * @param requestParamDto
     * @return
     */
    @Override
    public PageInfo<User> getUserList(RequestParamDto requestParamDto){
        if(requestParamDto == null){
            requestParamDto = new RequestParamDto();
        }
        PageHelper.startPage(requestParamDto.getPageNum(), requestParamDto.getPageSize());
        List<User> getUserLsit = userMapper.getUserLsit(requestParamDto);
        PageInfo<User> pageInfo = new PageInfo<>(getUserLsit);
        return pageInfo;
    }

    @Override
    public User selectByPrimaryKey(Long id){
        return userMapper.selectByPrimaryKey(id);
    }

    /**
     * 更新用户
     * @param record
     * @return
     */
    @Override
    public Map<String, String> updateByPrimaryKeySelective(User record){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "更新失败！");
        Timestamp createTime = new Timestamp(System.currentTimeMillis());
        record.setUpdateTime(createTime);
        if(userMapper.updateByPrimaryKeySelective(record) > 0){
            result.put("code", "0");
            result.put("msg", "更新成功");
        }
        return result;
    }

    /**
     * 删除用户
     * @param id
     * @return
     */
    @Override
    public Map<String, String> deleteByPrimaryKey(Long id){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "删除失败！");
        if(userMapper.deleteByPrimaryKey(id) > 0){
            result.put("code", "0");
            result.put("msg", "删除成功");
        }
        return result;
    }

}
