-- ----------------------------
-- Table structure for ims_company
-- ----------------------------
CREATE TABLE `ims_company` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `COMPANY_CODE` varchar(100) DEFAULT NULL COMMENT '商家唯一编码',
  `COMPANY_NAME` varchar(50) DEFAULT NULL COMMENT '商家名称',
  `TELEPHONE` varchar(20) DEFAULT NULL COMMENT '商家电话',
  `MAIL` varchar(50) DEFAULT NULL COMMENT '邮箱号',
  `ADDRESS` varchar(255) DEFAULT NULL COMMENT '商家地址',
  `BUSINESS_SCOPE` varchar(255) DEFAULT NULL COMMENT '业务范围',
  `CREATE_TIME` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `UPDATE_TIME` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  `IS_DEL` tinyint(1) DEFAULT '0' COMMENT '是否删除，1是，0否',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ims_company
-- ----------------------------
INSERT INTO `ims_company` VALUES ('1', 'd034abde91a6f40cf506759f39f2cd79', '南京哼哼有限公司', '0258888888', 'lg123@qq.com', '南京市玄武区', '皮鞋，化妆，皮鞋，化妆，皮鞋，化妆，皮鞋，化妆，皮鞋，化妆，皮鞋，化妆', '2020-04-13 15:53:09', '2020-04-13 16:14:57', '0');

-- ----------------------------
-- Table structure for ims_goods
-- ----------------------------
CREATE TABLE `ims_goods` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `GOODS_CODE` varchar(100) DEFAULT NULL COMMENT '商品唯一编码',
  `GOODS_NAME` varchar(255) DEFAULT NULL COMMENT '商品名称',
  `GOODS_CATEGORY_CODE` varchar(100) DEFAULT NULL COMMENT '分类唯一编码',
  `COMPANY_CODE` varchar(100) DEFAULT NULL COMMENT '商家唯一编码',
  `PRICE` decimal(10,2) DEFAULT NULL COMMENT '商品价格',
  `GOODS_NUM` bigint(20) DEFAULT '0' COMMENT '商品库存量',
  `GOODS_DESC` varchar(20) DEFAULT NULL COMMENT '商品描述',
  `CREATE_TIME` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `UPDATE_TIME` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  `IS_DEL` tinyint(1) DEFAULT '0' COMMENT '是否删除，1是，0否',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ims_goods
-- ----------------------------
INSERT INTO `ims_goods` VALUES ('1', 'd4334062c57b7ae53df74e96187086d9', '口红吖', '704d5c7355ae1b3331574ed19d3fbe59', 'd034abde91a6f40cf506759f39f2cd79', '11.00', '18', '口红口红口红口红口红口红22', '2020-04-13 16:16:36', '2020-04-13 17:31:44', '0');
INSERT INTO `ims_goods` VALUES ('2', '9988f43b7cec979071785bdbd5b62979', '香水', 'e875124048961d3392194b1325b1a16d', 'd034abde91a6f40cf506759f39f2cd79', '33.00', '39', '香水百合', '2020-04-13 16:34:48', '2020-04-13 17:24:56', '0');
INSERT INTO `ims_goods` VALUES ('3', 'c9a136a56b21872a60548c226ecdf793', '火龙果', 'e875124048961d3392194b1325b1a16d', 'd034abde91a6f40cf506759f39f2cd79', '22.00', '12', '的范德萨范德萨发水', '2020-04-13 18:04:11', '2020-04-13 18:13:16', '0');

-- ----------------------------
-- Table structure for ims_goods_category
-- ----------------------------
CREATE TABLE `ims_goods_category` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `GOODS_CATEGORY_CODE` varchar(100) DEFAULT NULL COMMENT '分类唯一编码',
  `CATEGORY_NAME` varchar(20) DEFAULT NULL COMMENT '分类名称',
  `PARENT_GOODS_CATEGORY_CODE` varchar(100) DEFAULT NULL COMMENT '父级分类唯一编码',
  `IS_DEL` tinyint(1) DEFAULT '0' COMMENT '是否删除，1是，0否',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ims_goods_category
-- ----------------------------
INSERT INTO `ims_goods_category` VALUES ('1', '704d5c7355ae1b3331574ed19d3fbe59', '男装', '0', '0');
INSERT INTO `ims_goods_category` VALUES ('2', 'e875124048961d3392194b1325b1a16d', '女装', '0', '0');
INSERT INTO `ims_goods_category` VALUES ('4', '4aa4bd0930277ded6417c5b27e9477ef', '实施', '0', '0');

-- ----------------------------
-- Table structure for ims_goods_in
-- ----------------------------
CREATE TABLE `ims_goods_in` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `GOODS_CODE` varchar(100) DEFAULT NULL COMMENT '商品唯一编码',
  `IN_GOODS_NUM` bigint(20) DEFAULT '0' COMMENT '入库商品数量',
  `IN_TIME` timestamp NULL DEFAULT NULL COMMENT '入库时间',
  `CURRENT_GOODS_LEFT_NUM` bigint(20) DEFAULT '0' COMMENT '当前剩余商品库存量',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ims_goods_in
-- ----------------------------
INSERT INTO `ims_goods_in` VALUES ('1', '9988f43b7cec979071785bdbd5b62979', '14', '2020-04-13 16:52:06', '36');
INSERT INTO `ims_goods_in` VALUES ('2', '9988f43b7cec979071785bdbd5b62979', '3', '2020-04-13 17:24:56', '39');

-- ----------------------------
-- Table structure for ims_goods_out
-- ----------------------------
CREATE TABLE `ims_goods_out` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `GOODS_CODE` varchar(100) DEFAULT NULL COMMENT '商品唯一编码',
  `OUT_GOODS_NUM` bigint(20) DEFAULT '0' COMMENT '出库商品数量',
  `OUT_TIME` timestamp NULL DEFAULT NULL COMMENT '出库时间',
  `CURRENT_GOODS_LEFT_NUM` bigint(20) DEFAULT '0' COMMENT '当前剩余商品库存量',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ims_goods_out
-- ----------------------------
INSERT INTO `ims_goods_out` VALUES ('2', 'd4334062c57b7ae53df74e96187086d9', '2', '2020-04-13 17:31:44', '18');

-- ----------------------------
-- Table structure for ims_income
-- ----------------------------
CREATE TABLE `ims_income` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `INCOME_DESC` varchar(255) DEFAULT NULL COMMENT '收入描述',
  `GOODS_CODE` varchar(100) DEFAULT NULL COMMENT '商品唯一编码',
  `INCOME_MONEY` decimal(10,2) DEFAULT NULL COMMENT '收入金额',
  `INCOME_TIME` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ims_income
-- ----------------------------

-- ----------------------------
-- Table structure for ims_pay
-- ----------------------------
CREATE TABLE `ims_pay` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `PAY_DESC` varchar(255) DEFAULT NULL COMMENT '收入描述',
  `GOODS_CODE` varchar(100) DEFAULT NULL COMMENT '商品唯一编码',
  `PAY_MONEY` decimal(10,2) DEFAULT NULL COMMENT '收入金额',
  `PAY_TIME` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ims_pay
-- ----------------------------

-- ----------------------------
-- Table structure for ims_user
-- ----------------------------
CREATE TABLE `ims_user` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `USER_NAME` varchar(25) DEFAULT NULL COMMENT '用户名',
  `USER_NICKNAME` varchar(25) DEFAULT NULL COMMENT '用户昵称',
  `USER_PASSWORD` varchar(50) DEFAULT NULL COMMENT '用户密码',
  `TELEPHONE` varchar(20) DEFAULT NULL COMMENT '手机号',
  `MAIL` varchar(50) DEFAULT NULL COMMENT '邮箱号',
  `CREATE_TIME` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `UPDATE_TIME` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  `IS_DEL` tinyint(1) DEFAULT '0' COMMENT '是否删除，1是，0否',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ims_user
-- ----------------------------
INSERT INTO `ims_user` VALUES ('1', 'admin', '超管', '123456', '18911111111', '123@qq.com', '2020-03-30 16:32:20', null, '0');
INSERT INTO `ims_user` VALUES ('2', 'zhangyoo', 'zy', '1234567', '18992345671', '1112@qq.com', '2020-04-05 17:45:12', '2020-04-09 15:51:14', '0');
INSERT INTO `ims_user` VALUES ('3', 'algo', 'al', '123456', '17798765432', 'ww123@qq.com', '2020-04-05 17:51:18', null, '0');
INSERT INTO `ims_user` VALUES ('6', 'hh', 'hh', '123456', '18992345371', '11123@qq.com', '2020-04-09 16:42:58', null, '0');
