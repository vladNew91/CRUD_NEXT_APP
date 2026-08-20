import Link from "next/link";
import Image from "next/image";
import { PopoverGroup } from "@headlessui/react";
import { HiOutlineHome } from "react-icons/hi2";
import { MobileMenu } from "./MobileMenu";
import { checkUserSession } from "@/utils/utils";
import { SignOutGitHubButton } from "../components";

interface HeaderProps {
  appName?: string;
}

export const Header = async ({ appName }: HeaderProps) => {
  const isSignedIn = await checkUserSession();

  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{appName}</span>
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
          </Link>
        </div>

        {/* Dynamic Client Menu for Mobile */}
        <MobileMenu appName={appName} isSignedIn={!!isSignedIn} />

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/">
            <span title="Home">
              <HiOutlineHome className="size-6 text-white" />
            </span>
          </Link>

          <Link href="/posts" className="font-semibold text-white">
            Posts
          </Link>
        </PopoverGroup>

        {/* Desktop Action */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!isSignedIn ? (
            <Link href="/signin" className="font-semibold text-white">
              Sign in
            </Link>
          ) : (
            <SignOutGitHubButton />
          )}
        </div>
      </nav>
    </header>
  );
};
