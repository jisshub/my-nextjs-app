import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar';
import { Box } from '@mui/material';

const FilterDropdown = dynamic(() => import('../components/FilterDropdown'), { ssr: false });

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <FilterDropdown />
      </main>
    </Box>
  );
}
