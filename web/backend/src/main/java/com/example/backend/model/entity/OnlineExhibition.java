package com.example.backend.model.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class OnlineExhibition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    private String tag1;

    private String tag2;

    private String tag3;

    private String bgm;

    private String theme;

    @OneToMany(fetch=FetchType.LAZY,cascade = {CascadeType.ALL})
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(fetch=FetchType.LAZY,cascade = {CascadeType.ALL})
    private List<Like> likes = new ArrayList<>();

    @OneToMany(fetch=FetchType.LAZY,cascade = {CascadeType.ALL})
    private List<Content> contents = new ArrayList<>();
}
