package com.js.nj.dao;

import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.GoodsCategory;
import java.util.List;

public interface GoodsCategoryMapper {
    int deleteByPrimaryKey(Long id);

    int insert(GoodsCategory record);

    int insertSelective(GoodsCategory record);

    GoodsCategory selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(GoodsCategory record);

    int updateByPrimaryKey(GoodsCategory record);

    List<GoodsCategory> getGoodsCateLsit(RequestParamDto requestParamDto);
}