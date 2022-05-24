package com.example.backend.model.dto;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Builder
public class RecommendDto {
    private Long  onlineid;
    private String tag1;
    private String tag2;
    private String tag3;
}
