package com.js.nj.dao;

import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.Goods;

import java.util.List;

public interface GoodsMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Goods record);

    int insertSelective(Goods record);

    Goods selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Goods record);

    int updateByPrimaryKey(Goods record);

    List<Goods> getGoodsLsit(RequestParamDto requestParamDto);
}