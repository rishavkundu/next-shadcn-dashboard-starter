'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/nerval-icon-logo.svg"
        alt="Nerval Logo"
        width={40}
        height={40}
        className="h-10 w-10"
      />
      <span className="text-2xl font-light">nerval</span>
    </Link>
  );
}
