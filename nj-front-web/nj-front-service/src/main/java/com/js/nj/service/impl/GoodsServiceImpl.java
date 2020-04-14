package com.js.nj.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.js.nj.dao.GoodsCategoryMapper;
import com.js.nj.dao.GoodsInMapper;
import com.js.nj.dao.GoodsMapper;
import com.js.nj.dao.GoodsOutMapper;
import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.Goods;
import com.js.nj.entity.GoodsCategory;
import com.js.nj.entity.GoodsIn;
import com.js.nj.entity.GoodsOut;
import com.js.nj.service.GoodsService;
import com.js.nj.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GoodsServiceImpl implements GoodsService {

    @Autowired
    private GoodsMapper goodsMapper;

    @Autowired
    private GoodsCategoryMapper goodsCategoryMapper;

    @Autowired
    private GoodsInMapper goodsInMapper;

    @Autowired
    private GoodsOutMapper goodsOutMapper;

    /**
     * 保存商品分类
     * @param record
     * @return
     */
    @Override
    public Map<String, String> addGoodsCate(GoodsCategory record){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "保存失败！");
        record.setParentGoodsCategoryCode("0");
        record.setGoodsCategoryCode(MD5Util.getEncryptedPwd(record.getCategoryName()));
        if(goodsCategoryMapper.insertSelective(record) > 0){
            result.put("code", "0");
            result.put("msg", "保存成功");
        }
        return result;
    }

    /**
     * 获取商品分类列表
     * @param requestParamDto
     * @return
     */
    @Override
    public PageInfo<GoodsCategory> getGoodsCateList(RequestParamDto requestParamDto){
        if(requestParamDto == null){
            requestParamDto = new RequestParamDto();
        }
        PageHelper.startPage(requestParamDto.getPageNum(), requestParamDto.getPageSize());
        List<GoodsCategory> getGoodsCategoryLsit = goodsCategoryMapper.getGoodsCateLsit(requestParamDto);
        PageInfo<GoodsCategory> pageInfo = new PageInfo<>(getGoodsCategoryLsit);
        return pageInfo;
    }

    /**
     * 获取商品分类列表
     * @param requestParamDto
     * @return
     */
    @Override
    public List<GoodsCategory> getGoodsCateLsit(RequestParamDto requestParamDto){
        return goodsCategoryMapper.getGoodsCateLsit(requestParamDto);
    }

    @Override
    public GoodsCategory selectGoodsCateByPrimaryKey(Long id){
        return goodsCategoryMapper.selectByPrimaryKey(id);
    }

    /**
     * 更新商品分类
     * @param record
     * @return
     */
    @Override
    public Map<String, String> updateGoodsCateByPrimaryKeySelective(GoodsCategory record){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "更新失败！");
        record.setGoodsCategoryCode(MD5Util.getEncryptedPwd(record.getCategoryName()));
        if(goodsCategoryMapper.updateByPrimaryKeySelective(record) > 0){
            result.put("code", "0");
            result.put("msg", "更新成功");
        }
        return result;
    }

    /**
     * 删除商品分类
     * @param id
     * @return
     */
    @Override
    public Map<String, String> deleteGoodsCateByPrimaryKey(Long id){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "删除失败！");
        if(goodsCategoryMapper.deleteByPrimaryKey(id) > 0){
            result.put("code", "0");
            result.put("msg", "删除成功");
        }
        return result;
    }

    /**
     * 保存商品
     * @param record
     * @return
     */
    @Override
    public Map<String, String> addGoods(Goods record){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "保存失败！");
        Timestamp createTime = new Timestamp(System.currentTimeMillis());
        record.setCreateTime(createTime);
        record.setGoodsCode(MD5Util.getEncryptedPwd(record.getGoodsName() + System.currentTimeMillis()));
        if(goodsMapper.insertSelective(record) > 0){
            result.put("code", "0");
            result.put("msg", "保存成功");
        }
        return result;
    }

    /**
     * 获取商品列表
     * @param requestParamDto
     * @return
     */
    @Override
    public PageInfo<Goods> getGoodsList(RequestParamDto requestParamDto){
        if(requestParamDto == null){
            requestParamDto = new RequestParamDto();
        }
        PageHelper.startPage(requestParamDto.getPageNum(), requestParamDto.getPageSize());
        List<Goods> getUserLsit = goodsMapper.getGoodsLsit(requestParamDto);
        PageInfo<Goods> pageInfo = new PageInfo<>(getUserLsit);
        return pageInfo;
    }

    @Override
    public Goods selectGoodsByPrimaryKey(Long id){
        return goodsMapper.selectByPrimaryKey(id);
    }

    /**
     * 更新商品
     * @param record
     * @return
     */
    @Override
    public Map<String, String> updateGoodsByPrimaryKeySelective(Goods record){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "更新失败！");
        Timestamp createTime = new Timestamp(System.currentTimeMillis());
        record.setUpdateTime(createTime);
        record.setGoodsCode(MD5Util.getEncryptedPwd(record.getGoodsName() + System.currentTimeMillis()));
        if(goodsMapper.updateByPrimaryKeySelective(record) > 0){
            result.put("code", "0");
            result.put("msg", "更新成功");
        }
        return result;
    }

    /**
     * 删除商品
     * @param id
     * @return
     */
    @Override
    public Map<String, String> deleteGoodsByPrimaryKey(Long id){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "删除失败！");
        if(goodsMapper.deleteByPrimaryKey(id) > 0){
            result.put("code", "0");
            result.put("msg", "删除成功");
        }
        return result;
    }

    /**
     * 入库
     * @param record
     * @return
     */
    @Override
    public Map<String, String> addGoodsIn(GoodsIn record){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "保存失败！");
        Goods goods = goodsMapper.selectByPrimaryKey(record.getGid());
        if(goods == null){
            result.put("msg", "商品被删除或不存在！");
            return result;
        }
        Timestamp createTime = new Timestamp(System.currentTimeMillis());
        record.setInTime(createTime);
        record.setCurrentGoodsLeftNum(goods.getGoodsNum() + record.getInGoodsNum());
        if(goodsInMapper.insertSelective(record) > 0){
            //增加商品库存量
            goods.setGoodsNum(goods.getGoodsNum() + record.getInGoodsNum());
            goods.setUpdateTime(createTime);
            goodsMapper.updateByPrimaryKeySelective(goods);
            result.put("code", "0");
            result.put("msg", "保存成功");
        }
        return result;
    }

    /**
     * 入库列表
     * @param requestParamDto
     * @return
     */
    @Override
    public PageInfo<GoodsIn> getGoodsInList(RequestParamDto requestParamDto){
        if(requestParamDto == null){
            requestParamDto = new RequestParamDto();
        }
        PageHelper.startPage(requestParamDto.getPageNum(), requestParamDto.getPageSize());
        List<GoodsIn> getGoodsInLsit = goodsInMapper.getGoodsInLsit(requestParamDto);
        PageInfo<GoodsIn> pageInfo = new PageInfo<>(getGoodsInLsit);
        return pageInfo;
    }

    /**
     * 出库
     * @param record
     * @return
     */
    @Override
    public Map<String, String> addGoodsOut(GoodsOut record){
        Map<String, String> result = new HashMap<>();
        result.put("code", "-1");
        result.put("msg", "保存失败！");
        Goods goods = goodsMapper.selectByPrimaryKey(record.getGid());
        if(goods == null){
            result.put("msg", "商品被删除或不存在！");
            return result;
        }
        if(record.getOutGoodsNum() > goods.getGoodsNum()){
            result.put("msg", "商品库存量不足！");
            return result;
        }
        Timestamp createTime = new Timestamp(System.currentTimeMillis());
        record.setCurrentGoodsLeftNum(goods.getGoodsNum() - record.getOutGoodsNum());
        record.setOutTime(createTime);
        if(goodsOutMapper.insertSelective(record) > 0){
            //减少商品库存量
            goods.setGoodsNum(goods.getGoodsNum() - record.getOutGoodsNum());
            goods.setUpdateTime(createTime);
            goodsMapper.updateByPrimaryKeySelective(goods);
            result.put("code", "0");
            result.put("msg", "保存成功");
        }
        return result;
    }

    /**
     * 出库列表
     * @param requestParamDto
     * @return
     */
    @Override
    public PageInfo<GoodsOut> getGoodsOutList(RequestParamDto requestParamDto){
        if(requestParamDto == null){
            requestParamDto = new RequestParamDto();
        }
        PageHelper.startPage(requestParamDto.getPageNum(), requestParamDto.getPageSize());
        List<GoodsOut> getUserLsit = goodsOutMapper.getGoodsOutLsit(requestParamDto);
        PageInfo<GoodsOut> pageInfo = new PageInfo<>(getUserLsit);
        return pageInfo;
    }

}
