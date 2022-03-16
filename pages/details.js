import { useRouter } from 'next/router';

import Image from 'next/image';
import MiniThumbnail from '../components/MiniThumbnail';
import LayoutNav from '../components/LayoutNav';

const Details = (props) => {
  const otherBooksData = props.resOther;
  const bookDetails = props.resDetail[0];

  return (
    <LayoutNav user>
      <div className="p-4 md:grid md:grid-cols-2 row-span-2 md:gap-2 lg:gap-4 items-center">
        <div className="rounded-lg shadow-xl overflow-hidden ">
          <Image
            src={bookDetails.image_product}
            width={800}
            height={800}
            objectFit="fill"
            layout="responsive"
            alt="book cover"
          />
        </div>
        <div className="self-stretch space-y-3 md:space-y-0 md:grid md:items-center p-2 text-white rounded-lg md:border-2 md:border-purple-200 md:border-opacity-10">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold text-yellow-200">
              {bookDetails.nama}
            </h1>
            <p className="text-sm text-gray-300">
              Date Added : {bookDetails.tgl_input}
            </p>
          </div>
          <div className="">
            <p className="text-sm md:text-md overflow-scroll max-h-60 scrollbar-hide lg:text-xl">
              {bookDetails.deskripsi}
            </p>
          </div>
          <div>
            <p>Harga: </p>
            <p className="font-semibold text-2xl md:text-3xl">
              Rp{bookDetails.harga}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center justify-center">
            <button className="font-bold border-2 border-purple-400 hover:border-purple-600 rounded-lg p-2 text-purple-300 hover:text-purple-500 md:text-lg">
              Beli Sekarang
            </button>
            <button className="border-2 border-purple-200 rounded-lg p-2 text-purple-200 hover:text-white md:text-lg">
              Masukkan Keranjang
            </button>
          </div>
        </div>
        <div className="flex scrollbar-hide gap-3 p-3 col-span-2 overflow-y-scroll">
          {otherBooksData.map((book) => (
            <MiniThumbnail
              key={book.productID}
              bookId={book.productID}
              imgUrl={book.image_product}
              title={book.nama}
              price={book.harga}
            />
          ))}
        </div>
      </div>
    </LayoutNav>
  );
};

export default Details;

export async function getServerSideProps(context) {
  const [requestDetail, requestOther] = await Promise.all([
    fetch(`http://localhost:5000/details?id=${context.query.id}`),
    fetch(`http://localhost:5000/books`),
  ]);
  const [resDetail, resOther] = await Promise.all([
    requestDetail.json(),
    requestOther.json(),
  ]);

  return { props: { resDetail, resOther } };
}
