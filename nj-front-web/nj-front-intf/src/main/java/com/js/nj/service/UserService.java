package com.js.nj.service;

import com.js.nj.entity.User;

public interface UserService {

    User validateUser(String userName, String userPassword);
}
