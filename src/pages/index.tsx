import DefaultLayout from 'layouts/DefaultLayout'
import logoSrc from 'assets/logo.svg'

const Home = () => (
  <DefaultLayout>
  <div className="container">
    <div className="centered">
      <h1 className="title">
        <img src={logoSrc} className="logo" alt="Logo" />
        Kataware.dev
      </h1>

      <p className="description">
        <em>Kataware means "a fragment, one of the group or party "; it implies being connected to a bigger whole.</em>
      </p>
    </div>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .centered {
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
  </div>
  </DefaultLayout>
)

export default Home
