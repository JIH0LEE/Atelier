package com.example.backend.model.dto;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@ToString
@Builder
public class ContentListDto {
    private Long ID;
    private List<Long> IDList;
    //private List<ContentDto> contentList;
    private List<MultipartFile> fileList;
    private List<String> descriptionList;
}
