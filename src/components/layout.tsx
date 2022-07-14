import * as React from "react"
import { get } from "theme-ui"
import { Global } from "@emotion/react"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        scrollbarWidth: `thin`,
        scrollbarColor: `purple #333`,
        '&::-webkit-scrollbar': {
          width: '8px'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: `-.5px -.5px 1px .5px rgba( 256, 256, 256, 0.6 ) inset`,
          background: '#333',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba( 31, 38, 135, 0.6 )',
          borderRadius: '20px',
          border: `1px solid #00002233`
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: get(t, `colors.primary`),
          color: get(t, `colors.background`),
        },
      })}
    />
    <SEO />
    <main className={className}>{children}</main>
  </React.Fragment>
)

export default Layout
