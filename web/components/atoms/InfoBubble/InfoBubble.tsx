import { ReactNode } from 'react'
import { Base } from './Style'

export interface InfoBubbleProps {
  children: ReactNode
}

export default function InfoBubble({ children }: InfoBubbleProps) {
  return (
    <Base>
      {children}
    </Base>
  )
}
