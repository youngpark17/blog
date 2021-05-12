package com.young.blog.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api")
public class TestController {

    @GetMapping(value = "/12345")
    public String test(){
        return "12345";
    }
}
