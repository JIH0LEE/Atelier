package com.example.backend.service;

import com.example.backend.model.dto.CommentDto;
import com.example.backend.model.dto.CommentReqDto;
import com.example.backend.model.dto.OnlineExhibitionDto;
import com.example.backend.model.entity.Comment;
import com.example.backend.model.entity.Good;
import com.example.backend.model.entity.OnlineExhibition;
import com.example.backend.model.entity.User;
import com.example.backend.repository.CommentRepository;
import com.example.backend.repository.LikeRepository;
import com.example.backend.repository.OnlineExhibitionRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@Component
public class OnlineExhibitionService {

    private final OnlineExhibitionRepository onlineExhibitionRepository;
    private final CommentRepository commentRepository;
    private final LikeRepository likeRepository;
    private final UserRepository userRepository;

    public List<OnlineExhibitionDto> showAllOnlineExhibition(){
        List<OnlineExhibitionDto> result=new ArrayList<>();
        onlineExhibitionRepository.findAll().forEach((data)->{
            result.add(OnlineExhibitionDto.builder()
                            .id(data.getId())
                            .title(data.getTitle())
                            .description(data.getDescription())
                            .startDate(data.getStartDate())
                            .endDate(data.getEndDate())
                            .tag1(data.getTag1())
                            .tag2(data.getTag2())
                            .tag3(data.getTag3())
                            .poster(data.getPoster())
                            .likeCount(data.getLikeCount())
                            .author(data.getUser().getNickname())
                    .build());
        });
        return result;
    }
    public Boolean isHeartClicked(Long onlineExhibitionId, Principal user){
        OnlineExhibition onlineExhibition=onlineExhibitionRepository.findOnlineExhibitionById(onlineExhibitionId);
        List<Good> goods=onlineExhibition.getLikes();

        for (Good good : goods) {
            if(good.getUser().getUsername().equals(user.getName())){
                return true;
            }
        }
        return false;
    }

    public int getHeartCount(Long onlineExhibitionId){
        OnlineExhibition onlineExhibition=onlineExhibitionRepository.findOnlineExhibitionById(onlineExhibitionId);
        return onlineExhibition.getLikeCount();
    }

    public boolean heartUpdate(Long onlineExhibitionId, Principal principal, boolean heartCondition, int likeCount) {
        try {
            OnlineExhibition onlineExhibition = onlineExhibitionRepository.findOnlineExhibitionById(onlineExhibitionId);
            List<Good> goods = onlineExhibition.getLikes();
            if (heartCondition == true) {
                User user=userRepository.findUserByUsername(principal.getName()).get();
                onlineExhibition.getLikes().add(new Good(onlineExhibitionId, true, onlineExhibition, user));
                onlineExhibition.setLikeCount(likeCount);
                onlineExhibitionRepository.save(onlineExhibition);
                return true;
            } else {
                for (Good good : goods) {
                    if (good.getUser().getUsername().equals( principal.getName())) {
                        goods.remove(good);
                        likeRepository.delete(good);
                        onlineExhibition.setLikeCount(likeCount);
                        onlineExhibitionRepository.save(onlineExhibition);
                        return true;
                    }
                }
            }
        } catch (Exception e) {
            System.out.println("error: " + e.getMessage());
        }
        return false;
    }
    public List<CommentDto> findAllComments(Long id){

        Optional<OnlineExhibition> onlineExhibition=onlineExhibitionRepository.findById(id);
        List<CommentDto> comments=new ArrayList<>();
        onlineExhibition.get().getComments().forEach((comment)->{
            comments.add(CommentDto.builder()
                            .username(comment.getUser().getUsername())
                            .nickname(comment.getUser().getNickname())
                            .description(comment.getDescription())
                            .profile(comment.getUser().getProfile())
                            .id(comment.getId())
                            .build());
        });
        return comments;
    }

    public CommentDto makeComment(CommentReqDto commentReqDto,Principal principal){

        OnlineExhibition onlineExhibition=onlineExhibitionRepository.findById(commentReqDto.getOnlineExhibitionId()).get();
        User user=userRepository.findUserByUsername(principal.getName()).get();
        Comment comment=Comment.builder()
                .onlineExhibition(onlineExhibition)
                .description(commentReqDto.getDescription())
                .user(user)
                .build();
        onlineExhibition.getComments().add(comment);
        onlineExhibitionRepository.save(onlineExhibition);
        commentRepository.save(comment);
        return CommentDto.builder()
                .profile(user.getProfile())
                .description(comment.getDescription())
                .nickname(user.getNickname())
                .username(user.getUsername())
                .id(comment.getId()).build();
    }

    public Boolean deleteComment(Long id){

        try{
            commentRepository.deleteById(id);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
        return true;
    }

}
