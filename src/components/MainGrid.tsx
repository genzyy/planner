import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectGrid from './GridItems/ProjectGrid';

interface MainGridProps {}

const MainGrid: React.FC<MainGridProps> = ({}) => {
  return (
    <div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={3}
      >
        <ProjectGrid />
        <ProjectGrid />
        <ProjectGrid />
      </Grid>
    </div>
  );
};
export default MainGrid;
