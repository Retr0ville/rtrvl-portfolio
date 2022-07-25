import * as React from "react"
import Mouse from "../components/mouse/mouse.tsx"
import ProjectCard from "../components/project-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children, ...props }) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  Mouse: ()=> <Mouse />
}

export default components
