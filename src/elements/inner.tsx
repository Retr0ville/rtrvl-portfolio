/** @jsx jsx */
import { jsx } from "theme-ui"

type InnerProps = {
  className?: string
  id?: string
  children: React.ReactNode
}

const Inner = ({ className = ``, children, id =`` }: InnerProps) => (
  <div id = {id} sx={{ width: [`full`, `full`, `full`, `full`, `full`, `2/3`], textAlign: `left` }} className={className}>
    {children}
  </div>
)

export default Inner
