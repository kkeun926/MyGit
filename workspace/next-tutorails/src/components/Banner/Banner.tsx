// import React from 'react'
// import css from './Banner.module.css'

// export const Banner = () => {
//   return (
//     <div className={css.test}>
//         배너입니다.
//         <button>등록</button>
//     </div>
//   )
// }

import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import css from './Banner.module.scss'
import back from '/public/mandoo/back.svg'
// import {BrowserRouter, Route, Switch, Link} from "react-router-dom"

export default function Banner() {
  const [root, setRoot] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    axios
      .post('https://mandoo-webtoon.com/api/v1/main/getMainBanner', {
        topic_id: 'T000000020',
      })
      .then((res) => {
        setRoot(res.data.data.file_stre_path)
        setName(res.data.data.file_stre_nm)
      })
  }, [])

  return (
    <div className={css.BannerWrap}>
      <div className={css.MainPoster}>
        <div className={css.Background}>
          <Image
            src={
              process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN_NAME +
              root +
              '/' +
              name
            }
            width="620"
            height="441"
            layout="responsive"
            alt="banner"
          />
        </div>
        <div className={css.Gradient}></div>
      </div>
      <div className={css.View}>
        <p>작품 보러가기</p>
        <Image className={css.Back} src={back} alt="more" />
      </div>
    </div>
  )
}
