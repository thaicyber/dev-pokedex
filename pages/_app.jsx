/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import { Provider } from 'react-redux';
import configureStore from '@/redux/store';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import 'react-svg-radar-chart/build/css/index.css';
/* ---------------------- internal ---------------------- */
import AppHead from '@/components/shared/head';
import Layout from '@/components/shared/layout';

/* ------------------------------------------------------ */
/*             Next.js SSR / CSR State Handler            */
/* ------------------------------------------------------ */
const MyApp = ({ Component, pageProps, store }) => (
  <Provider store={store}>
    <AppHead />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
);

/* ------------------------------------------------------ */
/*        Next.js Server-Side Client-Side Rendering       */
/* ------------------------------------------------------ */
// pass ctx to all pages' getInitialProps if any
// use getInitialProps on MyApp make all pages being SSR
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  return { pageProps };
};

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default withRedux(configureStore)(withReduxSaga(MyApp));
