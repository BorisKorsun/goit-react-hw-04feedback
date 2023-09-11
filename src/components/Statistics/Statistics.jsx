const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>All feedbacks: {total}</li>
        <li>Percentage of positive feedbacks: {positivePercentage}%</li>
      </ul>
    </>
  );
};

export default Statistics;
