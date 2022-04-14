package com.example.backend.controller;

import com.example.backend.model.dto.MakeExhibitionDto;
import com.example.backend.model.dto.OnlineExhibitionDto;
import com.example.backend.model.entity.OnlineExhibition;
import com.example.backend.service.OnlineExhibitionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.Principal;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class ExhibitionController {
    private final OnlineExhibitionService onlineExhibitionService;

    @PostMapping(value = "/user/make-exhibition")
    private String makeOnlineExhibition(MakeExhibitionDto makeExhibitionDto, Principal principal){
        try{
            OnlineExhibitionDto onlineExhibitionDto = new OnlineExhibitionDto();

            onlineExhibitionDto.setStep(Integer.parseInt(makeExhibitionDto.getStep()));
            onlineExhibitionDto.setTitle(makeExhibitionDto.getTitle());
            onlineExhibitionDto.setTag1(makeExhibitionDto.getTag1());
            onlineExhibitionDto.setTag2(makeExhibitionDto.getTag2());
            onlineExhibitionDto.setTag3(makeExhibitionDto.getTag3());
            String posterURL=onlineExhibitionService.savePoster(makeExhibitionDto.getPoster());
            onlineExhibitionDto.setPoster(posterURL);
            onlineExhibitionDto.setDescription(makeExhibitionDto.getDescription());

            OnlineExhibition onlineExhibition = onlineExhibitionService.makeOnlineExhibition(onlineExhibitionDto, principal);

            return "success";
        }catch (Exception e){
            return e.getMessage();
        }
    }
}
