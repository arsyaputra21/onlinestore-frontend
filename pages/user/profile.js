import Image from 'next/image';
import LayoutNav from '../../components/LayoutNav';
import userAvatar from '../../public/images/user.webp';
import { Context } from '../../store/AppContext';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { version } from 'os';

const profile = () => {
  const router = useRouter();
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    formData.append('name', store.user.email);

    const opts = {
      method: 'POST',
      body: formData,
    };
    const res = await fetch(
      'https://api.imgbb.com/1/upload?key=bd90638c13e2462dadcae63f4e65fe56',
      opts
    );
    const data = await res.json();
    console.log(data.data.url);
    console.log(store.user.profile_pic);
    await actions.updateProfilePic(data.data.url);
    router.reload();
  };

  const handleUpdate = () => {
    actions.updateProfile(firstName, lastName, phone, newPassword);
    router.reload();
  };
  return (
    <LayoutNav>
      {store.token && store.token != '' && store.token != undefined ? (
        <>
          {' '}
          <div className="flex p-4 justify-between items-center">
            <button
              onClick={() => {
                router.back();
              }}
              className="text-white flex gap-2 items-center font-bold"
            >
              <ArrowLeftIcon className="w-6 h-6" />
              Back
            </button>
            <button
              onClick={() => {
                actions.logout();
                router.push('/');
              }}
              className="bg-red-500 text-white font-bold p-3 rounded-xl shadow-md shadow-zinc-700"
            >
              Log Out
            </button>
          </div>
          <div className="text-white p-3 py-5 md:grid md:grid-cols-2 md:gap-2">
            <div className="grid space-y-5 md:space-y-0 md:grid-rows-5 md:grid-cols-1 items-center justify-center">
              <div className="place-self-center md:row-span-3 w-11/12 md:w-6/12 rounded-full overflow-hidden">
                <Image
                  src={
                    store.user.profile_pic ? store.user.profile_pic : userAvatar
                  }
                  height={200}
                  layout="responsive"
                  width={200}
                />
              </div>
              <div className="flex justify-between items-center border-white border-opacity-20 border-2 p-2 rounded-lg md:place-self-center">
                <input
                  type="file"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
                <button
                  className="bg-blue-200 rounded-md p-2 text-black"
                  onClick={uploadImage}
                >
                  Upload
                </button>
              </div>
              <div
                className="md:place-self-center
           flex flex-col p-4 md:p-2"
              >
                <p className="font-bold">
                  {store.user.first_name + ' ' + store.user.last_name}
                </p>
                <p>Email : {store.user.email}</p>
                <p>Phone : {store.user.no_telp}</p>
              </div>
            </div>
            <div className="flex flex-col md:justify-around space-y-4 md:pr-4 ">
              <div className="flex justify-center flex-col">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  placeholder="New First Name"
                  name="first_name"
                  className="border-black text-black w-100 border-2 rounded-xl p-3"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-center flex-col">
                <label htmlFor="name">Last Name</label>
                <input
                  type="text"
                  placeholder="New Last Name"
                  name="last_name"
                  className="border-black text-black w-100 border-2 rounded-xl p-3"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-center flex-col">
                <label htmlFor="name">Phone</label>
                <input
                  type="tel"
                  maxLength={12}
                  placeholder="New Phone Number"
                  name="no_telp"
                  className="border-black text-black w-100 border-2 rounded-xl p-3"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              {/* <div className="flex justify-center flex-col">
                <label htmlFor="alamat">Alamat</label>
                <input
                  type="text"
                  placeholder="Alamat"
                  name="alamat"
                  className="border-black w-100 border-2 rounded-xl p-3"
                />
              </div> */}
              <div className="flex justify-center flex-col">
                <label htmlFor="umur">New Password</label>
                <input
                  type="text"
                  placeholder="New Password"
                  name="password"
                  className="border-black text-black w-100 border-2 rounded-xl p-3"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </div>
              <button
                disabled={
                  firstName.length > 0 ||
                  lastName.length > 0 ||
                  phone.length > 0 ||
                  newPassword.length > 0
                    ? false
                    : true
                }
                tyoe="submit"
                className="bg-green-400 rounded-xl p-3 text-white font-bold disabled:bg-green-800 disabled:opacity-25"
                onClick={() => {
                  handleUpdate();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-xl font-bold text-red-300">
            Unavailable, please login first!
          </h1>
        </div>
      )}
    </LayoutNav>
  );
};

export default profile;
