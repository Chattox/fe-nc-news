import React from 'react';

const ErrorPage = props => {
  if (props.status === 404) {
    return <p>Error 404 not found</p>;
  } else if (props.status === 400) {
    return <p>Error 400 bad request</p>;
  }
};

export default ErrorPage;
