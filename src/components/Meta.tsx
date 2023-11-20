import Head from "next/head";
import React from "react";
import { METADATA } from "../config";

const Meta = () => {
  return (
    <Head>
      <title>{METADATA.title}</title>
      <meta name="description" content={METADATA.description} />
    </Head>
  );
};

export default Meta;
