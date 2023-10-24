package spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.boot_security.demo.models.User;
import spring.boot_security.demo.services.UserDetailsServiceImpl;

import java.security.Principal;

@RestController
@RequestMapping("/api")
public class UserRestController {

    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    public void setUserDetailsService(UserDetailsServiceImpl userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @GetMapping("/user")
    public ResponseEntity<User> pageUser(Principal principal){
        User actUser = userDetailsService.findByUsername(principal.getName());
        return new ResponseEntity<>(actUser, HttpStatus.OK);
    }

}
