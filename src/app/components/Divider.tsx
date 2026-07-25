export default function Divider() {
  return (
    <div
      aria-hidden="true"
      className="w-full flex items-center justify-center px-8"
    >
      <div style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }} className="w-4/5 h-px" />
    </div>
  );
}
