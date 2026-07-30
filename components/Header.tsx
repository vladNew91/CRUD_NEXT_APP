import Link from 'next/link';

// Define explicit TypeScript types for the navigation links
interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logoText?: string;
  links?: NavItem[];
}

// Default navigation links if none are provided via props
const defaultLinks: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({ 
  logoText = "Project", 
  links = defaultLinks 
}: HeaderProps) {
  return (
    <header className="w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          {logoText}
        </Link>

        {/* Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}
