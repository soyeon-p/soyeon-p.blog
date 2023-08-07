import * as React from "react";

import Nav from "./nav";

import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { TbSchool } from "react-icons/tb";
import * as style from "./index.module.css";
import navi from "../component/navi";
import Post from "./post";
import { Layout } from "./Layout";
import { AiTwotoneMail } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <div className={style.parent}>
        <div className={style.box}>
          <div className={style.nav}>
            <div className={style.name}>Tech-blog</div>
            <div className={style.navmenu}>
              <button className={style.menu}>about</button>
              <button className={style.menu2}>post</button>
            </div>
          </div>
          <div className={style.so}>soyeon</div>
        </div>
      </div>
      <div className={style.title}>About</div>
      <div className={style.about}>
        <img className={style.image} src="\static\bab.jpg"></img>
        <div className={style.inform}>
          <div className={style.inform2}>
            <div className={style.myid}>@soyeon-p</div>{" "}
            <div className={style.design}></div>
            <div> 프론트엔드 개발자 박소연 입니다.</div>
            <div className={style.design}></div>
            <div>
              <AiTwotoneMail></AiTwotoneMail>soyeon1056@naver.com
            </div>
            <br></br>
            <div>| javascript/React/html/css |</div>
          </div>{" "}
          <div></div>
        </div>
      </div>{" "}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={style.line}></div>
      <div className={style.title}></div>
    </div>
  );
}
