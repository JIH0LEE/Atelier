package com.example.backend.controller;



import com.example.backend.model.dto.RecommendDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.time.LocalDateTime;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/recommend")
public class RecommendController {

    @GetMapping("/test")
    public String test(){
        URI uri = UriComponentsBuilder
                .fromUriString("http://localhost:8000")
                .path("/")
                .build()
                .toUri();
        RestTemplate restTemplate = new RestTemplate();
        RecommendDto recommendDto=RecommendDto.builder().onlineid(2L).tag1("인생").tag2("운명").tag3("사랑").build();
        ResponseEntity<String> result = restTemplate.postForEntity(uri,recommendDto,String.class);
        System.out.println(result);
        return "test";
    }
}
