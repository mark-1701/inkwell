'use client';

import { useRouter } from 'next/navigation';
import { GoArrowLeft } from 'react-icons/go';

export const BackToListButton = () => {
  const router = useRouter();

  return (
    <button
      // href={'/dashboard/posts'}
      className="mb-6 flex w-min cursor-pointer items-center gap-2 text-blue-500
        hover:underline"
      onClick={() => router.back()}
    >
      <GoArrowLeft size={15} /> Regresar
    </button>
  );
};
