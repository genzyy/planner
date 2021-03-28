import React from 'react';
import { Grid } from '@material-ui/core';
import GridItem from './grid-components/GridItem';

interface ProjectGridProps {
  gridname?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ gridname }) => {
  return (
    <Grid item>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        spacing={3}
      >
        <GridItem
          title='Complete the project'
          priority={1}
          tags={['hi', 'hello']}
        />
        <GridItem
          title='Complete the project'
          priority={1}
          tags={['hi', 'hello']}
        />
        <GridItem
          title='Complete the project'
          priority={1}
          tags={['hi', 'hello']}
        />
      </Grid>
    </Grid>
  );
};
export default ProjectGrid;
