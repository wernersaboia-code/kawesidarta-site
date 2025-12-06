'use client';

import { useState } from 'react';
import { Menu, X, Heart, Phone } from 'lucide-react';
import Link from 'next/link';

export default function HeaderKawê() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Agendar', href: '#agendar' },
    { label: 'Terapias', href: '#terapias' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Kawê Sidarta
              </h1>
              <p className="text-xs text-gray-500">Massoterapeuta Holístico</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-gray-700 hover:text-purple-600 transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Botão WhatsApp */}
            <a
              href="https://wa.me/556196084063"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:shadow-lg transition-shadow flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (61) 9608-4063
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-6 border-t border-purple-100 animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-purple-600 py-3 px-4 hover:bg-purple-50 rounded-xl transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-purple-100">
                <a
                  href="https://wa.me/556196084063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp: (61) 9608-4063
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}