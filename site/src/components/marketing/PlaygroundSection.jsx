"use client";

import { useState } from "react";
import { Toaster, toast } from "vibe-toast";
import {
  FaRocket,
  FaHeart,
  FaStar,
  FaSmile,
  FaPlay,
  FaUndo,
  FaCog,
  FaTimes,
  FaCheck,
  FaInfo,
  FaExclamation,
} from "react-icons/fa";

function ToggleSwitch({ enabled, onChange, accentColor }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
        enabled ? "bg-blue-600" : "bg-gray-300"
      }`}
      style={{
        backgroundColor: enabled ? accentColor : "#d1d5db",
      }}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export default function Playground() {
  // Toast configuration state
  const [title, setTitle] = useState("Custom Toast");
  const [description, setDescription] = useState(
    "This is a customized toast message",
  );
  const [variant, setVariant] = useState("default");
  const [position, setPosition] = useState("top-right");
  const [duration, setDuration] = useState(4000);
  const [theme, setTheme] = useState("light");
  const [bgColor, setBgColor] = useState("#f9f7ef");
  const [textColor, setTextColor] = useState("#2A1A10");
  const [accentColor, setAccentColor] = useState("#1a1a1a");
  const [showIcon, setShowIcon] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState("rocket");
  const [showActions, setShowActions] = useState(false);
  const [actionLabel1, setActionLabel1] = useState("Confirm");
  const [actionLabel2, setActionLabel2] = useState("Cancel");
  const [hideProgressBar, setHideProgressBar] = useState(true);
  const [copied, setCopied] = useState(false);
  const [hasDescription, setHasDescription] = useState(true);

  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  const variants = [
    { id: "default", label: "Default", color: "#6b7280", icon: <FaCog /> },
    { id: "success", label: "Success", color: "#10b981", icon: <FaCheck /> },
    { id: "error", label: "Error", color: "#ef4444", icon: <FaTimes /> },
    {
      id: "warning",
      label: "Warning",
      color: "#f59e0b",
      icon: <FaExclamation />,
    },
    { id: "info", label: "Info", color: "#3b82f6", icon: <FaInfo /> },
  ];

  const getIcon = () => {
    if (!showIcon) return undefined;
    switch (selectedIcon) {
      case "rocket":
        return <FaRocket />;
      case "heart":
        return <FaHeart />;
      case "star":
        return <FaStar />;
      case "smile":
        return <FaSmile />;
      default:
        return undefined;
    }
  };

  const showCustomToast = () => {
    const config = {
      title,
      ...(hasDescription && description ? { description } : {}),
      variant: variant !== "default" ? variant : undefined,
      duration,
      icon: getIcon(),
      hideProgressBar,
    };

    if (variant === "default") {
      config.style = {
        background: bgColor,
        color: textColor,
        accent: accentColor,
      };
    }

    if (showActions) {
      config.actions = [
        {
          label: actionLabel1,
          variant: "primary",
          onClick: () => toast.success("Action 1 clicked!"),
        },
        {
          label: actionLabel2,
          variant: "ghost",
          onClick: () => toast.info("Action 2 clicked!"),
        },
      ];
    }

    toast(config);
  };

  const copyConfig = () => {
    const config = {
      title,
      ...(hasDescription && description ? { description } : {}),
      variant: variant !== "default" ? variant : undefined,
      duration,
      icon: showIcon ? selectedIcon : undefined,
      hideProgressBar,
      style:
        variant === "default"
          ? {
              background: bgColor,
              color: textColor,
              accent: accentColor,
            }
          : undefined,
      actions: showActions
        ? [
            { label: actionLabel1, variant: "primary", onClick: "() => {}" },
            { label: actionLabel2, variant: "ghost", onClick: "() => {}" },
          ]
        : undefined,
    };

    const code = `toast(${JSON.stringify(config, null, 2)})`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Configuration copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const resetDefaults = () => {
    setTitle("Custom Toast");
    setDescription("This is a customized toast message");
    setVariant("default");
    setPosition("top-right");
    setDuration(4000);
    setTheme("light");
    setBgColor("#f9f7ef");
    setTextColor("#2A1A10");
    setAccentColor("#1a1a1a");
    setShowIcon(true);
    setSelectedIcon("rocket");
    setShowActions(false);
    setActionLabel1("Confirm");
    setActionLabel2("Cancel");
    setHideProgressBar(false);
    setHasDescription(true);
    toast.info("Settings reset to defaults");
  };

  return (
    <div
      id="playground"
      className="min-h-screen max-w-xl px-4 py-6 sm:px-6 sm:py-8"
    >
      <Toaster position={position} theme={theme} duration={duration} hideProgressBar={hideProgressBar} />
      <header className="text-left mb-8">
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-main)" }}
        >
          Playground
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Build your perfect toast and get the config code instantly.
        </p>
      </header>

      <div className="max-w-2xl mx-auto my-5 px-5 py-6 shadow-sm border border-(--foreground)/10 rounded-xl">
        {/* Basic Settings Section */}
        <div className="py-4">
          <div className="space-y-5">
            {/* Title Input */}
            <div>
              <label
                className="block text-xs sm:text-sm font-medium mb-1"
                style={{ color: "var(--text-main)" }}
              >
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50"
                style={{ border: "1px solid #e5e7eb" }}
                placeholder="Toast title"
              />
            </div>

            {/* Description with Toggle */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: "var(--text-main)" }}
                >
                  Description
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Off</span>
                  <ToggleSwitch
                    enabled={hasDescription}
                    onChange={() => setHasDescription(!hasDescription)}
                    accentColor={accentColor}
                  />
                  <span className="text-xs text-gray-500">On</span>
                </div>
              </div>

              {hasDescription && (
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50"
                  style={{ border: "1px solid #e5e7eb" }}
                  placeholder="Enter toast description..."
                />
              )}
            </div>

            {/* Position */}
            <div>
              <label
                className="block text-xs sm:text-sm font-medium mb-2"
                style={{ color: "var(--text-main)" }}
              >
                Position
              </label>
              <div className="flex flex-wrap gap-2">
                {positions.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPosition(p)}
                    className={`px-3 py-1 text-xs rounded-full transition-all ${
                      position === p
                        ? "text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    style={{
                      backgroundColor: position === p ? accentColor : "#f3f4f6",
                    }}
                  >
                    {p.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Variant Type */}
            <div>
              <label
                className="block text-xs sm:text-sm font-medium mb-2"
                style={{ color: "var(--text-main)" }}
              >
                Type
              </label>
              <div className="flex flex-wrap gap-2">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id)}
                    className="px-3 py-1 text-xs rounded-full transition-all flex items-center gap-1"
                    style={{
                      backgroundColor: variant === v.id ? v.color : "#f3f4f6",
                      color: variant === v.id ? "#fff" : "#374151",
                    }}
                  >
                    {v.icon}
                    <span>{v.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: "var(--text-main)" }}
                >
                  Duration
                </label>
                <span className="text-xs" style={{ color: "var(--text-main)" }}>
                  {duration}ms
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-1.5 rounded-lg appearance-(-webkit-slider-thumb) cursor-pointer"
                style={{ accentColor: accentColor }}
              />
            </div>

            {/* Theme */}
            <div>
              <label
                className="block text-xs sm:text-sm font-medium mb-2"
                style={{ color: "var(--text-main)" }}
              >
                Theme
              </label>
              <div className="flex gap-2">
                {["light", "dark"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`flex px-4 py-1.5 rounded-2xl transition-all text-xs capitalize items-center justify-center gap-2 ${
                      theme === t ? "text-white" : "bg-gray-100 text-gray-700"
                    }`}
                    style={{
                      backgroundColor: theme === t ? accentColor : "#f3f4f6",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Appearance Settings Section */}
        <div className="">
          <label
            className="block text-xs sm:text-sm font-medium mb-2"
            style={{ color: "var(--text-main)" }}
          >
            Custom style
          </label>

          <div className="space-y-1">
            {/* Custom Colors - Only for default variant */}
            {variant === "default" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-1">
                <div>
                  <label
                    className="block text-xs font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Background
                  </label>
                  <div className="flex justify-around gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-8"
                    />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="flex-1 w-2 px-2 py-1 text-xs rounded-full bg-gray-50"
                      style={{ border: "1px solid #e5e7eb" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Text
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-8 "
                    />
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="flex-1 w-2 px-2 py-1 text-xs rounded-full bg-gray-50"
                      style={{ border: "1px solid #e5e7eb" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Accent
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-8"
                    />
                    <input
                      type="text"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="flex-1 w-2 px-2 py-1 text-xs rounded-full bg-gray-50"
                      style={{ border: "1px solid #e5e7eb" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Icon Toggle */}
            <div className="flex items-center justify-between py-2">
              <label
                className="text-xs sm:text-sm font-medium"
                style={{ color: "var(--text-main)" }}
              >
                Show Icon
              </label>
              <ToggleSwitch
                enabled={showIcon}
                onChange={() => setShowIcon(!showIcon)}
                accentColor={accentColor}
              />
            </div>

            {/* Icon Selection */}
            {showIcon && (
              <div className="flex gap-2 mt-2 pb-2">
                {[
                  { id: "rocket", icon: <FaRocket /> },
                  { id: "heart", icon: <FaHeart /> },
                  { id: "star", icon: <FaStar /> },
                  { id: "smile", icon: <FaSmile /> },
                ].map((icon) => (
                  <button
                    key={icon.id}
                    onClick={() => setSelectedIcon(icon.id)}
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor:
                        selectedIcon === icon.id ? "#e5e7eb" : "transparent",
                      color: "var(--text-main)",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {icon.icon}
                  </button>
                ))}
              </div>
            )}

            {/* Progress Bar Toggle */}
            <div className="flex items-center justify-between py-2">
              <label
                className="text-xs sm:text-sm font-medium"
                style={{ color: "var(--text-main)" }}
              >
                Hide Progress Bar
              </label>
              <ToggleSwitch
                enabled={hideProgressBar}
                onChange={() => setHideProgressBar(!hideProgressBar)}
                accentColor={accentColor}
              />
            </div>

            {/* Actions Toggle */}
            <div className="flex items-center justify-between py-2">
              <label
                className="text-xs sm:text-sm font-medium"
                style={{ color: "var(--text-main)" }}
              >
                Show Actions
              </label>
              <ToggleSwitch
                enabled={showActions}
                onChange={() => setShowActions(!showActions)}
                accentColor={accentColor}
              />
            </div>

            {/* Action Inputs */}
            {showActions && (
              <div className="space-y-2 py-2">
                <input
                  type="text"
                  value={actionLabel1}
                  onChange={(e) => setActionLabel1(e.target.value)}
                  placeholder="Action 1 label"
                  className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50"
                  style={{ border: "1px solid #e5e7eb" }}
                />
                <input
                  type="text"
                  value={actionLabel2}
                  onChange={(e) => setActionLabel2(e.target.value)}
                  placeholder="Action 2 label"
                  className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50"
                  style={{ border: "1px solid #e5e7eb" }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 my-4">
          <button
            onClick={showCustomToast}
            className="flex-1 text-white px-4 sm:px-6 py-3 rounded-xl font-medium transition-all hover:opacity-90 flex items-center justify-center gap-2 shadow-lg"
            style={{ backgroundColor: "var(--text-main)" }}
          >
            <FaPlay /> Show Toast
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 my-4">
          <button
            onClick={resetDefaults}
            className="w-full px-4 sm:px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
            style={{
              backgroundColor: "#f3f4f6",
              color: "var(--text-main)",
              border: "1px solid #e5e7eb",
            }}
          >
            <FaUndo /> Reset
          </button>
        </div>

        {/* Generated Code Section */}
        <div
          className="rounded-xl shadow-sm overflow-hidden"
          style={{ backgroundColor: "var(--code-panel)" }}
        >
          <div className="p-4">
            <div className="flex items-center justify-end mb-3">
              <button
                onClick={copyConfig}
                className=" transition-colors flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
              >
                Copy
              </button>
            </div>
            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code>{`toast({
  title: "${title}",${
    hasDescription && description
      ? `
  description: "${description}",`
      : ""
  }${
    variant !== "default"
      ? `
  variant: "${variant}",`
      : ""
  }
  duration: ${duration},${
    showIcon
      ? `
  icon: <${
    selectedIcon === "rocket"
      ? "FaRocket"
      : selectedIcon === "heart"
        ? "FaHeart"
        : selectedIcon === "star"
          ? "FaStar"
          : "FaSmile"
  } />,`
      : ""
  }${
    variant === "default"
      ? `
  style: {
    background: "${bgColor}",
    color: "${textColor}",
    accent: "${accentColor}",
  },`
      : ""
  }${
    hideProgressBar
      ? `
  hideProgressBar: true,`
      : ""
  }${
    showActions
      ? `
  actions: [
    { 
      label: "${actionLabel1}", 
      variant: "primary",
      onClick: () => {}
    },
    { 
      label: "${actionLabel2}", 
      variant: "ghost",
      onClick: () => {}
    }
  ],`
      : ""
  }
})`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
