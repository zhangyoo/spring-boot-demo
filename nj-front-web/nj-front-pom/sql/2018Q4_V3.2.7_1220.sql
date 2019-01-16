-- ----------------------------
-- Table structure for student
-- ----------------------------
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_name` varchar(20) DEFAULT NULL,
  `student_age` varchar(10) DEFAULT NULL,
  `student_address` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `teacher_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1', '张佑铭', '15', '江苏省南京市玄武区', '2019-01-09 17:48:39', '爱因斯坦');
INSERT INTO `student` VALUES ('2', '哼哼', '18', '江苏省南京市江宁区', '2019-01-09 17:50:08', '爱因斯坦');
INSERT INTO `student` VALUES ('3', '张雨辰', '16', '江苏省南京市鼓楼区', '2019-01-09 17:51:53', '贝多芬');
INSERT INTO `student` VALUES ('4', '张芊芊', '15', '江苏省南京市建邺区', '2019-01-09 17:52:53', '牛顿');

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
CREATE TABLE `teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `teacher_name` varchar(20) DEFAULT NULL,
  `teacher_age` varchar(10) DEFAULT NULL,
  `teacher_address` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', '爱因斯坦', '35', '江苏省南京市鼓楼区', '2019-01-09 17:49:17');
INSERT INTO `teacher` VALUES ('2', '贝多芬', '36', '江苏省南京市建邺区', '2019-01-09 17:53:40');
INSERT INTO `teacher` VALUES ('3', '牛顿', '33', '江苏省南京市江宁区', '2019-01-09 17:54:08');

-- ----------------------------
-- Table structure for user
-- ----------------------------
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) DEFAULT NULL,
  `user_password` varchar(10) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zhangyoo', '123456', '2019-01-14 15:25:03');
INSERT INTO `user` VALUES ('2', 'hengheng', '1234565', '2019-01-14 15:25:20');