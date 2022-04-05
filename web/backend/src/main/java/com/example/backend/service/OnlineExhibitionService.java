package com.example.backend.service;

import com.example.backend.model.dto.OnlineExhibitionDto;
import com.example.backend.model.entity.Good;
import com.example.backend.model.entity.OnlineExhibition;
import com.example.backend.model.entity.User;
import com.example.backend.repository.OnlineExhibitionRepository;
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
            if(good.getUser()==user){
                return true;
            }
        }
        return false;
    }

    public Boolean heartUpdate(Long onlineExhibitionId, Principal principal, boolean heartCondition){
        try{
            System.out.println(1);
            OnlineExhibition onlineExhibition=onlineExhibitionRepository.findOnlineExhibitionById(onlineExhibitionId);
            List<Good> goods=onlineExhibition.getLikes();
            System.out.println(2);
            if(heartCondition==true){
                System.out.println(3);
                User user=new User();
                System.out.println(principal);
                user.setUsername(principal.getName());
                System.out.println(4);
                onlineExhibition.getLikes().add(new Good(onlineExhibitionId, true, onlineExhibition, user));
                //onlineExhibitionRepository.save(onlineExhibition);
                System.out.println(5);
                return true;
            }else{
                System.out.println(6);
                for (Good good : goods) {
                    if(good.getUser().getUsername() == principal.getName()){
                        goods.remove(good);
                        //onlineExhibitionRepository.save(onlineExhibition);
                        return true;
                    }
                }
            }
            //onlineExhibitionRepository.save(onlineExhibition);
        }catch (Exception e){
            System.out.println("error: "+e.getMessage());
        }
        return false;
    }

}
