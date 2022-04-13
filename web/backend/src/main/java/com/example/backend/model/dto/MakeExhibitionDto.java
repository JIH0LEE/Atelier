package com.example.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@Data
@ToString
@AllArgsConstructor
public class MakeExhibitionDto {
    private String step;
    private String title;
    private String tag1;
    private String tag2;
    private String tag3;
    private MultipartFile poster;
    private String description;
}
