package com.js.nj.service.impl;

import com.js.nj.dao.PayMapper;
import com.js.nj.service.PayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PayServiceImpl implements PayService {

    @Autowired
    private PayMapper payMapper;

    @Override
    public void index(){
//
    }

}
