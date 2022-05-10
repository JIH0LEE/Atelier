package com.example.backend.service;

import com.example.backend.model.dto.*;
import com.example.backend.model.entity.*;
import com.example.backend.repository.CommentRepository;
import com.example.backend.repository.LikeRepository;
import com.example.backend.repository.OnlineExhibitionRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    private final S3Service s3Service;

    public List<OnlineExhibitionDto> showAllOnlineExhibition(){
        List<OnlineExhibitionDto> result=new ArrayList<>();
        onlineExhibitionRepository.findAllByStepGreaterThan(4).forEach((data)->{
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
    public List<OnlineExhibitionDto> showMySavedOnlineExhibition(User user){
        List<OnlineExhibitionDto> result=new ArrayList<>();
        onlineExhibitionRepository.findAllByUserAndStepLessThan(user,5).forEach((data)->{
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
//        commentRepository.save(comment);
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

    public OnlineExhibition makeOnlineExhibition(OnlineExhibitionDto onlineExhibitionDto, Principal principal) throws IOException {
        int step=onlineExhibitionDto.getStep();
        String title=onlineExhibitionDto.getTitle();
        String tag1=onlineExhibitionDto.getTag1();
        String tag2=onlineExhibitionDto.getTag2();
        String tag3=onlineExhibitionDto.getTag3();
        String poster=onlineExhibitionDto.getPoster();
        String description=onlineExhibitionDto.getDescription();
        User user=userRepository.findUserByUsername(principal.getName()).get();

        OnlineExhibition onlineExhibition = OnlineExhibition.builder()
                .step(step)
                .title(title)
                .tag1(tag1)
                .tag2(tag2)
                .tag3(tag3)
                .description(description)
                .poster(poster)
                .user(user)
                .build();

        return onlineExhibitionRepository.save(onlineExhibition);
    }

    public String savePoster(MultipartFile file) throws IOException {
        String posterURL =s3Service.upload(file,"poster");
        return posterURL;
    }

    public Boolean saveCurrentExhibition(OnlineExhibition onlineExhibition, Principal principal){
        User user=userRepository.findUserByUsername(principal.getName()).get(); // User 정보

        //OnlineExhibition onlineExhibition
        return false;
    }

    public String saveStep2(Long id, List<ContentDto> contentDtos){
        try{
            OnlineExhibition onlineExhibition=onlineExhibitionRepository.findById(id).get();
            List<Content> contents = new ArrayList<>();
            for (int i=0;i<contentDtos.size();i++){
                ContentDto contentDto = contentDtos.get(i);
                Long contentId = contentDto.getId();
                MultipartFile link = contentDto.getLink();
                String description = contentDto.getDescription();
                ContentType contentType = contentDto.getContentType();

                Content content = new Content();
                content.setId(contentId);
                content.setLink(saveContents(link));
                content.setDescription(description);
                content.setContentType(contentType);

                contents.add(content);
            }
            onlineExhibition.setContents(contents);
            return onlineExhibitionRepository.save(onlineExhibition).toString();
        }catch(Exception e){
            return e.getMessage();
        }

    }

    public String saveContents(MultipartFile file) throws IOException {
        String posterURL =s3Service.upload(file,"content");
        return posterURL;
    }

    public OnlineExhibition saveStep3(Long id, BgmDto bgm){
        OnlineExhibition onlineExhibition=onlineExhibitionRepository.findById(id).get();
        onlineExhibition.setBgm(bgm.getSrc());
        return onlineExhibitionRepository.save(onlineExhibition);

    }
    public OnlineExhibition getStep3(Long id){

        return onlineExhibitionRepository.findById(id).get();

    }

}
