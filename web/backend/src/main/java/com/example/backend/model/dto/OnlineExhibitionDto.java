package com.example.backend.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@ToString
@AllArgsConstructor
@Builder
public class OnlineExhibitionDto {
    private Long id;

    private String title;

    private String description;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    private String tag1;

    private String tag2;

    private String tag3;

    private String poster;

    @JsonProperty("like_count")
    private int likeCount=0;

    private String author;
}
