import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";

import GithubCorner from "~/components/GithubCorner";

import { createSEO } from "~/lib/seo";

import tailwindUrl from "~/tailwind.css?url";
import githubCornerStyleUrl from "~/styles/github-corner.css?url";

export const handle = { hydrate: false };

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindUrl },
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

export function Layout({ children }: { children: React.ReactNode }) {
  const matches = useMatches() as { handle: { hydrate: boolean } }[];

  // If at least one route wants to hydrate, this will return true
  const includeScripts =
    process.env.NODE_ENV === "development" ||
    matches.some((match) => match.handle?.hydrate);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <GithubCorner />
        {children}
        <ScrollRestoration />
        {includeScripts && <Scripts />}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
