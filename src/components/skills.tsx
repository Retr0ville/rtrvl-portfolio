/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import { skills } from "../utils/skills"
import useFocus from "../hooks/useFocusHook"
import { gatsby } from "../utils/svgIcons"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import { halfCyanShadow, halfYellowShadow } from "../styles/keyframes"
// @ts-ignore

const { webFrames, pLangs, styleFrames } = skills.frontend
const { db, frameworks } = skills.backend
const { devsAndSrc } = skills
const { extra } = skills


const Skills = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const { isFocused, toggleFocus } = useFocus()
  return (
    <div>
      <Divider
        bg="divider"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={offset}
        factor={factor}
      />
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <Svg icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
          <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
          <Svg icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
          <Svg icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <Svg icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
          <Svg icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
          <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
          <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
        </UpDownWide>
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
        <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
        <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
        <Svg icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <div
            sx={{
              display: `flex`,
              flexDirection: ['column', 'column', 'column', 'row'],
              justifyContent: `space-around`,
              alignItems: `center`,
            }}
          >
            <div
              sx={{
                order: [2, 2, 2, 1],
                marginBlock: `2rem`,
                marginRight: [0, 0, 0, '5rem', 0],
                padding: `1rem`,
                background: `rgba( 0, 0, 0, 0.2 )`,
                width: `fit-content`,
                boxShadow: `-2px -2px 3px 3px rgba( 31, 38, 135, 0.6 )`,
                // backdropFilter: `blur( 12px )`,
                borderRadius: `10px`,
                border: `.5px dashed violet`,
                // "-webkit-backdrop-filter": `blur( 12px )`,
                display: `flex`,
                flexDirection: `column`,
                transform: `rotateX(65deg) rotate(-35deg)`,
                transformStyle: `preserve-3d`,
              }}
            >
              <div>
                <div
                  sx={{
                    display:`flex`,

                  }}
                >
                  <div
                    sx={{
                      display:`grid`
                      gridTemplate:`2rem, `
                    }}
                  >
                    <h3
                      sx={{
                        margin: 0,
                        width: `100%`,
                        textAlign: `center`
                      }}
                    >Web Frameworks</h3>
                    {
                      Object.keys(webFrames).map(w => {
                        return (<figure
                          onClick={() => toggleFocus({ [w]: webFrames[w] })}
                          sx={{
                            margin: `10px`,
                            width: `100px`,
                            height: `100px`,
                            transformStyle: `preserve-3d`,
                          }}
                        >
                          <div
                            sx={{
                              margin: `0px`,
                              backgroundColor: `#4b5d5d`,
                              width: `100%`,
                              height: `100%`,
                              // transformStyle:`preserve-3d`,
                              backfaceVisibility: `hidden`,
                              transform: `${isFocused[w] ? 'translate3d(17px, -10px, 30px)' : 'unset'}`,
                              // borderLeft:`10px solid #d8dfdf`,
                              // borderBottom:`15px solid #698081`,
                              borderRadius: `8px`,
                              borderLeft: `10px solid #344141`,
                              borderBottom: `15px solid #15151a`,
                              cursor: `pointer`,
                              transition: `all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
                              zIndex: `40`,
                              "&:before": {
                                content: `""`,
                                position: `absolute`,
                                right: 0,
                                bottom: 0,
                                width: `${isFocused[w] ? '60%' : 0}`,
                                // height: `50%`,
                                height: `${isFocused[w] ? '100%' : 0}`,
                                opacity: `${isFocused[w] ? 1 : 0}`,
                                boxShadow: `0 0 1px 3px #ffffff, 0 0 1px 2px #ffffff`,
                                zIndex: -1,
                                //! flicker animation later
                                // animationName: `${halfYellowShadow}`,
                                // animationTimingFunction: `ease`,
                                // animationDuration: `5s`,
                                // animationIterationCount: `infinite`,
                                borderRadius: `8px`,
                              },
                              "&:after": {
                                content: `""`,
                                position: `absolute`,
                                left: 0,
                                top: 0,
                                width: `${isFocused[w] ? '60%' : 0}`,
                                // height: `50%`,
                                height: `${isFocused[w] ? '100%' : 0}`,
                                opacity: `${isFocused[w] ? 1 : 0}`,
                                // animationName: `${halfCyanShadow}`,
                                boxShadow: `0 0 200px 10px #ffff, 0 0 2px 3px #ffff`,
                                zIndex: -1,
                                // animationTimingFunction: `ease`,
                                // animationDuration: `5s`,
                                // animationIterationCount: `infinite`,
                                borderRadius: `8px`,
                              },
                            }}
                          >
                            <div
                              sx={{
                                width: `100%`,
                                height: `100%`,
                                margin: `0px`,
                                backgroundColor: `#4b5d5d`,
                                borderRadius: `8px`,
                              }}
                            >
                              {gatsby(100, 100)}
                            </div>
                          </div>
                        </figure>)
                      })
                    }
                  </div>
                  <div>
                    <h3
                      sx={{
                        margin: 0,
                        gridColumn: `3 / 5`,
                        width: `100%`,
                        textAlign: `center`
                      }}
                    > Frameworks</h3>
                    {
                      Object.keys(pLangs).map(w => {
                        return (<figure
                          onClick={() => toggleFocus({ [w]: pLangs[w] })}
                          sx={{
                            margin: `10px`,
                            width: `100px`,
                            height: `100px`,
                            transformStyle: `preserve-3d`,
                          }}
                        >
                          <div
                            sx={{
                              margin: `0px`,
                              backgroundColor: `#4b5d5d`,
                              width: `100%`,
                              height: `100%`,
                              // transformStyle:`preserve-3d`,
                              backfaceVisibility: `hidden`,
                              transform: `${isFocused[w] ? 'translate3d(17px, -10px, 30px)' : 'unset'}`,
                              // borderLeft:`10px solid #d8dfdf`,
                              // borderBottom:`15px solid #698081`,
                              borderRadius: `8px`,
                              borderLeft: `10px solid #344141`,
                              borderBottom: `15px solid #15151a`,
                              cursor: `pointer`,
                              transition: `all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
                              zIndex: `40`,
                              "&:before": {
                                content: `""`,
                                position: `absolute`,
                                right: 0,
                                bottom: 0,
                                width: `${isFocused[w] ? '60%' : 0}`,
                                // height: `50%`,
                                height: `${isFocused[w] ? '100%' : 0}`,
                                opacity: `${isFocused[w] ? 1 : 0}`,
                                boxShadow: `0 0 1px 3px #ffffff, 0 0 1px 2px #ffffff`,
                                zIndex: -1,
                                //! flicker animation later
                                // animationName: `${halfYellowShadow}`,
                                // animationTimingFunction: `ease`,
                                // animationDuration: `5s`,
                                // animationIterationCount: `infinite`,
                                borderRadius: `8px`,
                              },
                              "&:after": {
                                content: `""`,
                                position: `absolute`,
                                left: 0,
                                top: 0,
                                width: `${isFocused[w] ? '60%' : 0}`,
                                // height: `50%`,
                                height: `${isFocused[w] ? '100%' : 0}`,
                                opacity: `${isFocused[w] ? 1 : 0}`,
                                // animationName: `${halfCyanShadow}`,
                                boxShadow: `0 0 200px 10px #ffff, 0 0 2px 3px #ffff`,
                                zIndex: -1,
                                // animationTimingFunction: `ease`,
                                // animationDuration: `5s`,
                                // animationIterationCount: `infinite`,
                                borderRadius: `8px`,
                              },
                            }}
                          >
                            <div
                              sx={{
                                width: `100%`,
                                height: `100%`,
                                margin: `0px`,
                                backgroundColor: `#4b5d5d`,
                                borderRadius: `8px`,
                              }}
                            >
                              {gatsby(100, 100)}
                            </div>
                          </div>
                        </figure>)
                      })
                    }
                  </div>
                </div>
                <div>
                  <h3
                    sx={{
                      margin: 0,
                      width: `100%`,
                      textAlign: `center`
                    }}
                  >Style Frameworks</h3>
                  {
                    Object.keys(styleFrames).map(w => {
                      return (<figure
                        onClick={() => toggleFocus({ [w]: webFrames[w] })}
                        sx={{
                          margin: `10px`,
                          width: `100px`,
                          height: `100px`,
                          transformStyle: `preserve-3d`,
                        }}
                      >
                        <div
                          sx={{
                            margin: `0px`,
                            backgroundColor: `#4b5d5d`,
                            width: `100%`,
                            height: `100%`,
                            // transformStyle:`preserve-3d`,
                            backfaceVisibility: `hidden`,
                            transform: `${isFocused[w] ? 'translate3d(17px, -10px, 30px)' : 'unset'}`,
                            // borderLeft:`10px solid #d8dfdf`,
                            // borderBottom:`15px solid #698081`,
                            borderRadius: `8px`,
                            borderLeft: `10px solid #344141`,
                            borderBottom: `15px solid #15151a`,
                            cursor: `pointer`,
                            transition: `all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
                            zIndex: `40`,
                            "&:before": {
                              content: `""`,
                              position: `absolute`,
                              right: 0,
                              bottom: 0,
                              width: `${isFocused[w] ? '60%' : 0}`,
                              // height: `50%`,
                              height: `${isFocused[w] ? '100%' : 0}`,
                              opacity: `${isFocused[w] ? 1 : 0}`,
                              boxShadow: `0 0 1px 3px #ffffff, 0 0 1px 2px #ffffff`,
                              zIndex: -1,
                              //! flicker animation later
                              // animationName: `${halfYellowShadow}`,
                              // animationTimingFunction: `ease`,
                              // animationDuration: `5s`,
                              // animationIterationCount: `infinite`,
                              borderRadius: `8px`,
                            },
                            "&:after": {
                              content: `""`,
                              position: `absolute`,
                              left: 0,
                              top: 0,
                              width: `${isFocused[w] ? '60%' : 0}`,
                              // height: `50%`,
                              height: `${isFocused[w] ? '100%' : 0}`,
                              opacity: `${isFocused[w] ? 1 : 0}`,
                              // animationName: `${halfCyanShadow}`,
                              boxShadow: `0 0 200px 10px #ffff, 0 0 2px 3px #ffff`,
                              zIndex: -1,
                              // animationTimingFunction: `ease`,
                              // animationDuration: `5s`,
                              // animationIterationCount: `infinite`,
                              borderRadius: `8px`,
                            },
                          }}
                        >
                          <div
                            sx={{
                              width: `100%`,
                              height: `100%`,
                              margin: `0px`,
                              backgroundColor: `#4b5d5d`,
                              borderRadius: `8px`,
                            }}
                          >
                            {gatsby(100, 100)}
                          </div>
                        </div>
                      </figure>)
                    })
                  }
                </div>
              </div>
            </div>
            <div
              sx={{
                order: [1, 1, 1, 2],
                width: `80vw`,
                maxWidth: `500px`,
                height: `250px`,
                boxShadow: `-2px -2px 3px 3px rgba( 31, 38, 135, 0.6 )`,
                backdropFilter: `blur( 12px )`,
                borderRadius: `10px`,
                border: `.5px dashed violet`,
                "-webkit-backdrop-filter": `blur( 12px )`,
              }}
            >
              {isFocused[Object.keys(isFocused)[0]]}
            </div>
          </div>
        </Inner>
      </Content>
    </div>
  )
}

export default Skills
