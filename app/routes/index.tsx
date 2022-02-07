import { LinksFunction, MetaFunction } from "remix";

import stylesUrl from "~/build/styles/home.css";

export const handle = { hydrate: false };

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div className="container">
      <div className="centered">
        <h1 className="title">
          <img src="/logo.svg" className="logo" alt="Logo" />
          Kataware.dev
        </h1>

        <p className="description">
          <em>
            Kataware means "a fragment, one of the group or party "; it implies
            being connected to a bigger whole.
          </em>
        </p>
      </div>
    </div>
  );
}
