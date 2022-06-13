import React, { useEffect, useState } from "react";
import classNames from "classnames";
import css from "./Type2.module.scss";
import Image from "next/image";
import back from "/public/mandoo/back.svg";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";

interface ThemeInfo {
  topic_nm_str: string;
  file_orginl_nm: string;
  file_stre_nm: string;
  file_stre_path: string;
  file_extsn: string;
  file_detail_sn: number;
  topic_id: string;
  topic_nm: string;
}

export default function Type2() {
  const [themeInfoArray, setThemeInfoArray] = useState<ThemeInfo[]>([]);
  const getThemeList = () => {
    axios
      .post("https://mandoo-webtoon.com/api/v1/main/getUpperTopicInfo", {
        topic_id: "T000000019",
        limit_at: "Y",
      })
      .then((res) => {
        console.log(res.data.data.length);
        setThemeInfoArray(res.data.data);
      });
  };

  const themeBox = (item: ThemeInfo) => (
    <div className={css.ThemeBoxWrap}>
      <div className={css.ThemeImg}>
        <Image
          src={
            process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN_NAME +
            item.file_stre_path +
            "/" +
            item.file_stre_nm
          }
          layout="fill"
          alt="theme"
        ></Image>
      </div>
      <p>{item.topic_nm.replaceAll("<br>", "\n")}</p>
    </div>
  );

  useEffect(() => {
    getThemeList();
  }, []);

  return (
    <div className={classNames(css.Component, css.Theme)}>
      <div className={css.ContentTitle}>
        <h3>한가지만 노린다! 테마&#039;s 🍿</h3>
        <div className={css.All}>
          <p>전체보기</p>
          <Image className={css.Back} src={back} alt="more" />
        </div>
      </div>
      <div className={css.Swiper}>
        <Swiper
          className={css.MySwiper}
          pagination={true}
          slidesPerView={1}
          loop={true}
          loopedSlides={2}
          modules={[Pagination]}
        >
          {themeInfoArray &&
            themeInfoArray.map(
              (item, index) =>
                index % 4 === 0 && (
                  <SwiperSlide key={item.topic_id} className={css.ThemeBox}>
                    {themeInfoArray.map(
                      (themebox, index2) =>
                        index <= index2 &&
                        index2 < index + 4 && (
                          <div key={themebox.topic_id} className={css.BoxWrap}>
                            {themeBox(themebox)}
                          </div>
                        )
                    )}
                  </SwiperSlide>
                )
            )}
        </Swiper>
      </div>
    </div>
  );
}
