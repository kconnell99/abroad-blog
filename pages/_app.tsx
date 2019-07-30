import App, { Container } from "next/app";
import Head from 'next/head';
import React from 'react';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: {Component: any, ctx: any}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Churros y Charlas</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Container>
            <Component {...pageProps} />
        </Container>
      </>
    );
  }
}