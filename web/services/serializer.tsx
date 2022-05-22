/* eslint-disable react/display-name */
import { ReactNode } from "react";
import Text from "../components/atoms/Text/Text";
import getUrlFromId from "./getUrlFromId";
import urlFor from "./urlFor";

export interface BlockProps {
  children: ReactNode;
  node: any;
}

export const serializers = {
  types: {
    block(props: BlockProps) {
      switch (props.node.style) {
        case "h1":
          return (
            <>
              <Text size="h1" Tag="h1">
                {props.children}
              </Text>
            </>
          );

        case "h2":
          return (
            <>
              <Text size="h2" Tag="h2">
                {props.children}
              </Text>
            </>
          );

        case "h5":
          return (
            <>
              <Text size="h5" Tag="h5">
                {props.children}
              </Text>
            </>
          );

        // ...
        default:
          return (
            <>
              <Text size="body">{props.children}</Text>
            </>
          );
      }
    },
  },
  marks: {
    strong: (props: { children: string }): any => (
      <strong>{props.children}</strong>
    ),
    em: (props: { children: string }): any => <em>{props.children}</em>,
    code: (props: { children: string }): any => <code>{props.children}</code>,
    link: (props: { children: string; mark: { href: string } }): any => {
      return (
        <a href={props.mark.href} target={"_blank"} rel="noreferrer">
          {props.children}
        </a>
      );
    },
  },
  list: (props: BlockProps) => <ul>{props.children}</ul>,
  listItem: (props: BlockProps) => <li>{props.children}</li>,
};

export default serializers;
