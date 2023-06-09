import React from 'react';
import { Link } from '../Link';

export const Navbar = () => {
  return (
    <header className="flex justify-around fixed w-full items-center text-slate-200 py-4 z-10 bg-white/10 backdrop-blur-lg">
      <h1 className="text-3xl">Logo</h1>
      <nav className="flex gap-3">
        <Link href="#home">Home</Link>
        <Link href="#home">Services</Link>
        <Link href="#home">Prices</Link>
        <Link href="#home">About</Link>
      </nav>
    </header>
  );
};
