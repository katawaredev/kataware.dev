import Head from 'next/head'
import GithubLogo from "components/GithubLogo"
import logoSrc from '../assets/logo.svg'

const Home = () => (
  <div className="container">
    <Head>
      <title>Kataware.dev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <GithubLogo />

    <main>
      <h1 className="title">
        <img src={logoSrc} className="logo" alt="Logo" />
        Kataware.dev
      </h1>

      <p className="description">
        <em>Kataware means "a fragment, one of the group or party "; it implies being connected to a bigger whole.</em>
      </p>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .logo {
        width: 64px;
        height: 64px;
        vertical-align: bottom;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-family: 'Kodchasan', sans-serif;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }
    `}</style>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Kodchasan&display=swap');

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: #e5e5e5;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
