package com.kakao.map.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//컨트롤러를 만들면 @Controller를 필수로 만들어줘야함
@Controller
public class PageLoadTestController {

//value = 메세지 값
    @RequestMapping(value = "/t1", method = RequestMethod.GET)
    public String test1() {
//        호출
        System.out.println("t1요청 들어옴");
        return "test/test2";
//        return : 응답, 확장자는 제외하고 파일명만 적어줘도 됨. ()
    }

    @RequestMapping(value = "/test/page", method = RequestMethod.GET)
    public String map() {
        System.out.println("kakao map page");
        return "map";
//        return : 응답
    }

}
