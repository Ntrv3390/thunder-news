import React from 'react';
import loading from './loading.gif';

const Loading = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="text-loading in thunder" />
    </div>
  );
};

export default Loading;