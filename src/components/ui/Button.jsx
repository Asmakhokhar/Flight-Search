export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-5 py-3 rounded-md text-sm font-medium transition focus:outline-none";

  const variants = {
    primary:
      "bg-[#0000DD] text-white hover:bg-[#0000bb]",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
