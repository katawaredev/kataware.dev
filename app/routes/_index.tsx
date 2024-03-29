export const handle = { hydrate: false };

export default function Index() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="text-center">
        <h1 className="font-kodchasan text-6xl font-bold m-0 leading-none align-center">
          <img
            src="/logo.svg"
            className="w-16 h-16 inline-block align-top"
            alt="Logo"
          />
          Kataware.dev
        </h1>

        <p className="text-2xl leading-relaxed mt-4">
          <em>
            Kataware means &ldquo;a fragment, one of the group or party&rdquo;;
            it implies being connected to a bigger whole.
          </em>
        </p>
      </div>
    </div>
  );
}
