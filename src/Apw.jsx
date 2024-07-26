import React, { useState, useRef, useEffect } from 'react';

const Apw = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  console.log(myRef);

  const logInputElement = () => {
    console.log(inputRef.current);
  };

  return (
    <>
      <h1>hello world</h1>

      <input ref={inputRef} type='text' placeholder='tyoe text' />
      <button onClick={logInputElement}>log input</button>

      <button></button>
    </>
  );
};

export default Apw;
