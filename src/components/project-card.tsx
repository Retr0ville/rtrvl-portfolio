/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"
import { useContext } from "react"
import focusContext from "../contexts/focusContext"
import { halfCyanShadow, halfYellowShadow, bounceFadeForward, bounceFadeBackward } from "../styles/keyframes"

type ProjectCardProps = {
  githubLink: string
  liveLink: string
  stack: string[]
  title: string
  children: React.ReactNode
  bg: string
  domColor: string
  domColorAlt?: string
  imageChild: React.ReactNode
  focused: boolean
  projectName: string
}

const ProjectCard = ({ githubLink, liveLink, stack, title, children, bg, domColor, domColorAlt, imageChild, projectName }: ProjectCardProps) => {
  const { currFocused, setCurrFocused } = useContext(focusContext)

  let focused = projectName === currFocused
  return (
    <div
      onClick={() => {
        !focused ? setCurrFocused(projectName) : setCurrFocused('none')
      }}
      sx={{
        // aspectRatio: `1 / 1`,
        // minHeight: `600px`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px) scale(1.02)`,
          ".linked": {
            zIndex: 2,
            opacity: 1,
          },
          ".info": {
            visibility: `visible`,
            opacity: 1,
          },
        },
      }}
    >

      <div
        className="project-item"
        // href={link}
        // target="_blank"
        // rel="noreferrer noopener"
        sx={{
          cursor: `pointer`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`,
          width: `100%`,
          boxShadow: `lg`,
          position: `relative`,
          textDecoration: `none`,
          borderRadius: `lg`,
          px: 0,
          py: [3, 3],
          pt: [0, 0],
          color: `white !important`,
          background: bg || `none`,
          transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
          ".project-card-image": {
            animationName: `${focused ? bounceFadeBackward : bounceFadeForward}`,
          },
          "&:hover": {
            "&:before": {
              height: `100%`,
              animationName: `${halfYellowShadow}`,
            },
            "&:after": {
              height: `100%`,
              animationName: `${halfCyanShadow}`,
            },
          },
          "&:before": {
            content: `""`,
            position: `absolute`,
            right: 0,
            bottom: 0,
            width: `50%`,
            height: `50%`,
            boxShadow: `0 0 17px 3px #ffff01,0 0 4px 2px #ffff01`,
            zIndex: -1,
            // animationName: `${halfYellowShadow}`,
            animationTimingFunction: `ease`,
            animationDuration: `5s`,
            animationIterationCount: `infinite`,
            borderRadius: `5px`,
          },
          "&:after": {
            content: `""`,
            position: `absolute`,
            left: 0,
            top: 0,
            width: `50%`,
            height: `50%`,
            boxShadow: `0 0 17px 3px ${domColorAlt || domColor},0 0 4px 2px  ${domColor}`,
            zIndex: -1,
            // animationName: `${halfCyanShadow}`,
            animationTimingFunction: `ease`,
            animationDuration: `5s`,
            animationIterationCount: `infinite`,
            borderRadius: `5px`,
          },
        }}
      >
        <div
          className="imagen"
          sx={{
            ".project-card-image": {
              borderRadius: `0.5rem 0.5rem 0 0`,
              opacity: 1,
              zIndex: 2,
              animationTimingFunction: `ease`,
              animationDuration: `1.5s`,
              animationFillMode: `forwards`,
              animationIterationCount: `1`,
            },
          }}
        >{imageChild}</div>
        <div
          className="description"
          sx={{
            opacity: `${focused ? 1 : 0}`,
            zIndex: 1,
            textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
            top: `${focused ? "12%" : "25%"}`,
            color: `white`,
            // backgroundColor:`#39393911`,
            borderRadius: `0 8px 8px 0`,
            left: `0`,
            padding: `1rem`,
            position: `absolute`,
            transition: `all 1.5s`
          }}>
          {children}
        </div>
        <div
          sx={{
            visibility: `${focused ? 'hidden' : 'visible'}`,
            textTransform: `uppercase`,
            letterSpacing: `wide`,
            pt: 4,
            fontSize: [4, 5],
            fontWeight: `medium`,
            lineHeight: 1,
            marginInline: `1rem`,
            marginBottom: `1rem`,
          }}
        >
          {title}
        </div>
        <div
          className="linked"
          sx={{
            zIndex: -1,
            opacity: 0,
            transition: `all 1s`,
            marginTop: `1.5rem`,
            marginLeft: `1rem`,
            marginInlineEnd: `.6rem`,
            alignSelf: `flex-end`,
            paddingBottom: `5px`,
          }}
        >
          <a
            title="view code"
            href={githubLink}
            target="_blank"
            sx={{
              position: `relative`,
              display: `inline-block`,
              width: `50px`,
              height: `50px`,
              textAlign: `center`,
              lineHeight: `50px`,
              // background: `#00000011`,
              boxShadow: `0 0 6px #d3540044`,
              borderRadius: `.5rem`,
              transition: `.5s`,
              marginRight: `.8rem`,
              // zIndex: 1,
              "&:hover": {
                boxShadow: `0 0 6px ${domColor}`,
                "&:before": {
                  transform: `scale(1.2)`,
                  boxShadow: `0 0 6px ${domColor}`,
                  filter: `blur(2px)`,
                },
              },
              "&:before": {
                content: `""`,
                position: `absolute`,
                top: 0,
                left: 0,
                width: `100%`,
                height: `100%`,
                borderRadius: `.5rem`,
                // background: `#fff`,
                boxShadow: `0 0 6px ${domColor}`,
                transition: `all .5s !important`,
                // transform: `scale(.8)`,
                zIndex: -1,
              },
              ".git": {
                marginTop: `2.5px`,
              }
            }}
          >
            <StaticImage
              className="git"
              src="../images/git1.png"
              width={45}
              alt="git"
            />
          </a>
          <a
            title="view live website"
            href={liveLink}
            target="_blank"
            sx={{
              position: `relative`,
              display: `inline-block`,
              width: `50px`,
              height: `50px`,
              textAlign: `center`,
              lineHeight: `50px`,
              // background: `#00000011`,
              boxShadow: `0 0 6px #d3540044`,
              borderRadius: `.5rem`,
              transition: `.5s`,
              // zIndex: 1,
              "&:hover": {
                boxShadow: `0 0 6px ${domColor}`,
                "&:before": {
                  transform: `scale(1.2)`,
                  boxShadow: `0 0 6px ${domColor}`,
                  filter: `blur(2px)`,
                },
              },
              "&:before": {
                content: `""`,
                position: `absolute`,
                top: 0,
                left: 0,
                width: `100%`,
                height: `100%`,
                borderRadius: `.5rem`,
                // background: `#fff`,
                boxShadow: `0 0 6px ${domColor}`,
                transition: `all .5s !important`,
                // transform: `scale(.8)`,
                zIndex: -1,
              }
            }}
          >
            <StaticImage
              src="../images/live.png"
              alt="live"
              width={50}
            />
          </a>
        </div>
        <div
          className="info"
          sx={{
            visibility: `hidden`,
            opacity: 0,
            transition: `all 1s`,
            flexDirection: `column`,
            justifySelf: `flex-end`,
            marginInline: `1rem`,
          }}
        >
          <span
            sx={{
              display: `flex`,
              placeItems: `center`,
              color: `#ffff56a6`,
              fontSize: `.7rem`,
              fontWeight: `500`,
              borderRadius: `999px`,
              paddingX: `.5rem`,
              paddingBottom: `2px`,
              backgroundColor: `#ff000f33`,
              boxShadow: `xl`,
              width: `max-content`,
            }}
          >
        /*Click anywhere to view description*/
          </span>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard
