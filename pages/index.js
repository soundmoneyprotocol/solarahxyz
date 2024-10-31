import Image from 'next/image';
import localFont from 'next/font/local';
import Script from 'next/script';
import React from 'react';
import { useEffect } from 'react';

import Head from 'next/head';
import GhostEmbed from '../components/ghost_embed';
import GhostContentAPI from '@tryghost/content-api';
// import { getPosts } from '../lib/posts';
import { ThirdwebProvider } from 'thirdweb/react';

export async function Main() {
  return (
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  );
}
// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://solarah-speaks.ghost.io',
  key: 'f10c2c09d9fd357d5244a19c5c',
  version: 'v5.0',
});
//import template.html for BTCPay/Blockn
// function MyComponent() {
// const response = await fetch('/template.html');
// useEffect(() => {
//   async function fetchHtml() {
//     try {
//       const response = await fetch('index.html');
//       const html = await response.text();
//       setHtmlContent(html);
//     } catch (error) {
//       console.error('Error fetching HTML file:', error);
//     }
//   }

//   fetchHtml();
// }, []);

// return (
//   <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
// );
// }
// const IndexPage = (props) => (
//   <ul>
//     {props.posts.map((post) => (
//       <li key={post.id}>
//         <Link href={`/${post.slug}`}>
//           <a>{post.title}</a>
//         </Link>
//       </li>
//     ))}
//   </ul>
// );
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// const posts = await getPosts();

// posts.map(post => {
//   const options = {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   };

//   post.dateFormatted = new Intl.DateTimeFormat('en-US', options)
//     .format(new Date(post.published_at));
// });
// export async function getPosts() {
//   return await api.posts
//     .browse({
//       include: 'tags,authors',
//       limit: 'all',
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

// export async function getAuthor(authorSlug) {
//   return await api.authors
//     .read({
//       slug: authorSlug,
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js';
    script.async = true;
    script.setAttribute('data-background-color', '#ffffff');
    script.setAttribute('data-text-color', '#000000');
    script.setAttribute('data-button-color', '#fac900');
    script.setAttribute('data-button-text-color', '#000000');
    script.setAttribute('data-title', 'Solarah Speaks');
    script.setAttribute(
      'data-description',
      'Welcome To The Home Of Solarah Speaks Building The Solarah Foundation: Template for a New Earth Platform'
    );
    script.setAttribute(
      'data-icon',
      'https://blog.solarah.xyz/content/images/size/w192h192/size/w256h256/2024/10/The-poetry-of-us-lives-in-my-DNA.-Strands-of-nostalgia--double-helixed-and-locked.-Our-eyes-first-met-and-words-finally-took-form.-Memories-of-verses--all-mine--yet-not-my-own.-I-live-now-in-stanz-1.png'
    );
    script.setAttribute('data-site', 'https://blog.solarah.xyz/');
    script.setAttribute('data-locale', 'en');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on component unmount
    };
  }, []);

  return <div style={{ height: '100vh' }}></div>;
}

export default Home;
