import { useEffect, useState } from "react";

export default function Toast({ message, type = "success", onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 30);

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed top-6 right-6 px-6 py-3 rounded-xl shadow-lg text-white z-99 ${bgColor} overflow-x-hidden`}
    >
      <div className="mb-2">{message}</div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden absolute left-0 right-0 bottom-0">
        <div
          className="h-full bg-white transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
