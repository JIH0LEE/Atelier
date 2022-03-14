package com.example.backend.model.entity;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime description;

    @ManyToOne(fetch=FetchType.LAZY)
    @ToString.Exclude
    private OnlineExhibition onlineExhibition;

    @ManyToOne(fetch=FetchType.LAZY)
    @ToString.Exclude
    private User user;
}
