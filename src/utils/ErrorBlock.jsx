import PropTypes from 'prop-types';
import React from 'react';

const ErrorBlock = ({ message }) => {
  let errormessage = message;
  if( typeof message === 'object'){
     errormessage = Object.values(message).join(', ')
  }
  return (
    <div className='error-container'>
      <p className='error-message'>{errormessage}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorBlock;