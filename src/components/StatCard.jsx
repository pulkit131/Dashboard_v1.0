import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function StatCard({ children }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

StatCard.propTypes = {
  children: PropTypes.node,
};
