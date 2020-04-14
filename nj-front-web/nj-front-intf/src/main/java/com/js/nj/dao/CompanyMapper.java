package com.js.nj.dao;

import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.Company;

import java.util.List;

public interface CompanyMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Company record);

    int insertSelective(Company record);

    Company selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Company record);

    int updateByPrimaryKey(Company record);

    List<Company> getCompanyLsit(RequestParamDto requestParamDto);
}