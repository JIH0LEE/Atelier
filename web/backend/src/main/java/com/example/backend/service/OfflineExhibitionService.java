package com.example.backend.service;

import com.example.backend.model.entity.OfflineExhibition;
import com.example.backend.repository.OfflineExhibitionRepository;
import com.example.backend.repository.OnlineExhibitionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
public class OfflineExhibitionService {
    private final OfflineExhibitionRepository offlineExhibitionRepository;

    public List<OfflineExhibition> getAllOfflineExhibition(){
        return offlineExhibitionRepository.findAll();
    }

    public OfflineExhibition getOfflineExhibitionById(Long exhibitionId){
        return offlineExhibitionRepository.findOfflineExhibitionById(exhibitionId);
    }

}
