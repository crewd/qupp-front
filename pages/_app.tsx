import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userState } from '../recoil/user';
import { tokenStore } from '../util/token';
import { useEffect } from 'react';

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
