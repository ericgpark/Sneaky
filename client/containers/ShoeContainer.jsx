import React, { useState, useEffect } from 'react';
import ShoeDisplay from '../components/ShoeDisplay.jsx';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '../stylesheets/styles.css';

const ShoeContainer = (props) => {
  const [shoeCategory, setShoeCategory] = useState(0);
  const handleChange = (e, newShoeCategory) => {
    setShoeCategory(newShoeCategory);
  };

  return (
    <Box>
      <Paper>
        <Tabs
          value={shoeCategory}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Air Jordan 1 High" />
          <Tab label="Nike Dunk High" />
          <Tab label="Nike Dunk Low" />
        </Tabs>
      </Paper>
      <ShoeDisplay category={shoeCategory} />;
    </Box>
  );
};

export default ShoeContainer;
