import classNames from "classnames";
import React, { useEffect, useState } from "react";
import css from "./Type3.module.scss";
import Image from "next/image";
import back from "/public/mandoo/back.svg";
import axios from "axios";
// import axios from 'axios'

interface EditListInfo {
  topic_nm_str: string;
  file_orginl_nm: string;
  file_stre_nm: string;
  file_stre_path: string;
  file_extsn: string;
  file_detail_sn: string;
  topic_id: string;
  topic_nm: string;
}

export default function Type3() {
  const [editListInfoArray, setEditListInfoArray] = useState<EditListInfo[]>(
    []
  );
  const [num, setNum] = useState(1);

  const getEditList = () => {
    axios
      .post("https://mandoo-webtoon.com/api/v1/main/getUpperTopicInfo", {
        // topic_id: 'T000000029',
        topic_id: "T000000019",
        limit_at: "Y",
      })
      .then((res) => {
        console.log(res.data.data.length);
        setEditListInfoArray(res.data.data);
      });
  };

  // const add = editListInfoArray.filter(string => length < 4)
  // console.log(add)

  const editList = (item: EditListInfo) => (
    <div className={css.BoxWrap}>
      <div className={css.BoxContent}>
        <p>{item.topic_nm.replaceAll("<br>", "\n")}</p>
      </div>
    </div>
  );

  const result = () => {
    num < Math.ceil(editListInfoArray.length / 4) && setNum(num + 1);
    num === Math.ceil(editListInfoArray.length / 4) && setNum(1);
  };

  useEffect(() => {
    getEditList();
  }, []);

  return (
    <div className={classNames(css.Component, css.EditList)}>
      <div className={css.ContentTitle}>
        <h3>만두가 준비한 모듬세트 🥟</h3>
        <div className={css.All}>
          <p>전체보기</p>
          <Image className={css.Back} src={back} alt="more" />
        </div>
      </div>
      <div className={css.ListWrap}>
        {editListInfoArray &&
          editListInfoArray.slice((num-1)*4,(num-1)*4 + 4).map(
            (item) =>
              (
                <div key={item.topic_id} className={css.ListBox}>
                  <div className={css.EditWrap}>
                    {editList(item)}
                  </div>
                </div>
              )
          )}

        <div className={css.Line}></div>
        <div className={css.More} onClick={result}>
          <p>
            다른 리스트를 추천해드릴게요!{""}
            <strong>
              <span>{num}</span>
              {Math.ceil(editListInfoArray.length / 4)}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
