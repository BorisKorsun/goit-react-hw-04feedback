import {useState} from 'react';

import Section from 'components/Section';
import FeedbackControls from 'components/FeedbackControls';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countAllFeedbacks = () => {
    return good + bad + neutral;
  };

  const countPercentage = () => {
    if (good === 0) {
      return 0;
    }
    const positiveFeedbacksAverage = (good / (neutral + bad + good)) * 100;

    return Math.round(positiveFeedbacksAverage);
  };

  const handleBtnClick = e => {
    const { name } = e.target;
    
    switch(name) {
      case 'good': setGood(p => p + 1);
      break;
      case 'neutral': setNeutral(p => p + 1);
      break;
      case 'bad': setBad(p => p + 1);
      break;
      default: throw new Error(`There is no name - ${name} option`)
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackControls
          onButtonClick={handleBtnClick}
          config={['good', 'neutral', 'bad']}
        />
      </Section>

      {countAllFeedbacks() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countAllFeedbacks()}
            positivePercentage={countPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}
