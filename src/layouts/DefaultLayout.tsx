import SEO from 'components/SEO'
import GithubLogo from 'components/GithubLogo'
import logoSrc from '../assets/logo.png'

const DefaultLayout: React.FC = ({ children }) => (
  <>
    <SEO
      title="Kataware.dev"
      description="Kataware means 'a fragment, one of the group or party'; it implies being connected to a bigger whole."
      image={logoSrc}
    />

    <GithubLogo link="https://github.com/katawaredev" />

    <main>{children}</main>

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

  </>
)

export default DefaultLayout
