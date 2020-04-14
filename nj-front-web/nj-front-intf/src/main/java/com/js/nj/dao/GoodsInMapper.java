package com.js.nj.dao;

import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.GoodsIn;

import java.util.List;

public interface GoodsInMapper {
    int deleteByPrimaryKey(Long id);

    int insert(GoodsIn record);

    int insertSelective(GoodsIn record);

    GoodsIn selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(GoodsIn record);

    int updateByPrimaryKey(GoodsIn record);

    List<GoodsIn> getGoodsInLsit(RequestParamDto requestParamDto);
}