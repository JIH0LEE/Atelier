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

    private String link;

    private String description;

    @Enumerated(EnumType.STRING)
    private ContentType contentType;

    @ManyToOne(fetch=FetchType.LAZY,cascade = { CascadeType.ALL})
    @JoinColumn(name="online_exhibition_id")
    @ToString.Exclude
    private OnlineExhibition onlineExhibition;
}
