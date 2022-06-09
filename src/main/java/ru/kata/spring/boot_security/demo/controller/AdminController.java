package ru.kata.spring.boot_security.demo.controller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import ru.kata.spring.boot_security.demo.services.RoleService;
import ru.kata.spring.boot_security.demo.services.UserService;


import java.security.Principal;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;


@Controller
public class AdminController {
    private RoleService roleService;
    private UserService userService;

    @Autowired
    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

      BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();




    @PostMapping(value = "admin/user_delete/{id}")
    public String deleteUser(@PathVariable("id") Long id){
        userService.removeUser(id);
        return "redirect:/admin";
    }

    @PostMapping(value = "admin/user_edit/{id}")
    public String editUser(@PathVariable("id") Long id,  @ModelAttribute ("user") User user, @RequestParam(name = "roles" , required=false) Collection<Long>  rolesId){
        Set<Role> roles = new HashSet<>();
        for (Long idRole : rolesId) {
            roles.add(roleService.getRoleById(idRole));
        }

        user.setRoles(roles);
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userService.addUser(user);
        return "redirect:/admin";
    }


    @GetMapping(value = "/admin")
    public String pageAdmin(Principal principal, Model model, User user) {
        model.addAttribute("user", user);
        model.addAttribute("roles", roleService.getAllRoles());
        model.addAttribute("users_list",  userService.getAllUsers());
        model.addAttribute("act_user", userService.findByUsername(principal.getName()));
        return "admin";
    }
    @PostMapping(value = "/admin")
    public String addUser(User user){
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userService.addUser(user);
        return "redirect:/admin";
    }

}
