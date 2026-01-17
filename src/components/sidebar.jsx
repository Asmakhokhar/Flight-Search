import {
  X,
  Menu,
  Plane,
  Bed,
  Car,
  Package,
  Ship,
  Sparkles,
  Map,
  Globe,
  Radar,
  BookOpen,
  Briefcase,
  Heart,
} from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`absolute left-0 top-0 h-full w-72 bg-white transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          {/* Menu icon (visual only) */}
          <Menu className="text-gray-700" />

          {/* Close icon */}
          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="px-3 py-4 text-sm">
          <ul className="space-y-1">
            <MenuItem icon={<Plane size={18} />} label="Flights" active />
            <MenuItem icon={<Bed size={18} />} label="Stays" />
            <MenuItem icon={<Car size={18} />} label="Cars" />
            <MenuItem icon={<Package size={18} />} label="Packages" />
            <MenuItem icon={<Ship size={18} />} label="Cruises" />
            <MenuItem icon={<Sparkles size={18} />} label="AI Mode" />
          </ul>

          <Divider />

          <ul className="space-y-1">
            <MenuItem icon={<Map size={18} />} label="Plan your trip" />
            <MenuItem icon={<Globe size={18} />} label="Explore" />
            <MenuItem icon={<Radar size={18} />} label="Flight Tracker" />
            <MenuItem icon={<BookOpen size={18} />} label="Travel tips" />
            <MenuItem
              icon={<Briefcase size={18} />}
              label="KAYAK for Business"
              badge="NEW"
            />
          </ul>

          <Divider />

          <ul className="space-y-1">
            <MenuItem icon={<Heart size={18} />} label="Trips" />
          </ul>
        </nav>
      </aside>
    </div>
  );
}

/* ---------- helpers ---------- */

function MenuItem({ icon, label, active, badge }) {
  return (
    <li>
      <button
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition
          ${
            active
              ? "bg-gray-200 font-medium"
              : "hover:bg-gray-100"
          }
        `}
      >
        <span className="text-gray-600">{icon}</span>
        <span className="flex-1 text-left">{label}</span>

        {badge && (
          <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
      </button>
    </li>
  );
}

function Divider() {
  return <hr className="my-4 border-gray-200" />;
}
