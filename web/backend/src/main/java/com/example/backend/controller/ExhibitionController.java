package com.example.backend.controller;

import com.example.backend.model.dto.MakeExhibitionDto;
import com.example.backend.model.dto.OnlineExhibitionDto;
import com.example.backend.model.entity.OnlineExhibition;
import com.example.backend.service.OnlineExhibitionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class ExhibitionController {
    private final OnlineExhibitionService onlineExhibitionService;

    @PostMapping(value = "/user/make-exhibition")
    private OnlineExhibition makeOnlineExhibition(MakeExhibitionDto makeExhibitionDto, Principal principal){
        OnlineExhibitionDto onlineExhibitionDto = new OnlineExhibitionDto();

        onlineExhibitionDto.setStep(Integer.parseInt(makeExhibitionDto.getStep()));
        onlineExhibitionDto.setTitle(makeExhibitionDto.getTitle());
        onlineExhibitionDto.setTag1(makeExhibitionDto.getTag1());
        onlineExhibitionDto.setTag2(makeExhibitionDto.getTag2());
        onlineExhibitionDto.setTag3(makeExhibitionDto.getTag3());
        onlineExhibitionDto.setPoster(makeExhibitionDto.getPoster().toString());
        onlineExhibitionDto.setDescription(makeExhibitionDto.getDescription());

        OnlineExhibition onlineExhibition = onlineExhibitionService.makeOnlineExhibition(onlineExhibitionDto);

        return onlineExhibition;
    }
}
