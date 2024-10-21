"use client";

import type { NextPage } from 'next';
import Head from 'next/head';
import ProviderList from '../features/providers/components/ProviderList';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Medical Providers Directory</title>
        <meta name="description" content="View and search medical providers by state" />
      </Head>

      <main>
        <ProviderList />
      </main>
    </>
  );
};

export default Home;