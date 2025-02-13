export default function ProductIntro() {
  return (
    <div className="w-full  flex flex-col items-center md:flex-row md:items-end justify-between my-6 md:px-32">
      <h2 className="text-3xl font-bold font-gothic">Our Products</h2>
      <p className="text-black text-sm md:text-md text-right max-w-md font-gothic">
        Make every party a cocktail party.{" "}
        <a
          href="/vodkas"
          className="underline underline-offset-4 decoration-2 text-black hover:text-blue-800"
        >
          Explore our vodkas.
        </a>
      </p>
    </div>
  );
}
