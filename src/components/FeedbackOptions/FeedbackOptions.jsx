import React from 'react';
import { Buttons } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, addFeedback }) => {
  return (
    <div>
      {options.map((option, index) => (
        <Buttons key={index} onClick={() => addFeedback(option)}>
          {option}
        </Buttons>
      ))}
    </div>
  );
};


export default FeedbackOptions;