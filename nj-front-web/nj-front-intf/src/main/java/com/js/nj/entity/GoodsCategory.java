package com.js.nj.entity;

public class GoodsCategory {
    private Long id;

    private String goodsCategoryCode;

    private String categoryName;

    private String parentGoodsCategoryCode;

    private Boolean isDel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGoodsCategoryCode() {
        return goodsCategoryCode;
    }

    public void setGoodsCategoryCode(String goodsCategoryCode) {
        this.goodsCategoryCode = goodsCategoryCode == null ? null : goodsCategoryCode.trim();
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName == null ? null : categoryName.trim();
    }

    public String getParentGoodsCategoryCode() {
        return parentGoodsCategoryCode;
    }

    public void setParentGoodsCategoryCode(String parentGoodsCategoryCode) {
        this.parentGoodsCategoryCode = parentGoodsCategoryCode == null ? null : parentGoodsCategoryCode.trim();
    }

    public Boolean getIsDel() {
        return isDel;
    }

    public void setIsDel(Boolean isDel) {
        this.isDel = isDel;
    }
}