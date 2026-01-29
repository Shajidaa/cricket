"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "HOME", href: "/" },
  {
    name: "TEAM",
    href: "/team",
    children: [
      { name: "First Team Squad", href: "/team/players" },
      { name: "Management & Staff", href: "/team/staff" },
      { name: "Academy", href: "/team/academy" },
      { name: "Club History", href: "/team/history" },
    ]
  },
  { name: "MATCHES", href: "/matches" },
  { name: "NEWS", href: "/news" },
  { name: "MEMBERSHIP", href: "/membership" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isTeamOpen, setIsTeamOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-red-600 bg-black/95 backdrop-blur px-4">
      <div className="container mx-auto flex h-20 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-black italic tracking-tighter text-white shrink-0">
          RENEGADES<span className="text-red-600">.</span>
        </Link>

        {/* Desktop Navigation - SIMPLE AND WORKING */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative" 
                 onMouseEnter={() => item.children && setIsTeamOpen(true)}
                 onMouseLeave={() => item.children && setIsTeamOpen(false)}>
              
              {item.children ? (
                <>
                  <button
                    className={cn(
                      "font-bold uppercase text-white hover:text-red-600 transition-colors",
                      pathname.startsWith(item.href) && "text-red-600"
                    )}
                  >
                    {item.name}
                  </button>
                  
                  {/* Dropdown */}
                  {isTeamOpen && (
                    <div className="absolute top-full left-0 w-64 bg-black border-2 border-red-600 mt-2 shadow-lg z-50">
                      <div className="p-4">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-800 pb-2 mb-3">
                          Team Information
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block py-2.5 px-3 text-sm font-medium transition-colors hover:bg-red-600 hover:text-white rounded",
                              pathname === child.href ? "text-red-400 bg-gray-900" : "text-gray-300"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "font-bold uppercase text-white hover:text-red-600 transition-colors",
                    pathname === item.href && "text-red-600 border-b-2 border-red-600"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-none uppercase px-8 py-2">
            TICKETS
          </Button>
        </div>

        {/* Mobile Navigation (keep your existing mobile code) */}
        <div className="lg:hidden flex items-center gap-4">
          <Button className="bg-red-600 h-8 px-3 text-xs font-bold rounded-none text-white">TICKETS</Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l-4 border-red-600 p-6 text-white">
              <SheetHeader>
                <SheetTitle className="text-left text-white font-black italic text-2xl">MENU</SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-4 mt-10">
                {navItems.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    {item.children ? (
                      <div className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-white/70 uppercase tracking-wide">Team Information</span>
                        <div className="pl-4 flex flex-col gap-2 border-l-2 border-white/20 ml-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={cn(
                                "text-sm font-medium transition-colors py-1",
                                pathname === child.href ? "text-red-400" : "text-white/90"
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "text-xl font-bold transition-colors py-2",
                          pathname === item.href ? "text-red-600 border-b-2 border-red-600 w-fit" : "text-white"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <hr className="border-white/10 my-4" />
                <Button className="bg-red-600 w-full font-bold py-6 text-lg rounded-none text-white">
                  BUY TICKETS
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  )
}