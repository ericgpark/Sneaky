import React from 'react';
import Box from '@material-ui/core/Box';

const Shoe = (props) => {
  const shoe = props.shoe;
  return (
    <Box className="shoeBox">
      <img className="shoeImg" src={shoe.media.thumbUrl} alt="{shoe.name}" />
      <p className="shoeName">
        {shoe.shoe} {shoe.name}
      </p>
      <p>{shoe.releaseDate}</p>
    </Box>
  );
};

export default Shoe;
