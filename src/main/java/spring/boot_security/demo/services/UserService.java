package spring.boot_security.demo.services;


import spring.boot_security.demo.models.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    void addUser(User user);
    void removeUser(Long id);
    User getUserById(Long id);
    User findByUsername(String username);

}
