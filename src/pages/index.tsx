import Head from 'next/head'
import { css } from '@emotion/react'
import StickyBar from '@/components/sticky-bar'

import Image from 'next/image'
import { Footer } from '@/components/footer'
import { grayScale } from '@/styles/colors'
import { Groups } from '@/components/groups'

export default function Home() {
  return (
    <>
      <Head>
        <title>SPACE WAK</title>
      </Head>
      <div css={backgroundCss}>
        <div
          css={css({
            margin: 0,
            width: '100%',
            height: '100%',
          })}
        >
          {/* <Image alt="" src={""} fill /> */}
        </div>
        <section css={mainCss}>
          <div css={titleCss}>
            <h1>왁타플레이,</h1>
            <h1>하나의 우주를 Play하다</h1>
          </div>
        </section>
        <section css={groupCss}>
          <Groups />
        </section>
        <Footer />
        <StickyBar />
      </div>
    </>
  )
}

const backgroundCss = css({
  background: grayScale[900],
  width: '100vw',
})

const mainCss = css({
  height: '100vh',
  width: '100vw',
})

const groupCss = css({
  width: '100vw',
  backgroundColor: grayScale[800],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const titleCss = css({
  position: 'absolute',
  fontSize: '60px',
  fontWeight: 700,
  lineHeight: '80px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  top: '35%',
  left: '30%',
  transform: 'translate(-35%,-30%)',
})
