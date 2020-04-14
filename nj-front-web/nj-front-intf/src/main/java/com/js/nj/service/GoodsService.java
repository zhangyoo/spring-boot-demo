package com.js.nj.service;

import com.github.pagehelper.PageInfo;
import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.Goods;
import com.js.nj.entity.GoodsCategory;
import com.js.nj.entity.GoodsIn;
import com.js.nj.entity.GoodsOut;

import java.util.List;
import java.util.Map;

public interface GoodsService {

    Map<String, String> addGoodsCate(GoodsCategory record);

    PageInfo<GoodsCategory> getGoodsCateList(RequestParamDto requestParamDto);

    List<GoodsCategory> getGoodsCateLsit(RequestParamDto requestParamDto);

    GoodsCategory selectGoodsCateByPrimaryKey(Long id);

    Map<String, String> updateGoodsCateByPrimaryKeySelective(GoodsCategory record);

    Map<String, String> deleteGoodsCateByPrimaryKey(Long id);

    Map<String, String> addGoods(Goods record);

    PageInfo<Goods> getGoodsList(RequestParamDto requestParamDto);

    Goods selectGoodsByPrimaryKey(Long id);

    Map<String, String> updateGoodsByPrimaryKeySelective(Goods record);

    Map<String, String> deleteGoodsByPrimaryKey(Long id);

    Map<String, String> addGoodsIn(GoodsIn record);

    PageInfo<GoodsIn> getGoodsInList(RequestParamDto requestParamDto);

    Map<String, String> addGoodsOut(GoodsOut record);

    PageInfo<GoodsOut> getGoodsOutList(RequestParamDto requestParamDto);


}
