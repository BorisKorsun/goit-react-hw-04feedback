import PropTypes from 'prop-types';

import capitalizeFLetter from 'utils/CapitalizeFirstLetter';

const FeedbackControls = ({ config, onButtonClick }) => {
  return (
    <>
      {config.map(button => {
        return (
          <button
            name={button}
            onClick={onButtonClick}
            key={button}
            type="button"
          >
            {capitalizeFLetter(button)}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackControls;


FeedbackControls.propTypes = {
  config: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func.isRequired,
}