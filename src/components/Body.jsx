import RestaurentCart from "./RestaurentCart";

const Body = () => {
  return (
    <main id="home" className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <section className="mb-12 rounded-3xl bg-orange-100 px-6 py-10 sm:px-10 sm:py-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
          Good food, delivered
        </p>
        <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
          Find your next favorite meal.
        </h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-stone-600">
          Explore local restaurants and get something delicious delivered to your door.
        </p>
        <form className="mt-7 flex max-w-xl flex-col gap-3 sm:flex-row">
          <label htmlFor="restaurant-search" className="sr-only">Search restaurants</label>
          <input
            id="restaurant-search"
            type="search"
            placeholder="Search restaurants or cuisines"
            className="min-w-0 flex-1 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
          <button
            type="submit"
            className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Search
          </button>
        </form>
      </section>

      <section id="restaurants" aria-labelledby="restaurants-heading">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-orange-600">Handpicked for you</p>
            <h2 id="restaurants-heading" className="mt-1 text-2xl font-bold tracking-tight">
              Popular restaurants
            </h2>
          </div>
          <a href="#restaurants" className="text-sm font-semibold text-orange-700 transition hover:text-orange-800">
            View all
          </a>
        </div>
        <RestaurentCart />
      </section>
    </main>
  );
};

export default Body;