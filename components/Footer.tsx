import Link from 'next/link';

// Define explicit TypeScript types for footer navigation links
interface FooterItem {
  label: string;
  href: string;
}

interface FooterProps {
  companyName?: string;
  links?: FooterItem[];
}

// Default footer links if none are provided via props
const defaultLinks: FooterItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Support', href: '/support' },
];

export default function Footer({ 
  companyName = "Project", 
  links = defaultLinks 
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex flex-col sm:flex-row items-center justify-between gap-4 py-4 sm:py-0">
        
        {/* Copyright Notice */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {currentYear} {companyName}. All rights reserved.
        </p>

        {/* Footer Navigation */}
        <nav aria-label="Footer Navigation">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </footer>
  );
}
