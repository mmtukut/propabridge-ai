import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/branding/Logo';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
];

const footerLinks = {
  product: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'For Renters', href: '/renters' },
    { label: 'For Landlords', href: '/landlords' },
    { label: 'Trust & Safety', href: '/trust-safety' },
    { label: 'Pricing', href: '/landlords#pricing' },
  ],
  resources: [
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Guides', href: '/resources/guides' },
    { label: 'FAQs', href: '/resources/faq' },
    { label: 'Press Kit', href: '#' },
    { label: 'API Docs', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Team', href: '/about#team' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'Support', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container max-w-7xl py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              Find Your Home in Minutes, Not Weeks.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-gray-500"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2-4: Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Propabridge by Zippatek Digital Ltd. RC: 8527315</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-500">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-500">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-500">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
