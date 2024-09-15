'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();
    const navItems = [
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About' },
        { href: '/services', text: 'Services' },
        { href: '/contact', text: 'Contact' }
    ].map(item => (<li key={item.href}>
        <Link className={`hover:text-gray-400 ${pathname === item.href && 'text-blue-600'}`}
              href={item.href}>{item.text}</Link>
    </li>));

    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <ul className="flex space-x-8">
                    {navItems}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
