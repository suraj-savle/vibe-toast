"use client";
import {
  IconInfoCircle,
  IconAlertTriangle,
  IconBulb,
  IconAlertCircle,
} from "@tabler/icons-react";

export default function InfoBox({ type = "info", title, children }) {
  const styles = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: IconInfoCircle,
      title: "Note"
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: IconAlertTriangle,
      title: "Warning"
    },
    tip: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: IconBulb,
      title: "Tip"
    },
    error: {
      bg: "bg-rose-50",
      border: "border-rose-200",
      icon: IconAlertCircle,
      title: "Caution"
    }
  };

  const style = styles[type] || styles.info;
  const Icon = style.icon;

  return (
    <div className={`${style.bg} ${style.border} border rounded-xl p-4 my-2`}>
      <div className="flex gap-3">
        <Icon
          size={20}
          stroke={1.8}
          className={`${style.text} mt-0.5 flex-shrink-0`}
        />
        <div>
          <h4 className="font-semibold mb-1">{title || style.title}</h4>
          <div className="text-sm text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
}