package com.example.backend.controller;

import com.example.backend.model.entity.OfflineExhibition;
import com.example.backend.repository.OfflineExhibitionRepository;
import com.example.backend.service.OfflineExhibitionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class OfflineController {
    private final OfflineExhibitionService offlineExhibitionService;
    private final OfflineExhibitionRepository offlineExhibitionRepository;

    @GetMapping("/get-offline-all")
    public List<OfflineExhibition> getOfflineAll(){
        return offlineExhibitionService.getAllOfflineExhibition();
    }

    @GetMapping("/get-offline-info")
    public OfflineExhibition getOfflineInfo(@RequestParam Long id){
        return offlineExhibitionService.getOfflineExhibitionById(id);
    }
}
