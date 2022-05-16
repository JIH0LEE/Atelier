package com.example.backend.model.entity;


import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Keyword {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="online_exhibition_id")
    @ToString.Exclude
    private OfflineExhibition offlineExhibition;

    private String content;
}
