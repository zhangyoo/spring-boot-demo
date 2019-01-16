package com.js.nj.vo;

/**
 * Created by zhangyoo on 2018/3/19
 * function or purpose : 对响应体的封装，
 * springboot考虑使用ResponseEntity，不一定用到该类
 */
public class BaseEntity<T> {

    public static final int SUCCESS_CODE = 0;

    public static final int FAIL_CODE = -1;

    /**
     * 状态码
     */
    private int code;

    private String msg;

    private T data;

    public BaseEntity(T data) {
        this.code = SUCCESS_CODE;
        this.msg = "";
        this.data = data;
    }

    public BaseEntity(int code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public BaseEntity(int code, T data) {
        this.code = code;
        this.data = data;
    }

    public BaseEntity(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
