import bookCover from '../public/images/book.jpeg';
import Image from 'next/image';
import { useState } from 'react';
import Modals from './Modals';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const MiniThumbnail = ({
  bookId,
  imgUrl,
  title,
  price,
  dateAdded,
  available,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="grid hover:scale-110 items-center border group hover:border-opacity-100 cursor-pointer border-white border-opacity-25 rounded-lg text-white p-3 transition-all ease-in-out duration-300"
      >
        <div className="overflow-hidden rounded-md">
          <Image
            src={imgUrl}
            width={800}
            height={800}
            alt="book cover"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col">
          {/* <h2
            className={`${
              title.length > 15 && 'truncate'
            } transition-all ease-in-out duration-300 font-bold text-lg md:text-xl`}
          >
            {title}
          </h2> */}
          <p className="font-thin text-md md:text-lg py-1 opacity-90 group-hover:opacity-100 ">
            Rp{price}
          </p>
        </div>
      </div>
      {showModal && (
        <button
          className="fixed bg-gray-900 text-gray-300 flex items-center justify-center p-2 bg-opacity-50 left-8 z-30 top-8 rounded-md group border-2 border-gray-400 hover:border-white hover:text-indigo-300"
          onClick={() => setShowModal(false)}
        >
          <ArrowLeftIcon className="h-8 w-8 " /> Back
        </button>
      )}

      <Modals
        isShown={showModal}
        title={title}
        imgUrl={imgUrl}
        dateAdded={dateAdded}
        available={available}
        price={price}
        bookId={bookId}
      ></Modals>
    </>
  );
};

export default MiniThumbnail;
