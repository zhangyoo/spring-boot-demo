package com.js.nj.controller;

import com.github.pagehelper.PageInfo;
import com.js.nj.dto.RequestParamDto;
import com.js.nj.entity.User;
import com.js.nj.service.UserService;
import com.js.nj.vo.BaseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 用户首页
     * @return
     */
    @GetMapping("/index")
    public String index(Model model, @RequestParam(value = "pageNum", defaultValue = "1") int pageNum ,@RequestParam(value = "keyword", defaultValue = "") String keyword){
        RequestParamDto requestParamDto = new RequestParamDto();
        requestParamDto.setKeyword(keyword);
        requestParamDto.setPageNum(pageNum);
        PageInfo<User> getUserList = userService.getUserList(requestParamDto);
        model.addAttribute("data" ,getUserList.getList());
        model.addAttribute("pageInfo", getUserList);
        model.addAttribute("keyword", requestParamDto.getKeyword());
        return "user/index";
    }

    /**
     * 添加用户页面
     * @return
     */
    @GetMapping("/toAdd")
    public String toAdd(){
        return "user/add";
    }

    /**
     * 添加用户
     * @return
     */
    @ResponseBody
    @RequestMapping("/add.json")
    public ResponseEntity<BaseEntity> add(@RequestBody User user){
        Map<String,String> getInsertResult = userService.addUser(user);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getInsertResult.get("code")) ,getInsertResult.get("msg")));
    }

    /**
     * 编辑用户页面
     * @return
     */
    @RequestMapping("/toEdit")
    public String toEdit(Model model, Long id){
        User getUser = userService.selectByPrimaryKey(id);
        model.addAttribute("data" ,getUser);
        return "user/edit";
    }

    /**
     * 编辑用户
     * @return
     */
    @RequestMapping("/edit.json")
    public ResponseEntity<BaseEntity> edit(@RequestBody User user){
        Map<String,String> getUpdateResult = userService.updateByPrimaryKeySelective(user);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getUpdateResult.get("code")) ,getUpdateResult.get("msg")));
    }

    /**
     * 删除用户
     * @return
     */
    @RequestMapping("/delete.json")
    public ResponseEntity<BaseEntity> delete(@RequestParam String id){
        long objId = Long.parseLong(id);
        Map<String,String> getDeleteResult = userService.deleteByPrimaryKey(objId);
        return ResponseEntity.ok(new BaseEntity<>(Integer.parseInt(getDeleteResult.get("code")) ,getDeleteResult.get("msg")));
    }

}
