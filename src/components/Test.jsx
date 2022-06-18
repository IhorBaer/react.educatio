import { useState } from 'react';

export const useIncrementOnClick = (value = 15) => {
  const [old, setOld] = useState(value);
  const onClick = () => {
    setOld(old + 1);
  };
  return { old, onClick };
};

export const Test = ({ name, number, contactId, deleteContact }) => {
  const { old, onClick } = useIncrementOnClick();
  return <div onClick={onClick}> {old} </div>;
};

export const Test2 = ({ name, number, contactId, deleteContact }) => {
  const { old, onClick } = useIncrementOnClick(20);
  return <div onClick={onClick}> {old} </div>;
};
