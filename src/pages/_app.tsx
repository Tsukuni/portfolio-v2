import '../../styles/globals.scss';
import { Layout, Head } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
