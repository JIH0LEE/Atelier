package com.example.backend.controller;

import com.example.backend.model.dto.*;
import com.example.backend.model.entity.Content;
import com.example.backend.model.entity.ContentType;
import com.example.backend.model.entity.OnlineExhibition;
import com.example.backend.model.entity.User;
import com.example.backend.service.OnlineExhibitionService;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class ExhibitionController {
    private final OnlineExhibitionService onlineExhibitionService;
    private final UserService userService;
    @PostMapping(value = "/user/make-exhibition")
    private IdDto makeOnlineExhibition(Step1Dto makeExhibitionDto,@RequestParam(required = false)MultipartFile poster, Principal principal){
        try{
            OnlineExhibitionDto onlineExhibitionDto = new OnlineExhibitionDto();
            onlineExhibitionDto.setStep(makeExhibitionDto.getStep());
            onlineExhibitionDto.setTitle(makeExhibitionDto.getTitle());
            onlineExhibitionDto.setTag1(makeExhibitionDto.getTag1());
            onlineExhibitionDto.setTag2(makeExhibitionDto.getTag2());
            onlineExhibitionDto.setTag3(makeExhibitionDto.getTag3());
            if(poster!=null){
                String posterURL=onlineExhibitionService.savePoster(poster);
                onlineExhibitionDto.setPoster(posterURL);
            }
            onlineExhibitionDto.setDescription(makeExhibitionDto.getDescription());
            OnlineExhibition onlineExhibition = onlineExhibitionService.makeOnlineExhibition(onlineExhibitionDto, principal);
            return IdDto.builder().id(onlineExhibition.getId()).success(true).build();
        }catch (Exception e){
            return IdDto.builder().id(null).success(false).build();
        }
    }

    @PostMapping(value = "/user/save-exhibition-step1")
    private IdDto saveOnlineExhibitionStep1(@RequestParam Long id, Step1Dto makeExhibitionDto,@RequestParam(required = false)MultipartFile poster, Principal principal){

        try{
            OnlineExhibitionDto onlineExhibitionDto = new OnlineExhibitionDto();
            onlineExhibitionDto.setStep(makeExhibitionDto.getStep());
            onlineExhibitionDto.setTitle(makeExhibitionDto.getTitle());
            onlineExhibitionDto.setTag1(makeExhibitionDto.getTag1());
            onlineExhibitionDto.setTag2(makeExhibitionDto.getTag2());
            onlineExhibitionDto.setTag3(makeExhibitionDto.getTag3());
            if(poster!=null){
                String posterURL=onlineExhibitionService.savePoster(poster);
                onlineExhibitionDto.setPoster(posterURL);
            }
            onlineExhibitionDto.setDescription(makeExhibitionDto.getDescription());
            OnlineExhibition onlineExhibition = onlineExhibitionService.saveStep1(id,onlineExhibitionDto);
            return IdDto.builder().id(onlineExhibition.getId()).success(true).build();
        }catch (Exception e){
            return IdDto.builder().id(null).success(false).build();
        }
    }

    @GetMapping(value = "/user/make-exhibition-step1")
    private Step1ResDto getOnlineExhibitionStep1(@RequestParam Long id, Principal principal){

        OnlineExhibition onlineExhibition = onlineExhibitionService.findById(id);
        return Step1ResDto.builder()
                .title(onlineExhibition.getTitle())
                .step(onlineExhibition.getStep())
                .tag1(onlineExhibition.getTag1())
                .tag2(onlineExhibition.getTag2())
                .tag3(onlineExhibition.getTag3())
                .poster(onlineExhibition.getPoster())
                .description(onlineExhibition.getDescription())
                .build();
    }



    @PostMapping(value = "/user/make-exhibition-step2/file")
    private String makeOnlineExhibitionStep2File(ContentListDto contentList, @RequestParam(required = false)List<MultipartFile> fileList, Principal principal){ //fileList
        System.out.println(contentList);

        List<Long> IDs=contentList.getIDList();
        List<Long> imageChangeID=contentList.getImageChangeList();
        System.out.println("==========");
        System.out.println("imageChangeID: "+imageChangeID);
        System.out.println("fileList: "+fileList);
        System.out.println("ID: "+IDs);

        List<String> descriptions=contentList.getDescriptionList();
        System.out.println("descriptionList: "+descriptions);
        int step = contentList.getStep();

        List<ContentDto> contents=new ArrayList<>();
        for (int i=0; i<imageChangeID.size();i++){
            ContentDto aContent=new ContentDto(imageChangeID.get(i), fileList.get(i), null, ContentType.IMAGE);
            contents.add(aContent);
        }
        String onlineExhibition = onlineExhibitionService.saveStep2(contentList.getID(), contents, step);

        contents=new ArrayList<>();
        for (int i=0; i< IDs.size(); i++){
            ContentDto aContent=new ContentDto(IDs.get(i), null, descriptions.get(i), ContentType.IMAGE);
            contents.add(aContent);
        }
        onlineExhibition = onlineExhibitionService.saveStep2(contentList.getID(), contents, step);
        return onlineExhibition;
    }

    @GetMapping(value="/user/make-exhibition-step2")
    private Step2ResDto makeOnlineExhibitionStep2(@RequestParam Long id, Principal principal){
        OnlineExhibition onlineExhibition = onlineExhibitionService.findById(id);
        System.out.println(id);
        List<Content> contents=onlineExhibition.getContents();
        List<Long> IDList=new ArrayList<>();
        List<String> fileList=new ArrayList<>();
        List<String> descriptionList=new ArrayList<>();
        List<Step2Dto> step2DtoList=new ArrayList<>();

        for (int i=0;i<contents.size();i++){
            Content content=contents.get(i);
            IDList.add(content.getId());
            fileList.add(content.getLink());
            descriptionList.add(content.getDescription());

            Step2Dto step2Dto=new Step2Dto(content.getId(), content.getLink(), content.getDescription());
            step2DtoList.add(step2Dto);
        }
        return Step2ResDto.builder()
                .IDList(IDList)
                .fileList(fileList)
                .descriptionList(descriptionList)
                .contentDtoList(step2DtoList)
                .build();
    }


    @PostMapping(value = "/user/make-exhibition-step3")
    private BgmDto makeOnlineExhibitionStep3(@RequestParam Long id, @RequestBody BgmDto bgm, Principal principal){

        OnlineExhibition onlineExhibition = onlineExhibitionService.saveStep3(id, bgm);
        return BgmDto.builder().src(onlineExhibition.getBgm()).step(onlineExhibition.getStep()).build();
    }

    @GetMapping(value = "/user/make-exhibition-step3")
    private BgmDto getOnlineExhibitionStep3(@RequestParam Long id, Principal principal){
        OnlineExhibition onlineExhibition = onlineExhibitionService.findById(id);
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

    @PostMapping(value = "/user/step-change")
    private boolean changeStep(@RequestParam Long id,@RequestBody int step, Principal principal){

        OnlineExhibition rt=onlineExhibitionService.changeStepById(id,step);
        return true;

    }


}
