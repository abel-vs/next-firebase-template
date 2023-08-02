"use client";
import { UserAuth } from "@/app/auth-context";
import {
  SquaresPlusIcon,
  ChartBarSquareIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
  CalendarDaysIcon,
  RectangleGroupIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { ReactNode } from "react";

interface StylizedButtonProps {
  onClick: () => void;
  children: ReactNode;
}

interface StylizedLinkProps {
  href: string;
  children: ReactNode;
}

const StylizedButton = ({ onClick, children }: StylizedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center rounded-md p-2 hover:bg-stone-200 hover:text-stone-800"
    >
      {children}
    </button>
  );
};

const StylizedLink = ({ href, children }: StylizedLinkProps) => {
  return (
    <li className="mb-2">
      <Link
        href={href}
        className="flex w-full items-center rounded-md p-2 hover:bg-stone-200 hover:text-stone-800"
      >
        {children}
      </Link>
    </li>
  );
};

export default function Sidebar() {
  const { logOut } = UserAuth();

  return (
    <nav className="z-20 min-h-screen w-52 bg-stone-50 px-4 py-6 font-medium text-stone-400 shadow-xl">
      <ul className="flex h-full flex-col justify-between">
        <Link
          href="/"
          className="flex w-full justify-center pb-6 text-2xl font-black text-stone-800"
        >
          Template
        </Link>
        <div>
          <StylizedLink href="/">
            <RectangleGroupIcon className="mr-2 h-5 w-5" />
            Page 1
          </StylizedLink>
          <StylizedLink href="/">
            <CalendarDaysIcon className="mr-2 h-5 w-5" />
            Page 2
          </StylizedLink>
          <StylizedLink href="/">
            <DocumentTextIcon className="mr-2 h-5 w-5" />
            Page 3
          </StylizedLink>
          <li className="my-4">
            <Link href="/">
              <button className="flex w-full transform items-center rounded-md bg-stone-800 px-4 py-2  text-white transition duration-200 ease-in hover:-translate-y-1 hover:drop-shadow-lg">
                <SquaresPlusIcon className="mr-2 h-5 w-5" />
                Action
              </button>
            </Link>
          </li>
        </div>
        <div>
          <StylizedLink href="/settings">
            <CogIcon className="mr-2 h-5 w-5" />
            Settings
          </StylizedLink>
          <StylizedButton onClick={logOut}>
            <ArrowLeftOnRectangleIcon className="mr-2 h-5 w-5" />
            Log out
          </StylizedButton>
        </div>
      </ul>
    </nav>
  );
}
