package com.example.backend.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Recommended {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userid;

    private Long onlineid;

    private String title;

    private String link;

    private int start_date;

    private int end_date;

    private String locate;

    private String place;

    private String poster;

    @Column(length = 5000)
    private String descript;

    private String keyword;
}
