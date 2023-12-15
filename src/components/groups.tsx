import Wakgood from '@/assets/profile/wakdoo512.png'
import Isedol from '@/assets/profile/isegye_idol_group.png'
import { css } from '@emotion/react'
import Image from 'next/image'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

const imageWidth = 440
const gapWidth = 40

export function Groups() {
  const imageList = [
    { src: Isedol, alt: '이세돌', ko: '이세계아이돌', en: 'ISEGYE IDOL' },
    { src: Wakgood, alt: '왁두', ko: '우왁굳', en: 'WAKGOOD' },
    { src: Isedol, alt: '이세돌', ko: '이세계아이돌', en: 'ISEGYE IDOL' },
    { src: Wakgood, alt: '왁두', ko: '우왁굳', en: 'WAKGOOD' },
  ]

  const ref = useRef<HTMLDivElement>(null)

  const moveWidth = imageWidth + gapWidth

  const [scroll, setScroll] = useState(0)
  const childrenWidth =
    ref.current?.childNodes.length * 440 + (ref.current?.childNodes.length - 1) * 40 ||
    imageList.length * 440 + (imageList.length - 1) * 40
  const maxScrollWidth = childrenWidth - imageWidth * 4 + gapWidth * 3

  const goPrev = () => {
    if (scroll <= 0) {
      return
    }
    ref.current.scrollTo({ left: scroll - moveWidth, top: 0, behavior: 'smooth' })
    const decreaseScroll = scroll - moveWidth < 0 ? 0 : scroll - moveWidth
    setScroll(decreaseScroll)
  }

  const goNext = () => {
    if (scroll > maxScrollWidth) {
      return
    }
    ref.current.scrollTo({ left: scroll + moveWidth, top: 0, behavior: 'smooth' })
    const increaseScroll = scroll + moveWidth > maxScrollWidth ? maxScrollWidth : scroll + moveWidth
    setScroll(increaseScroll)
  }

  return (
    <div css={groupWrapCss}>
      <p css={css({ fontSize: '32px', fontWeight: 700, color: 'white', display: 'flex', alignSelf: 'center' })}>
        왁타버스 팀
      </p>

      <div css={contentsCss}>
        <div css={css({ height: '80px' })}>
          {/* <button css={css({ height: '100%' })} onClick={goPrev}>
            {'<'}
          </button> */}
        </div>
        <div css={groupCss} ref={ref}>
          {imageList.map((image, inx) => {
            return (
              <div key={`image-${inx}`} css={imageCss}>
                <div css={artistImage}>
                  <Image src={image.src} alt={image.alt} width={440} />
                </div>
                <div css={artistNameCss} className="artist-name">
                  <p className="ko">{image.ko}</p>
                  <p className="en">{image.en}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div css={css({ height: '80px' })}>
          {/* <button css={css({ height: '100%' })} onClick={goNext}>
            {'>'}
          </button> */}
        </div>
      </div>
    </div>
  )
}

const groupWrapCss = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '100px',
  gap: '30px',
})

const groupCss = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  overflow: 'hidden',
  width: '1400px',
  height: '575px',
  gap: `${gapWidth}px`,
})

const imageCss = css({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  width: `${imageWidth}px`,
  '&:hover': {
    cursor: 'pointer',
  },
})

const artistImage = css({
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'end',
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

const contentsCss = css({
  display: 'flex',
  flexDirection: 'row',
})
