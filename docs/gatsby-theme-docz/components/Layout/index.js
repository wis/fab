/** @jsx jsx */
import { useRef, useState } from 'react'
import { jsx, Layout as BaseLayout, Main, Container } from 'theme-ui'
import { Global, css } from '@emotion/core'

import { Header } from 'gatsby-theme-docz/src/components/Header'
import { Sidebar } from 'gatsby-theme-docz/src/components/Sidebar'
import * as styles from 'gatsby-theme-docz/src/components/Layout/styles'

const global = css`
  body {
    margin: 0;
    padding: 0;
  }
  '.icon-link': {
    display: none;
  }
  '.with-overlay': {
    overflow: hidden;
  }
`

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const nav = useRef()

  return (
    <BaseLayout sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
      <Global styles={global} />
      <Main sx={styles.main}>
        <Header onOpen={() => setOpen((s) => !s)} />
        <div sx={styles.wrapper}>
          <Sidebar
            ref={nav}
            open={open}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <Container
            sx={{ ...styles.content, width: '80%', '& h2': { marginTop: '4rem' } }}
            data-testid="main-container"
          >
            {children}
          </Container>
        </div>
      </Main>
    </BaseLayout>
  )
}
