import React, { ForwardRefRenderFunction } from "react";

import { accordionThemeClass, detailsClass } from "@faq-component/core";
import { IAccordionProps } from "./accordion.types";

const Accordion: ForwardRefRenderFunction<
  HTMLDetailsElement,
  IAccordionProps
> = ({ children, onToggle, className, ...nativeProps }, ref) => {
  return (
    <details
      ref={ref}
      onToggle={onToggle}
      className={`${detailsClass} ${accordionThemeClass} ${className}`}
      {...nativeProps}
    >
      {children}
    </details>
  );
};
const AccordionWithRef = React.forwardRef(Accordion);
export { AccordionWithRef as Accordion };
