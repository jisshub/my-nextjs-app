import React from 'react';
import ProductsPage from '../../../components/ProductsPage';
import Sidebar from '../../../components/Sidebar';
import { Box } from '@mui/material';

const ProductsPageComponent = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <ProductsPage />
    </Box>
  );
};

export default ProductsPageComponent;