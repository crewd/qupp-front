import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
