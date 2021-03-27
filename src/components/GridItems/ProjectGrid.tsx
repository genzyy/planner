import React from 'react';
import { Grid } from '@material-ui/core';

interface ProjectGridProps {}

const ProjectGrid: React.FC<ProjectGridProps> = ({}) => {
  return (
    <div>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
      ></Grid>
    </div>
  );
};
export default ProjectGrid;
