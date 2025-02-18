import * as React from 'react';
import Grid from '@mui/material/Grid';
import StatCard from './StatCard'; // Ensure StatCard is updated to accept children
import HighlightedCard from './HighlightedCard';
import YourFormComponent from './FormComponent'; // Import your form component
import Typography from '@mui/material/Typography';

export default function MainGrid() {
  return (
    <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}>
      {/* Leftmost Card - Form Inside */}
      <Grid item xs={12} sm={6} lg={3}>
        <StatCard>
          <YourFormComponent />
        </StatCard>
      </Grid>

      {/* Middle Card - Customize Content Here */}
      <Grid item xs={12} sm={6} lg={3}>
        <StatCard>
          <Typography variant="h6">Middle Card Content</Typography>
        </StatCard>
      </Grid>

      {/* Rightmost Card - Customize Content Here */}
      <Grid item xs={12} sm={6} lg={3}>
        <StatCard>
          <Typography variant="h6">Right Card Content</Typography>
        </StatCard>
      </Grid>

      {/* Highlighted Card */}
      <Grid item xs={12} sm={6} lg={3}>
        <HighlightedCard />
      </Grid>
    </Grid>
  );
}
