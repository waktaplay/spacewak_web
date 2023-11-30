import Wakgood from '@/assets/profile/wakdoo512.png'
import Isedol from '@/assets/profile/isegye_idol_group.png'
import { css } from '@emotion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Groups() {
  const [start, setStart] = useState(1)
  const [end, setEnd] = useState(3)
  const imageList = [
    { src: Wakgood, alt: '왁두', ko: '우왁굳', en: 'WAKGOOD' },
    { src: Isedol, alt: '이세돌', ko: '이세계아이돌', en: 'ISEGYE IDOL' },
    { src: Wakgood, alt: '왁두', ko: '우왁굳', en: 'WAKGOOD' },
    // { src: Isedol, alt: '왁두', ko: '우왁굳', en: 'WAKGOOD' },
  ]

  imageList.splice(end)

  return (
    <div css={groupWrapCss}>
      <p css={css({ fontSize: '32px', fontWeight: 700, color: 'white', display: 'flex', alignSelf: 'center' })}>
        왁타버스 팀
      </p>
      <div css={groupCss}>
        <button
          onClick={() => {
            setStart(start - 1)
            setEnd(end - 1)
          }}
        >
          {'<'}
        </button>
        {imageList.map((image, inx) => {
          return (
            <div key={`image-${inx}`} css={imageCss}>
              <Image src={image.src} alt={image.alt} height={512} />
              <div css={artistNameCss}>
                <p className="ko">{image.ko}</p>
                <p className="en">{image.en}</p>
              </div>
            </div>
          )
        })}
        ;
        <button
          onClick={() => {
            setStart(start + 1)
            setEnd(end + 1)
          }}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

const groupWrapCss = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '100px',
})

const groupCss = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '50px',
  width: '1400px',
  height: '575px',
  gap: '30px',
})

const imageCss = css({
  // width: '512px',
  padding: '10px',
  border: '1px solid white',
  '&:hover': {
    cursor: 'pointer',
  },
})

const artistNameCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  margin: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  '.ko': {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 600,
    color: '#919191',
  },
  '.en': { fontSize: '16px', lineHeight: '24px', fontWeight: 400, color: '#919191' },
  '.selected': {
    color: '#FFFFFF',
  },
})
