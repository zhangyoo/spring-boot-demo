package com.js.nj.entity;

import java.util.Date;

public class GoodsOut {
    private Long id;

    private String goodsCode;

    private Long outGoodsNum;

    private Date outTime;

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

    public Long getOutGoodsNum() {
        return outGoodsNum;
    }

    public void setOutGoodsNum(Long outGoodsNum) {
        this.outGoodsNum = outGoodsNum;
    }

    public Date getOutTime() {
        return outTime;
    }

    public void setOutTime(Date outTime) {
        this.outTime = outTime;
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