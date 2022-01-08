import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useMatches,
  useCatch,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import GithubCorner from "~/components/GithubCorner";

import { createSEO } from "~/lib/seo";

import globalStyleUrl from "~/styles/global.css";
import githubCornerStyleUrl from "~/styles/github-corner.css";

export const handle = { hydrate: false };

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyleUrl },
    { rel: "stylesheet", href: githubCornerStyleUrl },
  ];
};

export const meta: MetaFunction = () => {
  return createSEO({
    title: "Kataware.dev",
    description:
      "Kataware means 'a fragment, one of the group or party'; it implies being connected to a bigger whole.",
    url: "https://kataware.dev",
    image: "https://kataware.dev/logo.png",
  });
};

export default function App() {
  const matches = useMatches();

  // If at least one route wants to hydrate, this will return true
  const includeScripts = matches.some((match) => match.handle?.hydrate);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        {includeScripts && <Scripts />}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GithubCorner />

      <main>{children}</main>
    </>
  );
}

export function CatchBoundary() {
  const { status, statusText } = useCatch();
  return (
    <html>
      <head>
        <title>{`${statusText} | Kataware.dev`}</title>
        <Meta />
        <Links />
        <link rel="stylesheet" type="text/css" href="styles/404.css"></link>
      </head>
      <body>
        <Layout>
          <h1 className="status">{status}</h1>
          <div className="text-wrapper">
            <h2 className="text">{statusText}.</h2>
          </div>
        </Layout>
      </body>
    </html>
  );
}
