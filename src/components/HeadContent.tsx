import { METADATA } from "@/config";
import Head from 'next/head';
import React from 'react'
interface HeadContentProps {
  title?: string;
  description?: string;
}
const HeadContent = ({ title, description }: HeadContentProps) => {
  return (
    <Head>
      <title>{title || METADATA.title}</title>
      <meta name="description" content={description || METADATA.description} />
    </Head>
  );
};

export default HeadContent
