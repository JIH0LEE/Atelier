package com.example.backend.repository;

import com.example.backend.model.entity.OnlineExhibition;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OnlineExhibitionRepository extends JpaRepository<OnlineExhibition,Long> {

    public OnlineExhibition findOnlineExhibitionById(Long id);

}
