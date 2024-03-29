export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
  twitterCreator?: string;
};

export const createSEO = (props: SEOProps) => [
  ...createHtmlMeta(props),
  ...createOpenGraphMeta(props),
  ...createTwitterMeta(props),
];

export const createHtmlMeta = ({ title, description, image }: SEOProps) => {
  const meta: Record<string, unknown> = {};

  if (title) meta.title = title;

  if (description) meta.description = description;

  if (image) meta.image = image;

  return [meta];
};

export const createOpenGraphMeta = ({
  title,
  description,
  image,
  url,
}: SEOProps) => {
  const meta: Record<string, unknown> = {};

  if (title) meta["og:title"] = title;

  if (url) meta["og:url"] = url;

  if (description) meta["og:description"] = description;

  if (image) meta["og:image"] = image;

  return [meta];
};

export const createTwitterMeta = ({
  title,
  description,
  image,
  twitterCreator,
}: SEOProps) => {
  const meta: Record<string, unknown> = {
    "twitter:card": "summary_large_image",
  };

  if (title) meta["twitter:title"] = title;

  if (description) meta["twitter:description"] = description;

  if (image) meta["twitter:image"] = image;

  if (twitterCreator) meta["twitter:creator"] = twitterCreator;

  return [meta];
};
