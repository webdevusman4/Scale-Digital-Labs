export default function Divider() {
  return (
    <div
      aria-hidden="true"
      className="w-full flex items-center justify-center px-8"
    >
      <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
    </div>
  );
}
