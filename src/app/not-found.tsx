"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  useEffect(() => {
    // Any document operations should go here
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page Not Found</p>
        <Link href="/" className="text-blue-500 hover:text-blue-400 underline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
