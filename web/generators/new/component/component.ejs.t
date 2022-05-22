---
to: "components/<%= type %>/<%= h.inflection.camelize(name) %>/<%= h.inflection.camelize(name) %>.tsx"
---
import { ReactNode } from 'react'
import { Base } from './Style'

export interface <%= h.inflection.camelize(name) %>Props {
  children: ReactNode
}

export default function <%= h.inflection.camelize(name) %>({ children }: <%= h.inflection.camelize(name) %>Props) {
  return (
    <Base>
      {children}
    </Base>
  )
}
