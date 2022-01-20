import React from "react";
import PropTypes from "prop-types";
import { SectionTitle } from "./Section.style";

const Section = ({ title, children }) => (
  <div>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
