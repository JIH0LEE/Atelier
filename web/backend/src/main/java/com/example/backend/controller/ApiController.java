package com.example.backend.controller;


import com.example.backend.config.JWTUtil;
import com.example.backend.model.dto.EmailConfirmDto;
import com.example.backend.model.dto.LoginDto;
import com.example.backend.model.dto.LoginFailDto;
import com.example.backend.model.dto.RegisterDto;
import com.example.backend.model.entity.User;
import com.example.backend.service.EmailConfirmationTokenService;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.nio.charset.StandardCharsets;
import java.security.Principal;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class ApiController {

    private final UserService userService;
    private final JWTUtil jwtUtil;
    private final EmailConfirmationTokenService emailConfirmationTokenService;
    @PostMapping("/sign-up")
    private Object signUp(@RequestBody RegisterDto registerDto){

        try{
            User user=userService.makeUser(registerDto);
            emailConfirmationTokenService.createEmailConfirmationToken(user.getId(), user.getUsername());
            return new LoginFailDto(true,"이메일을 확인해주세요",user);
        }catch(IllegalArgumentException e){
            return new LoginFailDto(false,e.getMessage(),null);
        }

    }
    @PostMapping("/sign-in")
    private Object signIn(@RequestBody LoginDto loginDto, HttpServletRequest request,
                        HttpServletResponse response){
        try {
            User user = userService.getValidUser(loginDto);
            response.setHeader("auth_token", JWTUtil.makeAuthToken(user));
            response.setHeader("refresh_token", JWTUtil.makeRefreshToken(user));
            response.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
            return new LoginFailDto(true,"로그인 성공",user);
        }catch(IllegalArgumentException e){
            return new LoginFailDto(false,e.getMessage(),null);
        }
    }

//    @PostMapping("/email-test")
//    private String EmailSend(@RequestBody EmailConfirmDto emailConfirmDto){
//
//        emailConfirmationTokenService.createEmailConfirmationToken(emailConfirmDto.getUserId(),emailConfirmDto.getEmail());
//        return "ok";
//    }

    @GetMapping("/confirm-email")
    public RedirectView viewConfirmEmail(@RequestParam  String token){

        boolean result = userService.confirmEmail(token);
        if (result){
            RedirectView redirectView = new RedirectView();
            redirectView.setUrl("http://localhost:3000/");
            return redirectView;
        }
        else{
            return null;
        }


    }
    @GetMapping("/user/user-info")
    private User UserInfo(Principal principal){
        return userService.getUser(principal.getName());
    }
}
