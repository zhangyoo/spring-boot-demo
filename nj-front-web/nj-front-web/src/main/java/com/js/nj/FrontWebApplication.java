package com.js.nj;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@ServletComponentScan
@SpringBootApplication
//将项目中对应的mapper类的路径加进来就可以了
@MapperScan("com.js.nj.dao")
public class FrontWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(FrontWebApplication.class, args);
	}

}

