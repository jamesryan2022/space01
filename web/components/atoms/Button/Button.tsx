import { ReactNode } from 'react'
import { Base } from './Style'

export interface ButtonProps {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <Base>
      {children}
    </Base>
  )
}
