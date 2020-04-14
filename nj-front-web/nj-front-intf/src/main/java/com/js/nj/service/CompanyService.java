package com.js.nj.service;

import com.github.pagehelper.PageInfo;
import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.Company;

import java.util.List;
import java.util.Map;

public interface CompanyService {

    Map<String, String> addCompany(Company record);

    PageInfo<Company> getCompanyList(RequestParamDto requestParamDto);

    Company selectByPrimaryKey(Long id);

    Map<String, String> updateByPrimaryKeySelective(Company record);

    Map<String, String> deleteByPrimaryKey(Long id);

    List<Company> getCompanyLsit(RequestParamDto requestParamDto);
}
