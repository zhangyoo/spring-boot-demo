package com.js.nj.entity;

import java.util.Date;

public class GoodsIn {
    private Long id;

    private String goodsCode;

    private Long inGoodsNum;

    private Date inTime;

    private Long gid;

    private String goodsName;

    private Long currentGoodsLeftNum;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGoodsCode() {
        return goodsCode;
    }

    public void setGoodsCode(String goodsCode) {
        this.goodsCode = goodsCode == null ? null : goodsCode.trim();
    }

    public Long getInGoodsNum() {
        return inGoodsNum;
    }

    public void setInGoodsNum(Long inGoodsNum) {
        this.inGoodsNum = inGoodsNum;
    }

    public Date getInTime() {
        return inTime;
    }

    public void setInTime(Date inTime) {
        this.inTime = inTime;
    }

    public Long getGid() {
        return gid;
    }

    public void setGid(Long gid) {
        this.gid = gid;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public Long getCurrentGoodsLeftNum() {
        return currentGoodsLeftNum;
    }

    public void setCurrentGoodsLeftNum(Long currentGoodsLeftNum) {
        this.currentGoodsLeftNum = currentGoodsLeftNum;
    }
}