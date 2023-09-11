import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <h1>{message}</h1>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
