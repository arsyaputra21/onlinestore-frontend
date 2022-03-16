import '../styles/globals.css';
import injectContext from '../store/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default injectContext(MyApp);
