import Link from "next/link";

interface FooterProps {
  companyName?: string;
}

export default function Footer({ companyName = "Project" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {currentYear} {companyName}. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <Link
            href="/privacy"
            prefetch={false}
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            prefetch={false}
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            prefetch={false}
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
