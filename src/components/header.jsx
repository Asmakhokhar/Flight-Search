import { Menu, User } from "lucide-react";
import Filter from "../components/filter";

export default function Header({
  onMenuClick,
  origin,
  setOrigin,
  maxPrice,
  setMaxPrice,
  onSearch
}) {
  return (
    <header
      className="relative h-[80vh] text-white"
      style={{
        backgroundImage: "url(/images/bg-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col">
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-4">
            <button onClick={onMenuClick}>
              <Menu />
            </button>
            <span className="font-display text-3xl">Flightly</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <User size={18} />
            <button>Sign in</button>
          </div>
        </div>

        {/* Hero Text   */}
        <div className="flex flex-1 flex-col items-center justify-center text-center px-6">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Find Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Discover amazing flight deals and explore new destinations with
            Flightly.
          </p>
        </div>

        {/* FILTER CENTER */}
        <div className="flex flex-1 items-center justify-center px-6">
          <Filter
            origin={origin}
            setOrigin={setOrigin}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            onSearch={onSearch}
          />
        </div>
      </div>
    </header>
  );
}
