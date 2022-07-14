/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { skills } from "../../utils/skills"
import useFocus from "../../hooks/useFocusHook"
import { skillsMappedToSvg } from "../../utils/svgIcons"

const { db, frameworks } = skills.backend

export const Backend = () => {
  const { isFocused, toggleFocus } = useFocus()
  return (
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`,
        position: `relative`,
        top: `30px`,
        width: `100%`,
        placeItems: `center`,
      }}
    >
      <code
        sx={{
          position: `relative`,
          fontSize: `1.5rem`,
          width: `80vw`,
          maxWidth: `550px`,
          left: `20px`,
          top: `10px`

        }}
      >
        .Backend<span sx={{color:`#fff000`, margin:0, padding:0,}}>()</span>
      </code>
      <div
        sx={{
          position: `absolute`,
          // top: `20%`,
          width: `80vw`,
          maxWidth: `550px`,
          height: `250px`,
          padding: `2rem`,
          paddingTop: `2.7rem`,
          boxShadow: `-2px -2px 3px 3px rgba( 31, 38, 135, 0.6 )`,
          backdropFilter: `blur( 12px )`,
          borderRadius: `10px`,
          border: `.5px dashed violet`,
          "-webkit-backdrop-filter": `blur( 12px )`,
        }}
      >
        {
          Object.keys(isFocused).length > 0 &&
          (
            <>
              <code>
                {isFocused.category}:
              </code>
              <h3
                sx={{
                  marginBlock: `.1rem`,
                  marginLeft: `10px`
                }}
              >
                <code>
                  {Object.keys(isFocused)[0]}:
                </code>
              </h3>
              <div
                sx={{
                  height: `75%`,
                  marginLeft: `20px`,
                  overflowY: `scroll`,
                  overflowX: `hidden`,
                  fontSize: [ '.85rem', '.85rem', '.85rem', '.85rem',' 1rem'],
                  scrollbarWidth: `thin`,
                  scrollbarColor: `purple #333`,
                  '&::-webkit-scrollbar': {
                    width: '8px'
                  },
                  '&::-webkit-scrollbar-track': {
                    boxShadow: `-.5px -.5px 1px .5px rgba( 256, 256, 256, 0.6 ) inset`,
                    borderRadius: '20px',
                    background: '#333',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba( 31, 38, 135, 0.6 )',
                    borderRadius: '20px',
                    border: `1px solid #00002233`
                  },
                }}
              >
                <code>
                {isFocused[Object.keys(isFocused)[0]]}
              </code>
              </div>
            </>)
        }
      </div>
      <div
        sx={{
          width: `100%`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          overflowX: `auto`,
          scrollbarWidth: `thin`,
          scrollbarColor: `purple #333`,
          '&::-webkit-scrollbar': {
            height: '8px'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: `-.5px -.5px 1px .5px rgba( 256, 256, 256, 0.6 ) inset`,
            borderRadius: '20px',
            background: '#333',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba( 31, 38, 135, 0.6 )',
            borderRadius: '20px',
            border: `1px solid #00002233`
          },

        }}
      >

        <div
          sx={{
            marginBlock: `2rem`,
            marginRight: [0, 0, 0, '5rem', 0],
            padding: `1rem`,
            background: `rgba( 0, 0, 0, 0.2 )`,
            width: `fit-content`,
            position: `relative`,
            left: ['130px', '130px', '170px', '0'],
            boxShadow: `-2px -2px 3px 3px rgba( 31, 38, 135, 0.6 )`,
            // backdropFilter: `blur( 12px )`,
            borderRadius: `10px`,
            border: `.5px dashed violet`,
            // "-webkit-backdrop-filter": `blur( 12px )`,
            display: `flex`,
            flexDirection: `column`,
            transform: `rotateX(65deg) rotate(-35deg) translateZ(-140px)`,
            transformStyle: `preserve-3d`,

          }}
        >
          <code
            sx={{
              width: `100%`,
              maxWidth: `500px`,
              height: `250px`,
              padding: `.5rem 1rem .5rem 1rem`,
              boxShadow: `-1px -1px 10px 5px rgba( 256, 256, 256, ${Object.keys(isFocused).length > 0 ? 0.4 : 0} ) inset,
              -1px -1px 10px 5px rgba( 31, 38, 135, ${Object.keys(isFocused).length > 0 ? 0.6 : 0} ) inset`,
              backdropFilter: `blur( 12px )`,
              borderRadius: `10px`,
              border: `1px dashed violet`,
              "-webkit-backdrop-filter": `blur( 12px )`,
            }}
          >
            <div>
              func getFocused(isFocused map[string]string) {`{`}
            </div>
            <div>
             /** [Object.keys(isFocused)[0]] **/
            </div>

            <div
              sx={{
                paddingLeft: `1rem`,
              }}
            >
              return {`{`}
            </div>
            {isFocused.category &&
              (<div
                sx={{
                  paddingLeft: `2rem`,
                }}
              >
                currCategory:{isFocused.category}
              </div>)
            }
            {Object.keys(isFocused).length > 0 &&
              (<div
                sx={{
                  paddingLeft: `2rem`,
                }}
              >
                selected: {Object.keys(isFocused)[0]}
              </div>)}
            <div
              sx={{
                paddingLeft: `2rem`,
              }}
            >
              {`}`}
            </div>
            <div
              sx={{
                paddingLeft: `1rem`,
              }}
            >
              {`}`}
            </div>
          </code>
          <div
            sx={{
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >

            <div
              sx={{
                display: `flex`,
                justifyContent: `space-between`,
                // width: `300px`
              }}
            >
              <div
                sx={{
                  display: `grid`,
                  gridTemplate: `auto 1fr 1fr / 1fr 1fr`,
                  gap: `1rem, 0`,
                }}
              >
                <h3
                  sx={{
                    margin: 0,
                    width: `100%`,
                    textAlign: `center`,
                    gridColumn: `1 / 3`,
                  }}
                >.Database()</h3>
                {
                  Object.keys(db).map(w => {
                    return (<figure
                      title={w}
                      onClick={() => toggleFocus({ [w]: db[w], category: 'Database' })}
                      sx={{
                        cursor: `pointer`,
                        margin: `10px`,
                        width: ['70px', '80px', '100px',],
                        height: ['70px', '80px', '100px',],
                        // transformStyle: `preserve-3d`,
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
                            margin: `0px auto`,
                            backgroundColor: `#4b5d5d`,
                            borderRadius: `8px`,
                          }}
                        >
                          <div
                            sx={{
                              margin: `0px auto`,
                              width: `92%`,
                              height: `92%`
                            }}
                          >
                            {skillsMappedToSvg[w]()}
                          </div>
                        </div>
                      </div>
                    </figure>)
                  })
                }
              </div>
              <div
                sx={{
                  display: `grid`,
                  gridTemplate: `2rem 1fr 1fr / auto auto`,
                  gap: `1rem, 0`,
                }}
              >
                <h3
                  sx={{
                    margin: 0,
                    width: `100%`,
                    textAlign: `center`,
                    gridColumn: `1 / 3`,
                  }}
                >.Frameworks()</h3>
                {
                  Object.keys(frameworks).map(w => {
                    return (<figure
                      title={w}
                      onClick={() => toggleFocus({ [w]: frameworks[w], category: 'Framework' })}
                      sx={{
                        cursor: `pointer`,
                        margin: `10px`,
                        width: ['70px', '80px', '100px',],
                        height: ['70px', '80px', '100px',],
                        // transformStyle: `preserve-3d`,
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
                            margin: `0px auto`,
                            backgroundColor: `#4b5d5d`,
                            borderRadius: `8px`,
                          }}
                        >
                          <div
                            sx={{
                              margin: `0px auto`,
                              width: `92%`,
                              height: `92%`
                            }}
                          >
                            {skillsMappedToSvg[w]()}
                          </div>
                        </div>
                      </div>
                    </figure>)
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}