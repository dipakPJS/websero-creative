"use client";

import Link, { LinkProps } from "next/link";
import React, { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import Preloader from "../Preloader.component";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    setLoading(true); // Show Preloader
    await sleep(1000); // Simulate loading time
    router.push(href); // Navigate to the new page
    setLoading(false); // Hide Preloader after navigation
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[99999]"> {/* Ensure Preloader is on top */}
          <Preloader />
        </div>
      )}
      <Link
        onClick={handleTransition}
        href={href}
        className={className}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};
