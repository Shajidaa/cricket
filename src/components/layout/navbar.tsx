"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// Updated data structure with children
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

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-red-600 bg-black/95 backdrop-blur px-4">
      <div className="container mx-auto flex h-20 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-black italic tracking-tighter text-white shrink-0">
          RENEGADES<span className="text-red-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className={cn(
                        "bg-transparent text-white hover:border-b-2 hover:border-red-600 font-bold",
                        pathname.startsWith(item.href) && "border-b-2 border-red-600 rounded-none"
                      )}>
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-64 gap-1 p-3 bg-white border border-gray-200 shadow-lg rounded-md">
                          <li className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mb-1">
                            Team Information
                          </li>
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link href={child.href} passHref>
                                <NavigationMenuLink asChild className={cn(
                                  "block select-none rounded-sm px-3 py-2.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-gray-900 text-gray-700 font-medium",
                                  pathname === child.href && "bg-red-50 text-red-600 font-semibold"
                                )}>
                                  {child.name}
                                </NavigationMenuLink>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} passHref>
                      <NavigationMenuLink asChild className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent hover:text-white text-white border-b-2 border-transparent hover:border-b-2 hover:border-red-600 rounded-none  font-bold",
                        pathname === item.href && "border-b-2 border-red-600 rounded-none text-white"
                      )}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-none uppercase px-6 ml-4">
            TICKETS
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <Button className="bg-red-600 h-8 px-3 text-xs font-bold rounded-none text-white">TICKETS</Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l-4 border-red-600 p-6 text-white overflow-y-auto">
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