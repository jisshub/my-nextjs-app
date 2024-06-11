"use client";

import React, { useState } from 'react';
import { CalendarToday, People, Category } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const [selectedIndex, setSelectedIndex] = useState(() => {
    if (pathname === '/service/date-of-schedule') return 0;
    if (pathname === '/service/people') return 1;
    if (pathname === '/service/products') return 2;
    return 0;
  });

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200">
      <nav className="flex flex-col">
        <Link href="/service/date-of-schedule" legacyBehavior>
          <a
            onClick={() => handleListItemClick(0)}
            className={`flex items-center p-4 hover:bg-gray-100 ${selectedIndex === 0 ? 'bg-gray-100' : ''}`}
          >
            <CalendarToday className="mr-4" />
            <span>Scheduled Date</span>
          </a>
        </Link>
        <Link href="/service/people" legacyBehavior>
          <a
            onClick={() => handleListItemClick(1)}
            className={`flex items-center p-4 hover:bg-gray-100 ${selectedIndex === 1 ? 'bg-gray-100' : ''}`}
          >
            <People className="mr-4" />
            <span>People</span>
          </a>
        </Link>
        <Link href="/service/products" legacyBehavior>
          <a
            onClick={() => handleListItemClick(2)}
            className={`flex items-center p-4 hover:bg-gray-100 ${selectedIndex === 2 ? 'bg-gray-100' : ''}`}
          >
            <Category className="mr-4" />
            <span>Services / Products</span>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
