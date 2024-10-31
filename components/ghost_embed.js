import Script from 'next/script';
// import {useEffect } from react;

function GhostEmbed({ src }) {
  return (
    <div style="height: 100vh">
      <script
        src="https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js"
        data-background-color="#ffffff"
        data-text-color="#000000"
        data-button-color="#fac900"
        data-button-text-color="#000000"
        data-title="Solarah Speaks"
        data-description="Welcome To The Home Of Solarah Speaks Building The Solarah Foundation: Template for a New Earth Platform "
        data-icon="https://blog.solarah.xyz/content/images/size/w192h192/size/w256h256/2024/10/The-poetry-of-us-lives-in-my-DNA.-Strands-of-nostalgia--double-helixed-and-locked.-Our-eyes-first-met-and-words-finally-took-form.-Memories-of-verses--all-mine--yet-not-my-own.-I-live-now-in-stanz-1.png"
        data-site="https://blog.solarah.xyz/"
        data-locale="en"
        async
      ></script>
    </div>
  );
}
export default GhostEmbed;
