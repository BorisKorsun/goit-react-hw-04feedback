import PropTypes from 'prop-types';


const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
