"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#018768] to-[#A0C556] shadow-xl border-b-4 border-[#A0C556]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 no-underline transition-transform duration-500 hover:scale-101"
          >
            <div className="relative">
              <Image
                src={"/lasa-white.webp"}
                width={60}
                height={60}
                alt="Logo LASA - Laboratório de Soluções Ambientais"
                className="shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                Trilha do Conhecimento do LASA
              </h1>
              <p className="text-[10px] sm:text-xs text-white/90 font-medium">
                VIII Semana de CeT • UFRN
              </p>
            </div>
          </Link>
          {/* Navigation (desktop) + mobile toggle */}
          <div className="flex items-center gap-4">
            <nav aria-label="Main navigation" className="hidden md:block">
              <ul className="flex list-none m-0 p-0 gap-2">
                <li>
                  <Link 
                    href="/" 
                    className={`
                      block px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm
                      transition-all duration-200 no-underline
                      ${isActive("/") && pathname === "/" 
                        ? "bg-white text-[#018768] shadow-lg" 
                        : "text-white hover:bg-white/20 hover:shadow-md"
                      }
                    `}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link 
                    href="/eventos" 
                    className={`
                      block px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm
                      transition-all duration-200 no-underline
                      ${isActive("/eventos") 
                        ? "bg-white text-[#018768] shadow-lg" 
                        : "text-white hover:bg-white/20 hover:shadow-md"
                      }
                    `}
                  >
                    Eventos
                  </Link>
                </li>

                <li>
                  <Link 
                    href="/participantes" 
                    className={`
                      block px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm
                      transition-all duration-200 no-underline
                      ${isActive("/participantes") 
                        ? "bg-white text-[#018768] shadow-lg" 
                        : "text-white hover:bg-white/20 hover:shadow-md"
                      }
                    `}
                  >
                    Participantes
                  </Link>
                </li>

                <li>
                  <Link 
                    href="/apoio" 
                    className={`
                      block px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm
                      transition-all duration-200 no-underline
                      ${isActive("/apoio") 
                        ? "bg-white text-[#018768] shadow-lg" 
                        : "text-white hover:bg-white/20 hover:shadow-md"
                      }
                    `}
                  >
                    Apoio
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
              aria-expanded={open ? "true" : "false"}
              className="md:hidden p-2 rounded-md text-white"
            >
              <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white my-1 transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 border-t border-cyan-400`}>
        <nav className="px-4 pb-4">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className={`block px-4 py-3 rounded-lg font-semibold text-white ${isActive("/") && pathname === "/" ? 'bg-white text-blue-900' : ''}`} onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/eventos" className={`block px-4 py-3 rounded-lg font-semibold text-white ${isActive('/eventos') ? 'bg-white text-blue-900' : ''}`} onClick={() => setOpen(false)}>Eventos</Link>
            </li>
            <li>
              <Link href="/participantes" className={`block px-4 py-3 rounded-lg font-semibold text-white ${isActive('/participantes') ? 'bg-white text-blue-900' : ''}`} onClick={() => setOpen(false)}>Participantes</Link>
            </li>
            <li>
              <Link href="/apoio" className={`block px-4 py-3 rounded-lg font-semibold text-white ${isActive('/apoio') ? 'bg-white text-blue-900' : ''}`} onClick={() => setOpen(false)}>Apoio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
