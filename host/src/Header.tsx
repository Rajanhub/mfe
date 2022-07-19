import React, { useRef, useEffect } from "react";
//@ts-ignore
import { mount } from "ui/header";

export default function Header() {
  const headref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    mount(headref.current);
  }, [headref]);
  return <div id="mf-header" ref={headref}></div>;
}
