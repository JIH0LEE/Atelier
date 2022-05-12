package com.example.backend.repository;

import com.example.backend.model.entity.Content;
import com.example.backend.model.entity.OnlineExhibition;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ContentRepository extends JpaRepository<Content,Long> {

    Content findByOnlineExhibitionAndOrderId(OnlineExhibition onlineExhibition,int orderId);



}
