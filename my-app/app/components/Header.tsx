import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <ul className="flex space-x-8">
                    <li>
                        <Link className="hover:text-gray-400" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-400" href="/about">About</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-400" href="/services">Service</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-400" href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
