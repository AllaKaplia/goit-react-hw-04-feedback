import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';

const Expresso = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = ['good', 'neutral', 'bad'];

  const handleUpdateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case 'good':
        setGood(prevFeedback => prevFeedback + 1);
        break;
      case 'neutral':
        setNeutral(prevFeedback => prevFeedback + 1);
        break;
      case 'bad':
        setBad(prevFeedback => prevFeedback + 1);
        break;
      default:
        return;
    }
  };
  

  const addFeedback = (feedbackType) => {
    handleUpdateFeedback(feedbackType);
  };

  const countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    if (total === 0) {
      return 0;
    }
    const positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage);
  };

  const totalFeedback = countTotalFeedback({ good, neutral, bad });
  const positivePercentage = countPositiveFeedbackPercentage({ good, neutral, bad });

  return (
    <>
      <Section title="Please leave feedback about our institution">
        <div>
          <FeedbackOptions
            options={feedback}
            addFeedback={addFeedback}
          />
        </div>
      </Section>
      <Section title="Feedback statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default Expresso;