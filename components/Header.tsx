"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiOutlineHome } from "react-icons/hi2";

interface HeaderProps {
  appName?: string;
}

export const Header = ({ appName }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
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

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={cn(
              "-m-2.5 inline-flex cursor-pointer items-center justify-center",
              "rounded-md p-2.5 text-gray-400 transition-colors hover:text-white",
            )}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/">
            <span title="Home">
              <HiOutlineHome className="size-6" />
            </span>
          </Link>

          <Link href="/posts" className="font-semibold text-white">
            Posts
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login">Login</Link>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto",
            "bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10",
          )}
        >
          <div className="flex items-center justify-between">
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

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 cursor-pointer rounded-md p-2.5 text-gray-400 transition-colors hover:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-4">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>

                <Link
                  href="/posts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  onClick={toggleMobileMenu}
                >
                  Posts
                </Link>
              </div>

              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  onClick={toggleMobileMenu}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
