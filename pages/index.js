import Image from 'next/image';
import localFont from 'next/font/local';
import GhostContentAPI from '@tryghost/content-api';
// import { getPosts } from '../lib/posts';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://benitos-blog.ghost.io',
  key: '22444f78447824223cefc48062',
  version: 'v5.0',
});
// const IndexPage = (props) => (
//   <ul>
//     {props.posts.map(post => (
//       <li key={post.id}>{post.title}</li>
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

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}
export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/logos/Solarah_Logo.jpeg"
          alt="Solarah Speaks"
          width={180}
          height={38}
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Solarah Speaks Coming Soon...🔮{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold"></code>
          </li>
          <li>Solarah's Substack is Migrating to Ghost.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.paypal.com/paypalme/tanyatarot19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Donate now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.paypal.com/paypalme/tanyatarot19"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Session
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.paypal.com/paypalme/tanyatarot19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Book a Session
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://app.cg/c/kR9ybbED7Z/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Community
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          src="https://www.youtube.com/channel/UCYLsAm9BC45uZ5_lb1YenVw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to solarahspeaks.info →
        </a>
      </footer>
    </div>
  );
}
