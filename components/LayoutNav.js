import Nav from './Nav.js';
import Head from 'next/head';

const LayoutNav = (props) => {
  return (
    <div className="bg-[#252849]">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav user={props.user} />
      {props.children}
    </div>
  );
};

export default LayoutNav;
