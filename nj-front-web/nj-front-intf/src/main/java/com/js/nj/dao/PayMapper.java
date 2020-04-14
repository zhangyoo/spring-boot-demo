package com.js.nj.dao;

import com.js.nj.entity.Pay;

public interface PayMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Pay record);

    int insertSelective(Pay record);

    Pay selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Pay record);

    int updateByPrimaryKey(Pay record);
}