/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
// import  './snap.svg-min.js';
export const Wave = ({ children, left, right, className}: { children: React.ReactElement[], left? : boolean, right? : boolean, className?: string }) => {
  const svgRef = React.useRef(null),
    [showMenu, setShowMenu] = React.useState(false),
    [isAnimating, setIsAnimating] = React.useState(false),
    initialPath = "M0,100h1000l0,0c0,0-136.938,0-224,0c-193,0-170.235-1.256-278-35C399,34,395,0,249,0C118,0,0,100,0,100L0,100z",
    openPath = "M0,100h1000V0c0,0-136.938,0-224,0C583,0,610.924,0,498,0C387,0,395,0,249,0C118,0,0,0,0,0V100z"
    
  const [curr, setCurr] = useState(null)
  useEffect(() => {
    setCurr(svgRef.current)
  }, [svgRef])
  // @ts-ignore
  let morpher = Snap(curr)
  let path = morpher.select('path')
  const toggleMenu = () => {
    if (isAnimating) return false
    setIsAnimating(true)
    if (showMenu) {
      setShowMenu(false)
      setTimeout(() => {
        path.attr('d', initialPath)
        setIsAnimating(false);
      }, 300)
    } else {
      setShowMenu(true)
      // @ts-ignore
      path !== null && path.animate({ 'path': openPath }, 400, mina.easeinout, () => { setIsAnimating(false) })
    }
  }
  return (
    <div className="container"
      sx={{
        overflow: `hidden`,
        width: `100%`,
        height: `100%`,
        background: `#373a47`,
      }}
    >
      <div
        onClick={() => toggleMenu()}
        sx={{
          position: `absolute`,
          backgroundColor: `#6611`,
          width: `100%`,
          height: `${showMenu ? '100%' : '0'}`,
          zIndex: `1000`,
          top: 0,
          transition: `all ease 400ms`
        }}
      />
      <div className="menu-wrap"
        sx={{
          position: `fixed`,
          bottom: 0,
          left: 0,
          zIndex: 1001,
          width: `100%`,
          height: `160px`,
          fontSize: `1.15em`,
          transform: `${!showMenu ? 'translate3d(0,160px,0)' : 'translate3d(0,0,0)'}`,
          transition: `transform 0.4s`,
          transitionDelay: `${showMenu && '0s'}`,
        }}>
        <nav className="menu"
          sx={{
            position: `relative`,
            width: `100%`,
            height: `100%`,
            zIndex: 1000,
            textAlign: `center`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            // top: `50%`,
            padding: `0 1.5em`,
            // transform: `translate3d(0,-50%,0)`,
          }}
        >
          <div className="icon-list">
            {
              children.map((child, i) => {
                return (
                  <div
                    className={`${className || ''} items`}
                    sx={{
                      transitionDelay: `${showMenu && (0.05 * i) + 's'}`,
                      opacity: `${showMenu ? 1 : 0}`,
                      transform: `${!showMenu ? 'translate3d(0,200px,0)' : 'translate3d(0,0,0)'}`,
                      transition: `opacity 0.4s, transform 0.4s`,
                      display: `inline-block`,
                      paddingInline: `0.42rem`,
                      // color: `#b8b7ad`,

                    }}
                  >
                    {child}
                  </div>
                )
              })
            }
          </div>
        </nav>
        <button className="close-button" id="close-button"
          onClick={() => toggleMenu()}
          sx={{
            cursor: `pointer`,
            width: `16px`,
            height: `16px`,
            position: `absolute`,
            right: `1em`,
            top: `1em`,
            overflow: `hidden`,
            textIndent: `16px`,
            border: `none`,
            zIndex: 1001,
            background: `transparent`,
            color: `transparent`,
            opacity: `${showMenu ? 1 : 0}`,
            transform: `${!showMenu ? 'translate3d(0,200px,0)' : 'translate3d(0,0,0)'}`,
            transition: `opacity 0.4s, transform 0.4s`,
            transitionDelay: `${showMenu && '0.3s'}`,
            ':after, :before': {
              content: `''`,
              position: `absolute`,
              width: `2px`,
              height: `100%`,
              top: 0,
              left: `50%`,
              background: `#888`,
            },
            ':before': {
              transform: ` rotate(45deg)`,
            },
            ':after': {
              transform: `rotate(-45deg)`,
            }
          }}
        >Close Menu</button>
        <div className="morph-shape" id="morph-shape" data-morph-open={openPath}
          sx={{
            position: `absolute`,
            // width: `100%`,
            width: `calc(100% + 400px)`,
            height: `100%`,
            top: 0,
            left: 0,
            fill: `#373a47`,
            transition: `transform 0.4s`,
            transform: `${!showMenu ? 'translate3d(-400,0,0)' : 'translate3d(0,0,0)'}`,
          }}
        >
          <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d={initialPath} />
          </svg>
        </div>
      </div>
      <button type="button" role="button" aria-label="open menu" className="menu-button" id="open-button"
        onClick={() => toggleMenu()}
        sx={{
          cursor: `pointer`,
          position: `fixed`,
          bottom: 0,
          [left ? 'left' : right ? 'right' : 'right']: `1rem`,
          zIndex: 1000,
          margin: `1em`,
          padding: 0,
          opacity: 0.6,
          transition: `all .3s`,
          // width: `2.5em`,
          // height: `2.25em`,
          border: ` none`,
          background: `transparent`,
          ' :hover': {
            opacity: 0.9,
            '.logo':{
              borderRadius: `62% 43% 40% 60% / 55% 64% 45% 45%`,
            }

          },
          // ':before': {
          //   content: `''`,
          //   position: `absolute`,
          //   top: `0.5em`,
          //   right: `0.5em`,
          //   bottom: `0.5em`,
          //   left: `0.5em`,
          //   background: `linear-gradient(#fff 20%, transparent 20%, transparent 40%, #fff 40%, #fff 60%, transparent 60%, transparent 80%, #fff 80%)`,
          // }
        }}
      >
         <StaticImage
         className="logo"
        src="../../images/logo-min.png"
        alt="menu"
        width={60}
        sx={{
          borderRadius:`50% 57% 56% 56% / 50% 50% 50% 63%`,
          transition: `all .5s`,
        }}
        />
        </button>

     
    </div>
  )
}