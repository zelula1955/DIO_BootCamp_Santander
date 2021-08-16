package com.digitalinnovation.personApi.controller;


import com.digitalinnovation.personApi.service.PersonService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/api/v1/people")
public class PersonController {

    @GetMapping("/")
    public String helloMessage() {
        return "Hello, Digital Innovation One!!";
    }
}
