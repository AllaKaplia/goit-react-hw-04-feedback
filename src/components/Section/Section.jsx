import React from 'react';
import { Title, Box } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

export default Section;