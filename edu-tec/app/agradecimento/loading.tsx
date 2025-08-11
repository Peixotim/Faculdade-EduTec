export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#f7f5ec] bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <svg
          className="animate-spin h-20 w-20 text-[#05365F] mx-auto mb-4"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        <p className="text-[#05365F] font-semibold text-lg">
          Enviando dados...
        </p>
      </div>
    </div>
  );
}
