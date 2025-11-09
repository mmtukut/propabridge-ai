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
    { label: 'AI Search', href: '/products/ai-search' },
    { label: 'Verify', href: '/products/verify' },
    { label: 'Intelligence', href: '/products/intelligence' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Trust & Safety', href: '/trust-safety' },
  ],
  solutions: [
    { label: 'For Renters', href: '/renters' },
    { label: 'For Landlords', href: '/landlords' },
    { label: 'For Developers', href: '/solutions/developers' },
    { label: 'For Government', href: '/solutions/government' },
    { label: 'For Enterprises', href: '/solutions/enterprises' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/company/careers' },
    { label: 'Press', href: '/company/press' },
    { label: 'Contact', href: '/contact' },
    { label: 'Partners', href: '/partners' },
  ],
  resources: [
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Guides', href: '/resources/guides' },
    { label: 'FAQs', href: '/resources/faq' },
    { label: 'API Docs', href: '/technology/api-docs' },
    { label: 'Case Studies', href: '/insights/case-studies' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container max-w-7xl py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building Africa's Infrastructure for Trust in Property.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2-5: Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 col-span-1 lg:col-span-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-base text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Solutions
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-base text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-base text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-base text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Propabridge by Zippatek Digital Ltd. RC: 8527315</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/legal/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
