import React from 'react'
import { Link } from '../Link'

export const Navbar = () => {
  return (
    <header className="flex justify-around bg-zinc-800 text-slate-200 py-4">
      <div>
        Logo
      </div>
      <nav className="flex gap-3">
        <Link href="#home">Home</Link>
        <Link href="#home">Services</Link>
        <Link href="#home">Prices</Link>
        <Link href="#home">About</Link>
      </nav>
    </header>
  )
}
