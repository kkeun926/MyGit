import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import css from './Type4.module.scss'
import Image from 'next/image'
import back from '/public/mandoo/back.svg'
import axios from 'axios'

interface NewInfo {
  thumbnail: string
  age_requirement: string
  introduce: string
  author: string
  file_detail_sn: string
  genre1: string
  rating: string
  genre2: string
  title: string
  webtoon_id: string
  charge_at: string
  reg_date: string
  file_orginl_nm: string
  hit: number
  file_stre_nm: string
  file_stre_path: string
  file_extsn: string
  genre3: string
  file_id: string
  days: string
  finalize_yn: string
  topic_id: string
  topic_desc: string
}

interface Props {
  topicId: string
  title: string
}

export default function Type4(props: Props) {
  const [newListInfoArray, setNewListInfoArray] = useState<NewInfo[]>([])

  useEffect(() => {
    axios
      .post('https://mandoo-webtoon.com/api/v1/main/getWebtoonListByTopic', {
        topic_id: props.topicId,
        limit_at: 'Y',
      })
      .then((res) => {
        console.log(props.topicId)
        console.log(res.data.data)
        setNewListInfoArray(res.data.data)
      })
  }, [props.topicId])

  return (
    <div className={classNames(css.Component, css.New)}>
      <div className={css.ContentTitle}>
        <h3>{props.title}</h3>
        <div className={css.All}>
          <p>전체보기</p>
          <Image className={css.Back} src={back} alt="more" />
        </div>
      </div>
      <div className={classNames(css.Scroll, css.NewList)}>
        <div className={css.ScrollWrapper}>
          <div className={css.ScrollSlide}>
            {newListInfoArray &&
              newListInfoArray.map((item) => (
                <div className={css.Box} key={item.webtoon_id}>
                  <div className={css.Img}>
                    <Image src={`/api/imageProxy?imageUrl=${item.thumbnail}`} layout="fill" alt="new"></Image>
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
                        {item.rating == '-' ? (
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
  )
}
