import { Plus_Jakarta_Sans as PJSans } from "@next/font/google";

const pjsans = PJSans({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        ul {
          list-style: none;
        }
        a {
          text-decoration: none;
        }
        html {
          font-size: 0.625em;
        }
        body {
          font-size: 1.6rem;
          font-family: ${pjsans.style.fontFamily};
          overflow-x: hidden;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
        }
        button {
          font-family: ${pjsans.style.fontFamily};
          font-size: 1.6rem;
        }
        p {
          font-weight: 500;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
