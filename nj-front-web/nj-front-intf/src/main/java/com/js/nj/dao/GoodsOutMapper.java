package com.js.nj.dao;

import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.GoodsOut;

import java.util.List;

public interface GoodsOutMapper {
    int deleteByPrimaryKey(Long id);

    int insert(GoodsOut record);

    int insertSelective(GoodsOut record);

    GoodsOut selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(GoodsOut record);

    int updateByPrimaryKey(GoodsOut record);

    List<GoodsOut> getGoodsOutLsit(RequestParamDto requestParamDto);
}