package com.js.nj.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.js.nj.dao.CompanyMapper;
import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.Company;
import com.js.nj.service.CompanyService;
import com.js.nj.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyMapper companyMapper;

    /**
     * 保存商家
     * @param record
     * @return
     */
    @Override
    public Map<String, String> addCompany(Company record){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "保存失败！");
        record.setCompanyCode(MD5Util.getEncryptedPwd(record.getCompanyName()));
        Timestamp createTime = new Timestamp(System.currentTimeMillis());
        record.setCreateTime(createTime);
        if(companyMapper.insertSelective(record) > 0){
            result.put("code", "0");
            result.put("msg", "保存成功");
        }
        return result;
    }

    /**
     * 获取商家列表
     * @param requestParamDto
     * @return
     */
    @Override
    public PageInfo<Company> getCompanyList(RequestParamDto requestParamDto){
        if(requestParamDto == null){
            requestParamDto = new RequestParamDto();
        }
        PageHelper.startPage(requestParamDto.getPageNum(), requestParamDto.getPageSize());
        List<Company> getUserLsit = companyMapper.getCompanyLsit(requestParamDto);
        PageInfo<Company> pageInfo = new PageInfo<>(getUserLsit);
        return pageInfo;
    }

    /**
     * 获取商家列表
     * @param requestParamDto
     * @return
     */
    @Override
    public List<Company> getCompanyLsit(RequestParamDto requestParamDto){
        return companyMapper.getCompanyLsit(requestParamDto);
    }

    @Override
    public Company selectByPrimaryKey(Long id){
        return companyMapper.selectByPrimaryKey(id);
    }

    /**
     * 更新商家
     * @param record
     * @return
     */
    @Override
    public Map<String, String> updateByPrimaryKeySelective(Company record){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "更新失败！");
        record.setCompanyCode(MD5Util.getEncryptedPwd(record.getCompanyName()));
        Timestamp createTime = new Timestamp(System.currentTimeMillis());
        record.setUpdateTime(createTime);
        if(companyMapper.updateByPrimaryKeySelective(record) > 0){
            result.put("code", "0");
            result.put("msg", "更新成功");
        }
        return result;
    }

    /**
     * 删除商家
     * @param id
     * @return
     */
    @Override
    public Map<String, String> deleteByPrimaryKey(Long id){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "删除失败！");
        if(companyMapper.deleteByPrimaryKey(id) > 0){
            result.put("code", "0");
            result.put("msg", "删除成功");
        }
        return result;
    }

}
