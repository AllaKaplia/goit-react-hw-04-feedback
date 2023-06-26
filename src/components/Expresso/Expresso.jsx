import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';

class Expresso extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (total === 0) {
      return 0;
    }
    const positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback about our institution">
          <div>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              addFeedback={this.addFeedback}
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
  }
}

export default Expresso;