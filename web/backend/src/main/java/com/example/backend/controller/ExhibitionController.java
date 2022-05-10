package com.example.backend.controller;

import com.example.backend.model.dto.*;
import com.example.backend.model.entity.OnlineExhibition;
import com.example.backend.model.entity.User;
import com.example.backend.service.OnlineExhibitionService;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class ExhibitionController {
    private final OnlineExhibitionService onlineExhibitionService;
    private final UserService userService;
    @PostMapping(value = "/user/make-exhibition")
    private IdDto makeOnlineExhibition(MakeExhibitionDto makeExhibitionDto, Principal principal){
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
            return IdDto.builder().id(onlineExhibition.getId()).success(true).build();
        }catch (Exception e){
            return IdDto.builder().id(null).success(false).build();
        }
    }

    @PostMapping(value = "/user/save-exhibition-step1")
    private IdDto saveOnlineExhibitionStep1(@RequestParam Long id,MakeExhibitionDto makeExhibitionDto, Principal principal){

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
            OnlineExhibition onlineExhibition = onlineExhibitionService.saveStep1(id,onlineExhibitionDto);
            return IdDto.builder().id(onlineExhibition.getId()).success(true).build();
        }catch (Exception e){
            return IdDto.builder().id(null).success(false).build();
        }
    }

    @PostMapping(value = "/user/make-exhibition-step2")
        private String makeOnlineExhibitionStep2(@RequestPart("fileList") List<MultipartFile> contents, Principal principal){
        System.out.println("here!");
        System.out.println(contents.size());
//        System.out.println(contents.getFileList());
//        System.out.println(contents.getDescriptionList());
        //String onlineExhibition = onlineExhibitionService.saveStep2(contents.getId(), contents.getContentList());
        return "here!";//onlineExhibition;
    }

    @PostMapping(value = "/user/make-exhibition-step3")
    private BgmDto makeOnlineExhibitionStep3(@RequestParam Long id, @RequestBody BgmDto bgm, Principal principal){
        System.out.println(bgm);
        OnlineExhibition onlineExhibition = onlineExhibitionService.saveStep3(id, bgm);
        return BgmDto.builder().src(onlineExhibition.getBgm()).step(onlineExhibition.getStep()).build();
    }

    @GetMapping(value = "/user/make-exhibition-step3")
    private BgmDto makeOnlineExhibitionStep3(@RequestParam Long id, Principal principal){
        OnlineExhibition onlineExhibition = onlineExhibitionService.getStep3(id);
        return BgmDto.builder().src(onlineExhibition.getBgm()).step(onlineExhibition.getStep()).build();
    }

    @GetMapping(value = "/user/get-saved-exhibition")
    private List<OnlineExhibitionDto> getSavedOnlineExhibition( Principal principal){
        User user=userService.getUser(principal.getName());
        return onlineExhibitionService.showMySavedOnlineExhibition(user);

    }
    @DeleteMapping(value = "/user/delete-online")
    private boolean deleteOnlineExhibition(@RequestParam Long id, Principal principal){

        return onlineExhibitionService.deleteById(id);

    }


}
