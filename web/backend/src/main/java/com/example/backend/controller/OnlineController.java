package com.example.backend.controller;


import com.example.backend.model.dto.CommentDto;
import com.example.backend.model.dto.CommentReqDto;
import com.example.backend.model.dto.HeartClickDto;
import com.example.backend.model.dto.OnlineExhibitionDto;
import com.example.backend.model.entity.OnlineExhibition;
import com.example.backend.model.entity.User;
import com.example.backend.repository.OnlineExhibitionRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.OnlineExhibitionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class OnlineController {

    private final OnlineExhibitionService onlineExhibitionService;





    @GetMapping("/online-exhibition")
    private List<OnlineExhibitionDto> showOnlineExhibitions(){
        return onlineExhibitionService.showAllOnlineExhibition();
    }

    @GetMapping("/select-online-exhibition")
    private OnlineExhibition getOnlineExhibitions(@RequestParam Long id){
        return onlineExhibitionService.getOnlineExhibitionById(id);
    }


    @GetMapping("/user/likes")
    private HeartClickDto isHeart(@RequestParam String id, Principal principal){
        Long onlineId=Long.parseLong(id);
        return new HeartClickDto(onlineId, onlineExhibitionService.isHeartClicked(onlineId,principal),onlineExhibitionService.getHeartCount(onlineId));//onlineExhibitionService.isHeartClicked(onlineId,principal);
    }

    @PostMapping("/user/likes")
    public boolean heartUpdate(@RequestBody HeartClickDto heartClickDto, Principal principal){
        return onlineExhibitionService.heartUpdate(heartClickDto.getId(), principal, heartClickDto.getClicked(), heartClickDto.getLikeCount());
    }
    @GetMapping("/comment")
    private List<CommentDto> getComments(@RequestParam Long id) {
        return onlineExhibitionService.findAllComments(id);
    }
    @PostMapping("/user/comment")
    private CommentDto makeComment(@RequestBody CommentReqDto commentReqDto,Principal principal){

        System.out.println(commentReqDto);

        return onlineExhibitionService.makeComment(commentReqDto,principal);
    }
    @DeleteMapping("/user/delete-comment/{id}")
    private Boolean deleteComment(@PathVariable Long id,Principal principal){

        return onlineExhibitionService.deleteComment(id);
    }
}
