import * as React from "react";
import { motion } from "framer-motion";
import { SideItem } from "./sidenavitem";
import styled from "styled-components";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const ItemsList = styled(motion.ul)`
  margin: 0;
  padding: 0;
  padding: 15px;
  position: absolute;
  top: 70px;
  width: 150px;
`

export const Navigation = () => (
  <ItemsList variants={variants}>
    {itemIds.map(i => (
      <SideItem i={i} key={i} />
    ))}
  </ItemsList>
);

const itemIds = [0, 1, 2, 3, 4];
