// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Tutorial from 'src/components/Tutorial/Tutorial'

// interface BannerInfo {
//   file_extsn?: string
//   file_id?: number
//   file_orginl_nm?: string
//   file_size?: string
//   file_stre_nm?: string
//   file_stre_path?: string
//   thumbnail?: string
//   title?: string
//   topic_id?: string
//   webtoon_id?: string
// }

// export default function New() {
//   const [name, setName] = useState('')
//   const [thumbnail, setThumbnail] = useState('')

//   const [bannerInfo, setBannerInfo] = useState({
//     title: '제목',
//     thumbnail: '',
//   })

//   const getMainBanner = () => {
//     axios
//       .post('https://mandoo-webtoon.com/api/v1/main/getMainBanner', {
//         topic_id: 'T000000020',
//       })
//       .then((res) => {
//         console.log(res.data.data)
//         setName(res.data.data.title)
//         setThumbnail(res.data.data.thumbnail)

//         setBannerInfo(res.data.data)
//       })
//   }

//   useEffect(() => {
//     getMainBanner()
//   }, [])

//   return (
//     <div>
//       <Tutorial />
//     </div>
//   )
// }

import React from 'react'
import Banner from 'src/components/Banner/Banner'
import Type1 from 'src/components/Type1/Type1'
import Type2 from 'src/components/Type2/Type2'
import Type3 from 'src/components/Type3/Type3'
import Type4 from 'src/components/Type4/Type4'

export default function Main() {
  return (
    <div>
      <Banner />
      <Type1 />
      <Type2 />
      <Type3 />
      <Type4 topicId="T000000004" title="막 나온 따뜻한 신작 🌞" />
      <Type4 topicId="T000000015" title="다 먹을 수 있어? 완결 😏 " />
    </div>
  )
}
