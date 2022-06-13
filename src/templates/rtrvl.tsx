import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import focusContext from "../contexts/focusContext"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Rtrvl = () => {
  const [currFocused, setCurrFocused] = React.useState("")
  const value = React.useMemo(()=>{
    return {currFocused, setCurrFocused}
  } , [currFocused]);
  return (
    <Layout>
      <Parallax pages={5}>
        <Hero offset={0} factor={1} />
        <focusContext.Provider value={value}>
          <Projects offset={1} factor={2} />
        </focusContext.Provider>
        <About offset={3} factor={1} />
        <Contact offset={4} factor={1} />
      </Parallax>
    </Layout>
  )
}

export default Rtrvl
