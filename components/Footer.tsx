import Link from "next/link";

interface FooterProps {
  appName?: string;
}

export default function Footer({ appName }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-gray-800 bg-gray-900 py-6 text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm">
          &copy; {currentYear} {appName}. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <Link
            href="/#"
            prefetch={false}
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/#"
            prefetch={false}
            className="transition-colors hover:text-white"
          >
            Terms of Service
          </Link>

          <Link
            href="/contact"
            prefetch={false}
            className="transition-colors hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
