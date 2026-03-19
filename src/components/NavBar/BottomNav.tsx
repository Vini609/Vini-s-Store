'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Loja', href: '/' },
  { label: 'Blog', href: '/' },
  {
    label: 'Comidas',
    href: '/',
    dropdown: [
      { label: 'Bebidas', href: '/bebidas' },
      { label: 'Frete', href: '/Frete' },
    ],
  },
  { label: 'Fale Conosco', href: '/' },
];

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<Record<string, boolean>>(
    {},
  );
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown({});
  };


  return (
    <div
      className={`w-full bg-white py-5 shadow-sm transition-all duration-500 ${isFixed ? 'fixed top-0 z-50' : ''}`}
    >
      <div className='flex w-full items-center justify-between px-[8%] text-gray-700 lg:px-[16%]'>
        <Link
          href='/'
          className='font-audiowide text-exl font-bold text-black lg:hidden'
        >
          Vini's<span className='text-[var(--second)]'>Store</span>
        </Link>

        <Link
          href='/'
          className={`font-audiowide text-4xl font-bold text-black ${
            isFixed ? 'hidden lg:block' : 'hidden'
          }`}
        >
          Vini's<span className='text-[var(--second)]'>Store</span>
        </Link>

        {/*Menu Centralizado*/}
        <div className='hidden justify-center lg:flex'>
          <nav className='flex items-center gap-8'>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className='group relative'>
                  <Link
                    href={link.href}
                    className='font-golos flex items-center gap-1 font-bold text-[var(--black)] transition-colors hover:text-[var(--second)]'
                  >
                    {link.label}
                    <Image
                      src='/Menu-dot.svg'
                      alt='icone do menu'
                      width={10}
                      height={10}
                    />
                  </Link>
                </div>
              ) : null
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}