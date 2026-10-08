const RestaurentCart = () => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-orange-200 via-amber-100 to-rose-100">
        <span aria-hidden="true" className="text-6xl transition-transform group-hover:scale-110">🍜</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-stone-900">Restaurant Cart</h3>
            <p className="mt-1 text-sm text-stone-500">Fresh favorites, made to order</p>
          </div>
          <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            4.8 ★
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-stone-600">
          <span>25–35 min</span>
          <span aria-hidden="true">·</span>
          <span>Delivery available</span>
        </div>
      </div>
    </article>
  );
};

export default RestaurentCart;