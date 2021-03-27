import React from 'react';
import { Grid } from '@material-ui/core';

interface MainGridProps {}

const MainGrid: React.FC<MainGridProps> = ({}) => {
  return (
    <div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
      ></Grid>
    </div>
  );
};
export default MainGrid;
