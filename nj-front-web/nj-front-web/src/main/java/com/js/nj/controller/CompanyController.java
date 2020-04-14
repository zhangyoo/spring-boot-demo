package com.js.nj.controller;

import com.github.pagehelper.PageInfo;
import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.Company;
import com.js.nj.service.CompanyService;
import com.js.nj.vo.BaseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    /**
     * 商家管理首页
     * @return
     */
    @GetMapping("/index")
    public String index(Model model, @RequestParam(value = "pageNum", defaultValue = "1") int pageNum , @RequestParam(value = "keyword", defaultValue = "") String keyword){
        RequestParamDto requestParamDto = new RequestParamDto();
        requestParamDto.setKeyword(keyword);
        requestParamDto.setPageNum(pageNum);
        PageInfo<Company> getResult = companyService.getCompanyList(requestParamDto);
        model.addAttribute("data" ,getResult.getList());
        model.addAttribute("pageInfo", getResult);
        model.addAttribute("keyword", requestParamDto.getKeyword());
        return "company/index";
    }

    /**
     * 添加商家页面
     * @return
     */
    @GetMapping("/toAdd")
    public String toAdd(){
        return "company/add";
    }

    /**
     * 添加商家
     * @return
     */
    @ResponseBody
    @RequestMapping("/add.json")
    public ResponseEntity<BaseEntity> add(@RequestBody Company record){
        Map<String,String> getInsertResult = companyService.addCompany(record);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getInsertResult.get("code")) ,getInsertResult.get("msg")));
    }

    /**
     * 编辑商家页面
     * @return
     */
    @RequestMapping("/toEdit")
    public String toEdit(Model model, Long id){
        Company getResult = companyService.selectByPrimaryKey(id);
        model.addAttribute("data" ,getResult);
        return "company/edit";
    }

    /**
     * 编辑商家
     * @return
     */
    @RequestMapping("/edit.json")
    public ResponseEntity<BaseEntity> edit(@RequestBody Company record){
        Map<String,String> getUpdateResult = companyService.updateByPrimaryKeySelective(record);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getUpdateResult.get("code")) ,getUpdateResult.get("msg")));
    }

    /**
     * 删除商家
     * @return
     */
    @RequestMapping("/delete.json")
    public ResponseEntity<BaseEntity> delete(@RequestParam String id){
        long objId = Long.parseLong(id);
        Map<String,String> getDeleteResult = companyService.deleteByPrimaryKey(objId);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getDeleteResult.get("code")) ,getDeleteResult.get("msg")));
    }
}
