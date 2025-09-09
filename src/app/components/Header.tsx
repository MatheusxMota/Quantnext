"use client"; // Adicione esta diretiva no topo do arquivo

import Link from "next/link";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-quant-blue p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          
          
          <span className="text-xl md:text-2xl font-bold hover:text-gray-200">
            Quant-Tecnologia
          </span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12">
          <Link href="/" className="hover:text-gray-200 transition-colors py-2">
            Home
          </Link>
          <Link
            href="#serviços"
            className="hover:text-gray-200 transition-colors py-2"
          >
            Serviços
          </Link>
          <Link
            href="#APP"
            className="hover:text-gray-200 transition-colors py-2"
          >
            Aplicativo
          </Link>
          <Link
            href="#contato"
            className="hover:text-gray-200 transition-colors py-2"
          >
            Contato
          </Link>
          <Link
            href="/portal"
            className=" transition-colors py-2 bg-quant-blue px-8 rounded-lg"
          >
            Portal
          </Link>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu mobile"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-700 mt-2 py-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4 px-4">
            <Link
              href="/"
              className="hover:text-gray-200 transition-colors py-2 border-b border-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#serviços"
              className="hover:text-gray-200 transition-colors py-2 border-b border-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#APP"
              className="hover:text-gray-200 transition-colors py-2 border-b border-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Aplicativo
            </Link>
            <Link
              href="#contato"
              className="hover:text-gray-200 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <Link
              href="/portal"
              className="text-center hover:text-quant-green transition-colors py-2  bg-quant-blue px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portal
              <span className="text-xs text-gray-200 ml-1"></span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
