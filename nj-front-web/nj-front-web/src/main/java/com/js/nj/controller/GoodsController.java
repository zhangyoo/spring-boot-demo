package com.js.nj.controller;

import com.github.pagehelper.PageInfo;
import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.*;
import com.js.nj.service.CompanyService;
import com.js.nj.service.GoodsService;
import com.js.nj.vo.BaseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/goods")
public class GoodsController {

    @Autowired
    private GoodsService goodsService;

    @Autowired
    private CompanyService companyService;

    /**
     * 商品分类首页
     * @return
     */
    @GetMapping("/goodsCateIndex")
    public String goodsCateIndex(Model model, @RequestParam(value = "pageNum", defaultValue = "1") int pageNum , @RequestParam(value = "keyword", defaultValue = "") String keyword){
        RequestParamDto requestParamDto = new RequestParamDto();
        requestParamDto.setKeyword(keyword);
        requestParamDto.setPageNum(pageNum);
        PageInfo<GoodsCategory> getResult = goodsService.getGoodsCateList(requestParamDto);
        model.addAttribute("data" ,getResult.getList());
        model.addAttribute("pageInfo", getResult);
        model.addAttribute("keyword", requestParamDto.getKeyword());
        return "goods/cateIndex";
    }

    /**
     * 添加商品分类页面
     * @return
     */
    @GetMapping("/toAddGoodsCate")
    public String toAddGoodsCate(){
        return "goods/addCate";
    }

    /**
     * 添加商品分类
     * @return
     */
    @ResponseBody
    @RequestMapping("/addGoodsCate.json")
    public ResponseEntity<BaseEntity> addGoodsCate(@RequestBody GoodsCategory record){
        Map<String,String> getInsertResult = goodsService.addGoodsCate(record);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getInsertResult.get("code")) ,getInsertResult.get("msg")));
    }

    /**
     * 编辑商品分类页面
     * @return
     */
    @RequestMapping("/toEditGoodsCate")
    public String toEditGoodsCate(Model model, Long id){
        GoodsCategory getResult = goodsService.selectGoodsCateByPrimaryKey(id);
        model.addAttribute("data" ,getResult);
        return "goods/editCate";
    }

    /**
     * 编辑商品分类
     * @return
     */
    @RequestMapping("/editGoodsCate.json")
    public ResponseEntity<BaseEntity> editEditGoodsCate(@RequestBody GoodsCategory record){
        Map<String,String> getUpdateResult = goodsService.updateGoodsCateByPrimaryKeySelective(record);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getUpdateResult.get("code")) ,getUpdateResult.get("msg")));
    }

    /**
     * 删除商品分类
     * @return
     */
    @RequestMapping("/deleteGoodsCate.json")
    public ResponseEntity<BaseEntity> deleteGoodsCate(@RequestParam String id){
        long objId = Long.parseLong(id);
        Map<String,String> getDeleteResult = goodsService.deleteGoodsCateByPrimaryKey(objId);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getDeleteResult.get("code")) ,getDeleteResult.get("msg")));
    }

    /**
     * 商品首页
     * @return
     */
    @GetMapping("/goodsIndex")
    public String goodsIndex(Model model, @RequestParam(value = "pageNum", defaultValue = "1") int pageNum , @RequestParam(value = "keyword", defaultValue = "") String keyword){
        RequestParamDto requestParamDto = new RequestParamDto();
        requestParamDto.setKeyword(keyword);
        requestParamDto.setPageNum(pageNum);
        PageInfo<Goods> getResult = goodsService.getGoodsList(requestParamDto);
        model.addAttribute("data" ,getResult.getList());
        model.addAttribute("pageInfo", getResult);
        model.addAttribute("keyword", requestParamDto.getKeyword());
        return "goods/goodsIndex";
    }

    /**
     * 添加商品页面
     * @return
     */
    @GetMapping("/toAddGoods")
    public String toAddGoods(Model model){
        RequestParamDto RequestParamDto = null;
        List<GoodsCategory> getGoodsCateLsit = goodsService.getGoodsCateLsit(RequestParamDto);
        List<Company> getCompanyLsit = companyService.getCompanyLsit(RequestParamDto);
        model.addAttribute("goodsCates" ,getGoodsCateLsit);
        model.addAttribute("companys" ,getCompanyLsit);
        return "goods/addGoods";
    }

    /**
     * 添加商品
     * @return
     */
    @ResponseBody
    @RequestMapping("/addGoods.json")
    public ResponseEntity<BaseEntity> addGoods(@RequestBody Goods record){
        Map<String,String> getInsertResult = goodsService.addGoods(record);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getInsertResult.get("code")) ,getInsertResult.get("msg")));
    }

    /**
     * 编辑商品页面
     * @return
     */
    @RequestMapping("/toEditGoods")
    public String toEditGoods(Model model, Long id){
        Goods getResult = goodsService.selectGoodsByPrimaryKey(id);
        RequestParamDto RequestParamDto = null;
        List<GoodsCategory> getGoodsCateLsit = goodsService.getGoodsCateLsit(RequestParamDto);
        List<Company> getCompanyLsit = companyService.getCompanyLsit(RequestParamDto);
        model.addAttribute("goodsCates" ,getGoodsCateLsit);
        model.addAttribute("companys" ,getCompanyLsit);
        model.addAttribute("data" ,getResult);
        return "goods/editGoods";
    }

    /**
     * 编辑商品
     * @return
     */
    @RequestMapping("/editGoods.json")
    public ResponseEntity<BaseEntity> editEditGoods(@RequestBody Goods record){
        Map<String,String> getUpdateResult = goodsService.updateGoodsByPrimaryKeySelective(record);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getUpdateResult.get("code")) ,getUpdateResult.get("msg")));
    }

    /**
     * 删除商品
     * @return
     */
    @RequestMapping("/deleteGoods.json")
    public ResponseEntity<BaseEntity> deleteGoods(@RequestParam String id){
        long objId = Long.parseLong(id);
        Map<String,String> getDeleteResult = goodsService.deleteGoodsByPrimaryKey(objId);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getDeleteResult.get("code")) ,getDeleteResult.get("msg")));
    }

    /**
     * 入库管理首页
     * @return
     */
    @GetMapping("/goodsInIndex")
    public String goodsInIndex(Model model, @RequestParam(value = "pageNum", defaultValue = "1") int pageNum , @RequestParam(value = "keyword", defaultValue = "") String keyword){
        RequestParamDto requestParamDto = new RequestParamDto();
        requestParamDto.setKeyword(keyword);
        requestParamDto.setPageNum(pageNum);
        PageInfo<GoodsIn> getResult = goodsService.getGoodsInList(requestParamDto);
        model.addAttribute("data" ,getResult.getList());
        model.addAttribute("pageInfo", getResult);
        model.addAttribute("keyword", requestParamDto.getKeyword());
        return "goods/goodsInIndex";
    }

    /**
     * 入库页面
     * @return
     */
    @GetMapping("/toGoodsIn")
    public String toGoodsIn(Model model, Long id){
        Goods getResult = goodsService.selectGoodsByPrimaryKey(id);
        model.addAttribute("data" ,getResult);
        return "goods/addGoodsIn";
    }

    /**
     * 入库
     * @return
     */
    @ResponseBody
    @RequestMapping("/addGoodsIn.json")
    public ResponseEntity<BaseEntity> addGoodsIn(@RequestBody GoodsIn record){
        Map<String,String> getInsertResult = goodsService.addGoodsIn(record);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getInsertResult.get("code")) ,getInsertResult.get("msg")));
    }

    /**
     * 出库管理首页
     * @return
     */
    @GetMapping("/goodsOutIndex")
    public String goodsOutIndex(Model model, @RequestParam(value = "pageNum", defaultValue = "1") int pageNum , @RequestParam(value = "keyword", defaultValue = "") String keyword){
        RequestParamDto requestParamDto = new RequestParamDto();
        requestParamDto.setKeyword(keyword);
        requestParamDto.setPageNum(pageNum);
        PageInfo<GoodsOut> getResult = goodsService.getGoodsOutList(requestParamDto);
        model.addAttribute("data" ,getResult.getList());
        model.addAttribute("pageInfo", getResult);
        model.addAttribute("keyword", requestParamDto.getKeyword());
        return "goods/goodsOutIndex";
    }

    /**
     * 出库页面
     * @return
     */
    @GetMapping("/toGoodsOut")
    public String toGoodsOut(Model model, Long id){
        Goods getResult = goodsService.selectGoodsByPrimaryKey(id);
        model.addAttribute("data" ,getResult);
        return "goods/addGoodsOut";
    }

    /**
     * 出库
     * @return
     */
    @ResponseBody
    @RequestMapping("/addGoodsOut.json")
    public ResponseEntity<BaseEntity> addGoodsOut(@RequestBody GoodsOut record){
        Map<String,String> getInsertResult = goodsService.addGoodsOut(record);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getInsertResult.get("code")) ,getInsertResult.get("msg")));
    }
}
