import React from "react";
import { IFaqProps } from "./Faq.types";
import "@faq-component/core/dist/index.css";
import {
  Accordion,
  AccordionContent,
  AccordionGroup,
  AccordionSummary,
} from "../Accordion";
const Faq: React.FC<IFaqProps> = ({}) => {
  return (
    <AccordionGroup>
      <Accordion>
        <AccordionSummary>Tab Navigate Me!</AccordionSummary>
        <AccordionContent>
          <div>I have awesome accessibility</div>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionSummary>You will love tabbing me!</AccordionSummary>
        <AccordionContent>
          <input type="checkbox" /> I am checkbox 1
          <input type="checkbox" /> I am checkbox 2
          <input type="checkbox" /> I am checkbox 3
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionSummary>This is summary</AccordionSummary>
        <AccordionContent>
          <div>Hello</div>
        </AccordionContent>
      </Accordion>
    </AccordionGroup>
  );
};

export { Faq };
