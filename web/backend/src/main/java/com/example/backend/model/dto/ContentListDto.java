package com.example.backend.model.dto;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
@ToString
@Builder
public class ContentListDto {
    private Long id;
    private List<ContentDto> contentList;
}
