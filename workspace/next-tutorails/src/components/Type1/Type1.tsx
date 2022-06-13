import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import css from "./Type1.module.scss";
import back from "/public/mandoo/back.svg";
import classNames from "classnames";
// import { deepStrictEqual } from 'assert'

interface WebtoonInfo {
  age_requirement: string;
  author: string;
  charge_at: string;
  days: string;
  file_detail_sn: string;
  file_extsn: string;
  file_id: string;
  file_orginl_nm: string;
  file_stre_nm: string;
  file_stre_path: string;
  finalize_yn: string;
  genre1: string;
  genre2: string;
  genre3: string;
  hit: number;
  introduce: string;
  rating: string;
  reg_date: string;
  thumbnail: string;
  title: string;
  topic_desc: string;
  topic_id: string;
  webtoon_id: string;
}

export default function Type1() {
  const [webtoonInfoArray, setWebtoonInfoArray] = useState<WebtoonInfo[]>([]);
  const getHotThumbnail = () => {
    axios
      .post("https://mandoo-webtoon.com/api/v1/main/getWebtoonListByTopic", {
        topic_id: "T000000018",
      })
      .then((res) => {
        console.log(res.data.data.length);
        setWebtoonInfoArray(res.data.data);
      });
  };

  // const rating = 60

  // const num1 = Number(rating)

  // useEffect(() => {
  //   axios
  //     .post('https://mandoo-webtoon.com/api/v1/main/getWebtoonListByTopic', {
  //       "topic_id" : "T000000018",
  //     	"limit_at" : "Y"

  //     })
  //     .then((res) => {
  //       setTumbnail(res.data.data.thumbnail)
  //       setTitle(res.data.data.title)
  //       setAuthor(res.data.data.author)

  //     })
  // })

  useEffect(() => {
    getHotThumbnail();
  }, []);

  return (
    <div className={classNames(css.Component, css.Hot)}>
      <div className={css.ContentTitle}>
        <h3>만두가 본 요즘 핫 인기🔥</h3>
        <div className={css.All}>
          <p>전체보기</p>
          <Image className={css.Back} src={back} alt="more" />
        </div>
      </div>
      <div className={classNames(css.Scroll, css.HotList)}>
        <div className={css.ScrollWrapper}>
          <div className={css.ScrollSlide}>
            {webtoonInfoArray &&
              webtoonInfoArray.map((item) => (
                <div key={item.webtoon_id} className={css.Box}>
                  <div className={css.Img}>
                    <Image
                      src={`/api/imageProxy?imageUrl=${item.thumbnail}`}
                      layout="fill"
                      alt="hot"
                    ></Image>
                  </div>
                  <div className={css.BoxInfo}>
                    <div className={css.BoxInfoTop}>
                      <p>{item.title}</p>
                    </div>
                    <div className={css.BoxInfoBottom}>
                      <div className={css.BoxInfoBottomLeft}>
                        <p>{item.author}</p>
                      </div>
                      <div className={css.BoxInfoBottomRight}>
                        {/* <div className={css.RatingCircle}></div> */}
                        {item.rating == "-" ? (
                          <div className={css.RatingCircle}></div>
                        ) : Number(item.rating) >= 60 ? (
                          <div
                            className={classNames(css.RatingCircle, css.Green)}
                          ></div>
                        ) : (
                          <div
                            className={classNames(css.RatingCircle, css.Red)}
                          ></div>
                        )}
                        <p>{item.rating}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
