import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import focusContext from "../contexts/focusContext"
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
  return (
    <Layout>
      <focusContext.Provider value={value}>
        <Parallax pages={10.55}>
          <Hero offset={0} factor={1} />
          <Projects offset={2} factor={3.3} />
          <Skills offset={6.2} factor={2} />
          <About offset={8.7} factor={1} />
          <Contact offset={9.7} factor={1} />
        </Parallax>
      </focusContext.Provider>
    </Layout>
  )
}

export default Rtrvl
