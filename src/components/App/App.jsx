import React, { Component } from 'react';

import Section from 'components/Section';
import FeedbackControls from 'components/FeedbackControls';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //[1,2,3]

  countAllFeedbacks = () => {
    const { good, neutral, bad } = this.state;

    return good + bad + neutral;
  };

  countPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (good === 0) {
      return 0;
    }
    const positiveFeedbacksAverage = (good / (neutral + bad + good)) * 100;

    return Math.round(positiveFeedbacksAverage);
  };

  handleBtnClick = e => {
    const { name } = e.target;

    this.setState(prev => {
      return { [name]: prev[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackControls
            onButtonClick={this.handleBtnClick}
            config={['good', 'neutral', 'bad']}
          />
        </Section>

        {this.countAllFeedbacks() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countAllFeedbacks()}
              positivePercentage={this.countPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
