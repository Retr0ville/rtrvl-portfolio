import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import focusContext from "../contexts/focusContext"
import Navbar from "../components/navbar"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Skills from "../components/skills"

const Rtrvl = () => {
  const [currFocused, setCurrFocused] = React.useState("")
  const value = React.useMemo(() => {
    return { currFocused, setCurrFocused }
  }, [currFocused]);
  const ref = React.useRef()
  const handleScroll = (page: number)=>{
   {/* @ts-ignore */}
    ref.current.scrollTo(page)
  }
  return (
    <Layout>
      <focusContext.Provider value={value}>
        <Navbar scrollHere = {handleScroll}/>
        {/* @ts-ignore */}
        <Parallax ref={ref} pages={14.8}>
          <Hero offset={0} factor={1} />
          <Projects offset={1.8} factor={6} />
          <Skills offset={7} factor={4} />
          <About offset={11.5} factor={1} />
          <Contact offset={13} factor={2} />
        </Parallax>
        {/* <Parallax ref={ref} pages={13}>
          <Hero offset={0} factor={1} />
          <Projects offset={2} factor={3} />
          <Skills offset={6.2} factor={2.5} />
          <About offset={9.7} factor={1} />
          <Contact offset={11.2} factor={2} />
        </Parallax> */}
      </focusContext.Provider>
    </Layout>
  )
}

export default Rtrvl
