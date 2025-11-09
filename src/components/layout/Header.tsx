
'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/branding/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';

const navLinks = [
  { 
    label: 'Products', 
    isDropdown: true, 
    items: [
      { label: 'AI Search', href: '/products/ai-search', description: 'For Renters & Buyers' },
      { label: 'Verify', href: '/products/verify', description: 'For Enterprise & Government' },
      { label: 'Intelligence', href: '/products/intelligence', description: 'For Developers & Analysts' },
    ]
  },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/trust-safety', label: 'Trust & Safety' },
  { 
    label: 'Solutions', 
    isDropdown: true, 
    items: [
      { label: 'For Renters', href: '/renters', description: 'Find your next home, stress-free.' },
      { label: 'For Landlords', href: '/landlords', description: 'Access verified tenants, faster.' },
      { label: 'For Developers', href: '/solutions/developers', description: 'Build with our robust APIs.' },
      { label: 'For Government', href: '/solutions/government', description: 'Digitize and de-risk public services.' },
      { label: 'For Enterprises', href: '/solutions/enterprises', description: 'Automate compliance and risk.' },
    ]
  },
  { 
    label: 'Company', 
    isDropdown: true, 
    items: [
      { label: 'About Us', href: '/about', description: 'Our mission and vision.' },
      { label: 'Careers', href: '/company/careers', description: 'Join our mission.' },
      { label: 'Press', href: '/company/press', description: 'Media kits and releases.' },
      { label: 'Contact', href: '/contact', description: 'Get in touch with our team.' },
      { label: 'Partners', href: '/partners', description: 'Partner with Propabridge.' },
    ]
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // This would come from a real auth context

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <div className="mb-8">
                   <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Logo />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    link.isDropdown ? (
                      <div key={link.label}>
                        <p className="text-lg font-medium text-foreground mb-2">{link.label}</p>
                        {link.items?.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block pl-4 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href as string}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                  <div className="flex flex-col space-y-3 pt-6">
                    {isAuthenticated ? (
                       <Button href="/dashboard" size="lg">Dashboard</Button>
                    ) : (
                      <>
                        <Button href="/login" variant="secondary" size="lg">Log In</Button>
                        <Button href="/register" size="lg">Sign Up</Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            link.isDropdown ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger className="flex items-center gap-1 transition-colors text-muted-foreground hover:text-primary focus:outline-none">
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.items?.map(item => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href}>
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
               <Link
                key={link.href}
                href={link.href as string}
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
             <Button href="/dashboard">Dashboard</Button>
          ) : (
            <>
              <Button href="/login" variant="ghost">
                Log In
              </Button>
              <Button href="/register">
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
