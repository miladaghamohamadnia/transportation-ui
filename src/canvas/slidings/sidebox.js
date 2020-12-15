import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import styled from 'styled-components'

import { useDimensions } from "../../helpers/use-dimensions";
import { MenuToggle } from "./sidenavtoggle";
import { Navigation } from "./sidenav";


const Nav = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    ${'' /* z-index: 1; */}
`

const Background = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    ${'' /* background: rgba(255,255,255,1); */}
    background: rgba(90, 75, 142, .4);
`

export default function SideBox () {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    
    return (
    <Nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <Background variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </Nav>
  );
};



const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 100,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
