import Image from 'next/image';
import localFont from 'next/font/local';
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
          <li>
            Solarah's Substack is Migrating to Ghost👉 📓 If you want to
            Subscribe to Solarah Speaks, please
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              src=""
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://blog.solarah.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/logos/Solarah_Blue.jpeg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Click Link to visit blog.solarah.xyz
            </a>
          </li>

          <li>
            The new earth platform will not be live streamed... it will be
            channeled ✨🌚 Solarah Speaks Tarot-astrology Web3 Reports Coming
            Soon...2025 🔮
          </li>

          <li>
            If you want to book a session, please choose a service by visiting
            READINGS DEVINE ALIGNMENT READINGS These are general readings based
            on what you need to know to come into alignment with what you desire
            to accomplish divinely. All readings are approximately 60 minutes in
            length, and delivered by attachment or link to your inbox.
            Turnaround time is 5-7 days. Please read the note at the end of this
            page that is in capital letters, so you don't forfeit your chance of
            working with me now or in the future. EMAIL THROUGH THE CONTACT PAGE
            OR solarahspeaks@proton.me TO BOOK SOUL RECOVERY SESSION (60
            Minutes) £133.00 1:1 client led video sessions for mentorship and
            guidance. I utilise the full scope of my expertise in alkhemy,
            tarot, family energy systems, spiritual warfare, herbalism, and
            holistic health. SOUL RECOVERY SESSION (90 MINUTES) £199.00 All
            sessions are conducted via video call.{' '}
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              src=""
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://solarah.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/logos/Solarah_Blue.jpeg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              solarah.info
            </a>{' '}
            👉 then email solarahspeaks@proton.me to confirm before you book a
            session with the button below 👇🏽{' '}
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://pay.solarah.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Session
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://blog.solarah.xyz/"
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
            Subscribe now
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
          Donate to Liberation
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
          Join Community
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/channel/UCYLsAm9BC45uZ5_lb1YenVw"
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
          YouTube Channel
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          src=""
          target="_blank"
          rel="noopener noreferrer"
        ></a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://solarah.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/logos/Solarah_Blue.jpeg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Click Logo to view services→ solarah.info
        </a>
      </footer>
    </div>
  );
}
