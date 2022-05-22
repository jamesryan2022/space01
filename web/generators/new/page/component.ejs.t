---
to: "pages/<%= name %>.tsx"
---
import type { GetStaticProps, NextPage } from "next";

export interface <%= h.inflection.camelize(name) %>Props {
  items?: any
}

const <%= h.inflection.camelize(name) %>: NextPage<<%= h.inflection.camelize(name) %>Props> = () => {
  return (
    <div>
    </div>
  )
}

export default <%= h.inflection.camelize(name) %>

export const getStaticProps: GetStaticProps = async function getStaticProps() {
  return {
    props: {
      hideNav: false,
    },
  };
};