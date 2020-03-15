import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  type?: string;
  twitterCreator?: string;
}

const SEO: React.FC<Props> = ({
  title,
  description,
  image: img,
  pathname,
  type,
  twitterCreator
}) => {
  const image = img ?  `/${img}` : null;
  const url = `/${pathname}`;
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}

      {image && (
        <>
          <meta name="image" content={image} />
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      )}

      <meta property="og:url" content={url} />
      {type && <meta property="og:type" content={type} />}

      <meta name="twitter:card" content="summary_large_image" />
      {twitterCreator && (
        <meta name="twitter:creator" content={twitterCreator} />
      )}
    </Head>
  );
};

export default SEO;