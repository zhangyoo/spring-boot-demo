package com.js.nj.dao;

import com.js.nj.entity.Income;

public interface IncomeMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Income record);

    int insertSelective(Income record);

    Income selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Income record);

    int updateByPrimaryKey(Income record);
}