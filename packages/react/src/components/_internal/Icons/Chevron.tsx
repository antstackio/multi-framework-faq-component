import React from "react";
import { Icon } from "@hover-design/react";

const ChevronIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Icon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="6 9 12 15 18 9"></polyline>
    </Icon>
  );
};

export default ChevronIcon;
