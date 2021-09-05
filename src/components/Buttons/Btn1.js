import React from 'react';

const Btn1 = ({ background, hoverBackground }) => {
  return (
    <>
      <button
        className={`${background} text-lg font-semibold transition  duration-200 text-whity hover:${hoverBackground} `}
      >
        SEE PRODUCT
      </button>
    </>
  );
};

export default Btn1;
