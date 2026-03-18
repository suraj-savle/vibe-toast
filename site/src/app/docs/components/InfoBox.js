export default function InfoBox({ type = "info", title, children }) {
  const styles = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "ℹ️",
      title: "Note"
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: "⚠️",
      title: "Warning"
    },
    tip: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "💡",
      title: "Tip"
    },
    error: {
      bg: "bg-rose-50",
      border: "border-rose-200",
      icon: "🚫",
      title: "Caution"
    }
  };

  const style = styles[type] || styles.info;

  return (
    <div className={`${style.bg} ${style.border} border rounded-xl p-4 my-6`}>
      <div className="flex gap-3">
        <span className="text-xl">{style.icon}</span>
        <div>
          <h4 className="font-semibold mb-1">{title || style.title}</h4>
          <div className="text-sm text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
}