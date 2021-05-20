import React, { useState, useEffect } from 'react';
import Shoe from './Shoe.jsx';

const ShoeDisplay = (props) => {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    fetch('/api')
      .then((res) => res.json())
      .then((newShoes) => {
        if (!Array.isArray(newShoes)) newShoes = [];
        if (isMounted) setShoes(newShoes);
        setIsLoading(false);
      })
      .catch((err) =>
        console.log('ShoeContainer.componentDidMount: get shoes: ERROR ', err)
      );
    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const shoeArr = [];
  for (let i = 0; i < shoes.length; i++) {
    shoeArr.push(<Shoe key={i} shoe={shoes[i]} />);
  }

  return <div>{shoeArr}</div>;
};

export default ShoeDisplay;
