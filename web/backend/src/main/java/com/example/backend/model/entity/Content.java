package com.example.backend.model.entity;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String image;


    private String description;


    @ManyToOne(fetch=FetchType.LAZY,cascade = { CascadeType.ALL})
    @JoinColumn(name="online_exhibition_id")
    @ToString.Exclude
    private OnlineExhibition onlineExhibition;
}
