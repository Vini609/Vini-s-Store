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
  { label: 'Produtos', href: '/' },
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

                <div className='absolute left-0 top-full hidden
                min-w[180px] rounded-lg  border grav-100 bg-white p-2 shadow-x1 group-hover:block'>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className='font-golos block rounded-md
                      px-4 py-2 text-[var(black)]
                      trasition-colors hover:bg-var
                  (--prim-light)] hover:text-var(--second)]'>
                      {item.label}
                  </Link>

                  ))}
                </div>

                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className='font-golos flex items-center gap-1
                  font-bold text-var(--black) transition-colors
                  hover:text-[var(--second)]'
                  >
                    {link.label}
                    <Image
                      src='/Menu-dot.svg'
                      alt='icone do menu'
                      width={10}
                      height={10}
                    />
                  </Link>
              )
            )}

           

          </nav>
        </div>

        {/*Direita desktop */}
        <div className='hidden items-center gap-6 lg:flex'>
          <Link
            href='/'
            className='font-golos border-b border-gray-400 font-semibold
            text-[var(--black)] trasition-colors hover:border-[var(--second)]
            hover:text-[var(--second)]  '
            >
              
                 Login / Cadastro
            </Link>
            

            <Link 
              href='/'
              className='relative text-3x1 text-[var(--black)] transition-colors hover:text-[var(--second)]'
              arial-label='Carrinho'
            >
              <i className='bi bi-cart3'></i>
              <span className='absolute  -right-2 -top-2 flex h-5 w-5
               items-center justify-center rounded-full bg-black text-xs text-white'>
                  2  
               </span>
            </Link>
        </div>
      </div>
    </div>
  );
}