import Link from 'next/link';
import { RefreshIcon } from '@heroicons/react/solid';

const loginfailed = () => {
  return (
    <div className="h-screen w-screen bg-[#252849] flex flex-col gap-2 text-white items-center justify-center">
      <h1 className="text-red-200 font-bold text-2xl">Login Gagal</h1>
      <p>Password atau Username yang anda masukkan salah</p>
      <Link href="/login">
        <button className="flex gap-2 items-center rounded-lg border-2 border-red-200 p-2 hover:border-white">
          Coba Lagi <RefreshIcon className="w-6 h-6" />
        </button>
      </Link>
    </div>
  );
};

export default loginfailed;
