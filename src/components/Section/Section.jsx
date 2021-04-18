import React from 'react';
import { Grid } from '@material-ui/core';

function Section({ children: Children, sectionProps, childrenProps, ...rest }) {
  return (
    <>
      <Grid xs={0} sm={1} md={2} lg={3} />
      <Grid xs={12} sm={10} md={8} lg={6} {...sectionProps}>
        <Children {...childrenProps} />
      </Grid>
      <Grid xs={0} sm={1} md={2} lg={3} />
    </>
  );
}

export default Section;
