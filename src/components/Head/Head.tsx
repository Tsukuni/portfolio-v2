import React from 'react';
import NextHead from 'next/head';

export default function Head() {
  return (
    <NextHead>
      <title>tsukuni kenta</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet" />
      <meta property ="og:locale" content="ja_JP" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="自己紹介ヨシッ" />
      <meta property="og:url" content="https://tsukuni.net" />
      <meta property="og:image" content="https://tsukuni.net/icon.jpg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content="自己紹介ヨシッ" />
      <meta name="twitter:site" content="@tteooiyry" />
      <meta name="twitter:image" content="https://tsukuni.net/icon.jpg" />
      <meta name="twitter:creator" content="@tteooiyry" />
    </NextHead>
  )
};
