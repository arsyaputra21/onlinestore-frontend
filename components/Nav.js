import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import userAvatar from '../public/images/user.webp';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Context } from '../store/AppContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const Nav = ({ user }) => {
  const router = useRouter();
  const { store, actions } = useContext(Context);

  return (
    <nav>
      <div className="grid grid-rows-2 grid-cols-2 lg:flex lg:gap-0 bg-[#323969] text-white lg:justify-between items-center lg:items-center px-3 py-4 sm:px-10 ">
        <Link href="/">
          <h1 className="text-4xl font-bold cursor-pointer">Zona Buku</h1>
        </Link>

        <div className="row-start-2 col-span-2 flex space-x-10 sm:space-x-32 items-center grow justify-center tracking-widest ">
          <Link href="/">HOME</Link>
          <p>ABOUT</p>
          <p>PRODUCTS</p>
        </div>
        <div className="place-self-end h-12 flex items-center space-x-5">
          {store.token && store.token != '' && store.token != undefined ? (
            <>
              <ShoppingCartIcon className="h-8 w-8" />
              <div
                onClick={() => {
                  router.push('/user/profile');
                }}
                className="flex flex-col cursor-pointer items-center"
              >
                <div className=" w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={
                      store.user.profile_pic
                        ? store.user.profile_pic
                        : userAvatar
                    }
                    objectFit="cover"
                    objectPosition="center"
                    width={50}
                    height={50}
                  />
                </div>
                <p className="text-sm">{store.user.first_name}</p>
              </div>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-yellow-200 rounded-xl shadow-lg p-3 font-bold text-lg md:text-xl text-black">
                Log In
              </button>
            </Link>
          )}
        </div>

        {/* <div className="h-10 w-10 bg-black rounded-full"></div> */}
      </div>
    </nav>
  );
};

export default Nav;
