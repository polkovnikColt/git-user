import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from '../apollo/client/client';
import {Layout} from 'antd';
import {Navbar} from '../components/navbar/Navbar';
import 'antd/dist/antd.compact.min.css';
import '../styles/global.styles.scss';

export default function MyApp({Component, pageProps}) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
