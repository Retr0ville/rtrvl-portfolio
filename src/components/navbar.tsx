/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from 'react';
import { Wave } from "./codrops/codropsWave";
import { useEffect } from "react";
import { useState } from "react";
// import { stack as Menum } from 'react-burger-menu'



const Navbar = ({ scrollHere }) => {
  // const [width,setWidth] = useState(window.innerWidth)
  // function debounce(fn, ms){
  //   let timer
  //   return ()=>{
  //     clearTimeout(timer)
  //     timer =setTimeout(()=>{
  //       timer = null
  //       fn.apply(this, arguments)
  //     }, ms)
  //   }
  // }
  // useEffect(()=>{

  //    const debouncedHandleResize =debounce(function handleResize(){
  //    setWidth(window.innerWidth)
  //    }, 1000)

     
  //    window.addEventListener( 'resize', debouncedHandleResize)
  //    return () => window.removeEventListener( 'resize', debouncedHandleResize)
  //   },
  // [])
  return (
    <>
      <Wave right>
        <span
          key='intro'
          sx={{
            cursor: `pointer`,
            color: `#fff`,
            ':before': {
              borderRadius: `5px 0 0 5px`
            },
            backgroundColor: `re`, borderRadius: `5px 0 0 5px`
          }}
          onClick={() => scrollHere(0)}
        >
          .Intro<span sx={{ color: `rgb(229 230 36)` }}>()</span>
        </span>
        <span
          sx={{
            cursor: `pointer`,
            color: `#fff`,
          }}
          key='project'
          onClick={() => scrollHere(2.95)}
        >
          .Projects<span sx={{ color: `rgb(229 230 36)` }}>()</span>
        </span>
        <span
          sx={{
            cursor: `pointer`,
            color: `#fff`,
          }}
          key='skills'
          onClick={() => scrollHere(6.9)}
        >
          .Skills<span sx={{ color: `rgb(229 230 36)` }}>()</span>
        </span>
        <span
          sx={{
            cursor: `pointer`,
            color: `#fff`,
          }}
          key='about'
          onClick={() => scrollHere(11.1)}
        >
          .About<span sx={{ color: `rgb(229 230 36)` }}>()</span>
        </span>
        <span
          key='contact'
          sx={{
            cursor: `pointer`,
            color: `#fff`,
            ':before': {
              borderRadius: `0 5px 5px 0`
            }, borderRadius: `0 5px 5px 0`
          }}
          onClick={() => scrollHere(13.1)}
        >
          .Contact<span sx={{ color: `rgb(229 230 36)` }}>()</span>_
        </span>
      </Wave>
      <div
        sx={{
          display: ['none', 'none', 'flex'],
          position: `fixed`,
          // display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          right: `2rem`,
          top: `10px`,
          color: `fff `,
          zIndex: 999,
          background: `rgba( 0, 0, 0, 0.2 )`,
          backdropFilter: `blur( 1px )`,
          borderRadius: `5px`,
          "-webkit-backdrop-filter": `blur( 1px )`,

          'p': {
            position: `relative`,
            padding: `10px`,
            paddingBlock: 0,
            margin: `0`,
            fontSize: `1.1rem`,
            cursor: `pointer`,
            zIndex: 2,
            transition: `all .5s`,
            ':before': {
              content: `""`,
              position: `absolute`,
              left: 0,
              bottom: 0,
              width: `0`,
              height: `0`,
              transition: `all .3s`,
            },
            ':hover': {
              ':before': {
                content: `""`,
                position: `absolute`,
                bottom: 0,
                left: 0,
                width: `100%`,
                height: `100%`,
                backgroundColor: `var(--theme-ui-colors-black)`,
                // borderRadius: `5px`,
                zIndex: -1
              }
            },
          }
        }}
      >
        <p sx={{
          ':before': {
            borderRadius: `5px 0 0 5px`
          },
          backgroundColor: `re`, borderRadius: `5px 0 0 5px`
        }} onClick={() => scrollHere(0)}>
          .Intro<span sx={{ color: `rgb(229 230 36)` }}>()</span>
        </p>
        <p onClick={() => scrollHere(2.95)}>.Projects<span sx={{ color: `rgb(229 230 36)` }}>()</span>
        </p>
        <p onClick={() => scrollHere(6.9)}>.Skills<span sx={{ color: `rgb(229 230 36)` }}>()</span>
        </p>
        <p onClick={() => scrollHere(11.1)}>.About<span sx={{ color: `rgb(229 230 36)` }}>()</span>
        </p>
        <p sx={{
          ':before': {
            borderRadius: `0 5px 5px 0`
          }, borderRadius: `0 5px 5px 0`
        }} onClick={() => scrollHere(13.1)}>.Contact<span sx={{ color: `rgb(229 230 36)` }}>()</span>_
        </p>
        {/* <p onClick={()=>scrollHere(0)}>
        ._Intro<span sx={{ color: `rgb(229 230 36)` }}>()</span>
      </p>
      <p  onClick={()=>scrollHere(2.05)}>._projects<span sx={{ color: `rgb(229 230 36)` }}>()</span>
      </p>
      <p  onClick={()=>scrollHere(6.2)}>._Skills<span sx={{ color: `rgb(229 230 36)` }}>()</span>
      </p>
      <p  onClick={()=>scrollHere(9.7)}>._About<span sx={{ color: `rgb(229 230 36)` }}>()</span>
      </p>
      <p  onClick={()=>scrollHere(11.2)}>._Contact<span sx={{ color: `rgb(229 230 36)` }}>()</span>
      </p> */}
      </div>
    </>
  )
}

export default Navbar