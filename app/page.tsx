import dynamic from 'next/dynamic';

const FilterDropdown = dynamic(() => import('../components/FilterDropdown'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FilterDropdown />
    </main>
  );
}
