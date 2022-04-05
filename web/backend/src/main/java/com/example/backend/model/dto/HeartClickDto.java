package com.example.backend.model.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class HeartClickDto {
    private Long id;
    private boolean clicked;

    public Long getId(){
        return id;
    }

    public boolean getClicked(){
        return clicked;
    }
}
