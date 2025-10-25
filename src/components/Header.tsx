"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 shadow-xl border-b-4 border-cyan-400">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 no-underline transition-transform duration-500 hover:scale-101"
          >
            <div className="relative">
              <Image
                src={"/logo.webp"}
                width={60}
                height={60}
                alt="Logo Oficial da Década dos Oceanos do Rio Grande do Norte"
                className="rounded-full shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                Década dos Oceanos
              </h1>
              <p className="text-xs text-cyan-200 font-medium">
                2021-2030 • UFRN
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav aria-label="Main navigation">
            <ul className="flex list-none m-0 p-0 gap-2">
              <li>
                <Link 
                  href="/" 
                  className={`
                    block px-6 py-3 rounded-lg font-semibold text-sm
                    transition-all duration-200 no-underline
                    ${isActive("/") && pathname === "/" 
                      ? "bg-white text-blue-900 shadow-lg" 
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
                    block px-6 py-3 rounded-lg font-semibold text-sm
                    transition-all duration-200 no-underline
                    ${isActive("/eventos") 
                      ? "bg-white text-blue-900 shadow-lg" 
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
                    block px-6 py-3 rounded-lg font-semibold text-sm
                    transition-all duration-200 no-underline
                    ${isActive("/participantes") 
                      ? "bg-white text-blue-900 shadow-lg" 
                      : "text-white hover:bg-white/20 hover:shadow-md"
                    }
                  `}
                >
                  Participantes
                </Link>
              </li>

              <li>
                <Link 
                  href="/referencias" 
                  className={`
                    block px-6 py-3 rounded-lg font-semibold text-sm
                    transition-all duration-200 no-underline
                    ${isActive("/referencias") 
                      ? "bg-white text-blue-900 shadow-lg" 
                      : "text-white hover:bg-white/20 hover:shadow-md"
                    }
                  `}
                >
                  Referências
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
