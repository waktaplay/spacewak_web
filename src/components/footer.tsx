import { grayScale } from '@/styles/colors'
import { css } from '@emotion/react'

import DiscordIcon from '@/assets/discord-icon.svg'

export function Footer() {
  return (
    <footer css={footerCss}>
      <div css={bodyCss}>
        <div css={info}>
          <p css={css({ fontWeight: 700, fontSize: '18px' })}>SPACEWAK</p>
          <p css={css({ fontSize: '14px' })}>Copryright ⓒ 2023 spacewak. All rights reserved.</p>
        </div>
        <div css={contact}>
          <p css={css({ fontWeight: 700, fontSize: '18px' })}>Contact</p>

          <a
            href=""
            css={css({
              fontSize: '14px',
              height: '25px',
              color: 'white',
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              alignItems: 'center',
            })}
          >
            <DiscordIcon />
            문의하기
          </a>
        </div>
        {/* 약관 적용 예정 */}
        {/* <div css={terms}>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
        </div> */}
      </div>
    </footer>
  )
}

const footerCss = css({
  width: '100%',
  height: '205px',
  backgroundColor: grayScale[800],
  color: 'white',
})

const bodyCss = css({
  height: '100%',
  display: 'flex',
  padding: '0 20%',
  flexDirection: 'row',
  gap: '200px',
  background: grayScale[900],
})

const info = css({
  height: '100%',
  flex: '4 1',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})
const contact = css({
  height: '100%',
  flex: '3 1',
  display: 'flex',
  padding: '40px',
  flexDirection: 'column',
  gap: '20px',
})
const terms = css({
  flex: '3 1',
  height: '100%',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
})
