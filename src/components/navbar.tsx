'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

// Data structure supporting dropdowns
const navItems = [
    { name: 'Home', href: '/' },
    { 
        name: 'Club', 
        href: '#', 
        children: [
            { name: 'Players', href: '/player' },
            { name: 'Matches', href: '/matches' },
            { name: 'Coaches', href: '/team' },
            { name: 'Club Partners', href: '/partners' },
            { name: 'Blaze & Amber', href: '/blaze-amber' },
            { name: 'Stay in the know', href: '/newsletter' },
            { name: 'Contact', href: '/contact' },
        ] 
    },
    { name: 'News', href: '/news' },
    { name: 'Matches', href: '/matches' },
    { name: 'Member', href: '/membership' },
];

function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClubOpen, setIsClubOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 1. Close dropdown when clicking anywhere outside the menu
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsClubOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

   

    return (
        <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center group">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">C</span>
                                </div>
                                <span className="text-xl text-white font-bold group-hover:text-red-500 transition-colors duration-200">
                                    CricketHub
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const hasChildren = !!item.children;
                            const isActive = pathname === item.href || (item.children?.some(child => pathname === child.href));

                            if (hasChildren) {
                                return (
                                    <div key={item.name} className="relative" ref={dropdownRef}>
                                        <button
                                            onClick={() => setIsClubOpen(!isClubOpen)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                                                isClubOpen || isActive ? 'text-white bg-zinc-900' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                                            }`}
                                        >
                                            {item.name}
                                            <svg className={`w-4 h-4 transition-transform duration-200 ${isClubOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* THE DROPDOWN (Shown on Click) */}
                                        {isClubOpen && (
                                            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-2xl py-0 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                                <div className="h-1 bg-red-600 w-full" /> {/* Top Accent Bar */}
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 border-l-4 border-transparent hover:border-red-600 transition-all"
                                                        onClick={() => setIsClubOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                        isActive ? 'text-red-500 bg-zinc-900/50' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-zinc-400 hover:text-white"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE NAVIGATION DRAWER */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[500px] border-t border-zinc-800' : 'max-h-0'}`}>
                <div className="px-4 py-4 space-y-1 bg-zinc-950">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            {item.children ? (
                                <>
                                    <div className="px-3 py-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">{item.name}</div>
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            className="block px-6 py-2 text-zinc-300 hover:text-red-500 text-sm"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="block px-3 py-2 text-zinc-300 hover:text-white font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;