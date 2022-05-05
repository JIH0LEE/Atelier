package com.example.backend.model.dto;

import com.example.backend.model.entity.ContentType;
import com.example.backend.model.entity.OnlineExhibition;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@Data
@ToString
@Builder
public class ContentDto {
    private Long id;

    private String link;

    private String description;

    private ContentType contentType;

    //private OnlineExhibition onlineExhibition;
}
