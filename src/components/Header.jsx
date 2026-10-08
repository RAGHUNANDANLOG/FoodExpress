const Header = () => {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-orange-600">
          <span aria-hidden="true" className="text-2xl">🍽️</span>
          FoodExpress
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium text-stone-600 sm:flex">
          <a href="#home" className="transition hover:text-orange-600">Home</a>
          <a href="#restaurants" className="transition hover:text-orange-600">Restaurants</a>
          <a href="#about" className="transition hover:text-orange-600">About</a>
        </nav>

        <button
          type="button"
          className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          Cart
        </button>
      </div>
    </header>
  );
};

export default Header;