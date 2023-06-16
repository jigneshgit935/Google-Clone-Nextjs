import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbGridDots } from 'react-icons/tb';
const Header: React.FC = () => {
  const url: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Eo_circle_purple_letter-j.svg/1024px-Eo_circle_purple_letter-j.svg.png';

  return (
    <div className="flex justify-end pr-4 pt-3 space-x-4 items-center">
      <Link
        href="https://mail.google.com"
        target="_blank"
        className="text-sm hover:underline cursor-pointer"
      >
        Gmail
      </Link>
      <Link
        href="https://images.google.com"
        target="_blank"
        className="text-sm hover:underline cursor-pointer"
      >
        Images
      </Link>
      <TbGridDots className="text-4xl hover:bg-gray-200 p-2 rounded-full" />
      <Image src={url} alt="user-name" width={30} height={30} />
    </div>
  );
};

export default Header;
