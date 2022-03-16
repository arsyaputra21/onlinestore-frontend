import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Modals = ({
  isShown,
  bookId,
  title,
  price,
  available,
  dateAdded,
  imgUrl,
}) => {
  const router = useRouter();
  return isShown ? (
    <div className="p-4 fixed top-0 left-0 z-20 w-full h-full text-white bg-gray-800 bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
      <div className="flex flex-col md:grid md:gap-4 md:grid-cols-2  gap-1 overflow-hidden border-white border-2 p-3 md:p-4 border-opacity-60 rounded-lg bg-[#252849] bg-opacity-90 backdrop-blur-lg">
        <div className="flex items-center justify-center rounded-md overflow-hidden w-full md:border-2 md:border-indigo-100">
          <Image
            src={imgUrl}
            width={800}
            height={800}
            objectFit="fill"
            alt="book cover"
          />
        </div>
        <div className="flex md:gap-2 flex-col md:self-center">
          <h1 className="font-bold md:text-5xl text-3xl">{title}</h1>
          <p className="text-lg md:text-xl text-[#d60ac9] animate-pulse">
            {available} left
          </p>
          <p className="text-2xl md:text-4xl font-semibold">Rp{price}</p>
          <p className="text-sm md:text-md text-gray-300">
            Date Added : {dateAdded}
          </p>

          {/* <Link href={`/details?id=${bookId}`}> */}
          <button
            onClick={async () => {
              await router.replace(`/details?id=${bookId}`);
              await router.reload();
            }}
            className="my-2 self-stretch bg-indigo-300 hover:bg-purple-200 hover:text-indigo-300 text-gray-300 flex items-center gap-2 justify-center p-2 bg-opacity-60 left-8 z-30 top-8 rounded-md hover:border-purple-100 border-gray-400 border-2 transition-colors ease-in-out duration-300"
          >
            Details <ArrowRightIcon className="w-8 h-8" />
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Modals;
