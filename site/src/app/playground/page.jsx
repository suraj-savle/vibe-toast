"use client";

import { useState } from "react";
import { Toaster, toast } from "vibe-toast";
import {
  FaRocket,
  FaHeart,
  FaStar,
  FaSmile,
  FaCopy,
  FaPlay,
  FaUndo,
  FaPalette,
  FaCog,
  FaSun,
  FaMoon,
  FaTimes,
  FaCheck,
  FaInfo,
  FaExclamation,
} from "react-icons/fa";
import { Navbar } from "@/components/Navbar";

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
  const [bgColor, setBgColor] = useState("#3b82f6");
  const [textColor, setTextColor] = useState("#ffffff");
  const [accentColor, setAccentColor] = useState("#10b981");
  const [showIcon, setShowIcon] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState("rocket");
  const [showActions, setShowActions] = useState(false);
  const [actionLabel1, setActionLabel1] = useState("Confirm");
  const [actionLabel2, setActionLabel2] = useState("Cancel");
  const [hideProgressBar, setHideProgressBar] = useState(false);

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
      description,
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
      description,
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
    toast.success("Configuration copied to clipboard!");
  };

  const resetDefaults = () => {
    setTitle("Custom Toast");
    setDescription("This is a customized toast message");
    setVariant("default");
    setPosition("top-right");
    setDuration(4000);
    setTheme("light");
    setBgColor("#3b82f6");
    setTextColor("#ffffff");
    setAccentColor("#10b981");
    setShowIcon(true);
    setSelectedIcon("rocket");
    setShowActions(false);
    setActionLabel1("Confirm");
    setActionLabel2("Cancel");
    setHideProgressBar(false);
    toast.info("Settings reset to defaults");
  };

  return (
    <div
      className="max-w-6xl mx-auto min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Toaster position={position} theme={theme} duration={duration} />
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text-main)" }}
          >
            Toast Playground
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
            Customize every aspect of your toast and see it in real-time
          </p>
        </div>

        {/* Mobile View - Stacked */}
        <div className="block lg:hidden space-y-6">
          {/* Live Preview Card - Mobile First */}
          <div
            className="rounded-xl shadow-sm border p-4 sm:p-6"
            style={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h2
              className="text-base sm:text-lg font-semibold mb-3 sm:mb-4"
              style={{ color: "var(--text-main)" }}
            >
              Live Preview
            </h2>

            <div
              className="p-3 sm:p-4 rounded-lg border-2 border-dashed transition-all"
              style={{
                backgroundColor: variant === "default" ? bgColor : undefined,
                color: variant === "default" ? textColor : undefined,
                borderColor:
                  variant === "default" ? accentColor : "var(--border)",
              }}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                {showIcon && (
                  <div
                    className="text-xl sm:text-2xl flex-shrink-0"
                    style={{
                      color: variant === "default" ? accentColor : undefined,
                    }}
                  >
                    {selectedIcon === "rocket" && <FaRocket />}
                    {selectedIcon === "heart" && <FaHeart />}
                    {selectedIcon === "star" && <FaStar />}
                    {selectedIcon === "smile" && <FaSmile />}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base truncate">
                    {title || "Toast Title"}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90 line-clamp-2">
                    {description || "Toast description"}
                  </p>

                  {showActions && (
                    <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
                      <button
                        className="px-2 sm:px-3 py-1 text-white text-xs sm:text-sm rounded"
                        style={{ backgroundColor: accentColor }}
                      >
                        {actionLabel1}
                      </button>
                      <button
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded"
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid",
                          borderColor: accentColor,
                          color: variant === "default" ? textColor : undefined,
                        }}
                      >
                        {actionLabel2}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {!hideProgressBar && (
                <div className="mt-2 sm:mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-200"
                    style={{
                      width: "100%",
                      backgroundColor:
                        variant === "default" ? accentColor : undefined,
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Basic Settings Card - Mobile */}
          <div
            className="rounded-xl shadow-sm border p-4 sm:p-6"
            style={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h2
              className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2"
              style={{ color: "var(--text-main)" }}
            >
              <FaCog /> Basic Settings
            </h2>

            <div className="space-y-3 sm:space-y-4">
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
                  className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{ borderColor: "var(--border)" }}
                  placeholder="Toast title"
                />
              </div>

              <div>
                <label
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ color: "var(--text-main)" }}
                >
                  Description
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{ borderColor: "var(--border)" }}
                  placeholder="Toast description"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label
                    className="block text-xs sm:text-sm font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Position
                  </label>
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {positions.map((p) => (
                      <option key={p} value={p}>
                        {p.replace("-", " ")}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs sm:text-sm font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Duration (ms)
                  </label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    min="0"
                    step="500"
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                  style={{ color: "var(--text-main)" }}
                >
                  Variant
                </label>
                <div className="grid grid-cols-5 gap-1">
                  {variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setVariant(v.id)}
                      className="p-1.5 sm:p-2 rounded-lg text-[10px] sm:text-xs font-medium transition-all flex flex-col items-center gap-0.5 sm:gap-1"
                      style={{
                        backgroundColor:
                          variant === v.id ? v.color : "transparent",
                        color: variant === v.id ? "#fff" : "var(--text-main)",
                        border: "1px solid",
                        borderColor:
                          variant === v.id ? v.color : "var(--border)",
                      }}
                    >
                      <span className="text-xs sm:text-sm">{v.icon}</span>
                      <span className="hidden xs:inline">{v.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Appearance Settings Card - Mobile */}
          <div
            className="rounded-xl shadow-sm border p-4 sm:p-6"
            style={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h2
              className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2"
              style={{ color: "var(--text-main)" }}
            >
              <FaPalette /> Appearance
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: "var(--text-main)" }}
                >
                  Theme
                </span>
                <div className="flex gap-1 sm:gap-2">
                  <button
                    onClick={() => setTheme("light")}
                    className="p-1.5 sm:p-2 rounded-lg transition-colors text-sm"
                    style={{
                      backgroundColor:
                        theme === "light" ? "var(--border)" : "transparent",
                      color: "var(--text-main)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <FaSun />
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className="p-1.5 sm:p-2 rounded-lg transition-colors text-sm"
                    style={{
                      backgroundColor:
                        theme === "dark" ? "var(--border)" : "transparent",
                      color: "var(--text-main)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <FaMoon />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    className="block text-xs sm:text-sm font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Background
                  </label>
                  <div className="flex gap-1 sm:gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="h-8 w-12 sm:h-10 sm:w-20 rounded border"
                      style={{ borderColor: "var(--border)" }}
                    />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="flex-1 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border rounded-lg"
                      style={{ borderColor: "var(--border)" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs sm:text-sm font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Text
                  </label>
                  <div className="flex gap-1 sm:gap-2">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="h-8 w-12 sm:h-10 sm:w-20 rounded border"
                      style={{ borderColor: "var(--border)" }}
                    />
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="flex-1 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border rounded-lg"
                      style={{ borderColor: "var(--border)" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs sm:text-sm font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Accent
                  </label>
                  <div className="flex gap-1 sm:gap-2">
                    <input
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="h-8 w-12 sm:h-10 sm:w-20 rounded border"
                      style={{ borderColor: "var(--border)" }}
                    />
                    <input
                      type="text"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="flex-1 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border rounded-lg"
                      style={{ borderColor: "var(--border)" }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2"
                    style={{ color: "var(--text-main)" }}
                  >
                    <input
                      type="checkbox"
                      checked={showIcon}
                      onChange={(e) => setShowIcon(e.target.checked)}
                      className="rounded"
                      style={{ borderColor: "var(--border)" }}
                    />
                    Show Icon
                  </label>

                  {showIcon && (
                    <div className="flex gap-1 sm:gap-2 mt-2">
                      {[
                        { id: "rocket", icon: <FaRocket /> },
                        { id: "heart", icon: <FaHeart /> },
                        { id: "star", icon: <FaStar /> },
                        { id: "smile", icon: <FaSmile /> },
                      ].map((icon) => (
                        <button
                          key={icon.id}
                          onClick={() => setSelectedIcon(icon.id)}
                          className="p-1.5 sm:p-2 rounded-lg transition-colors text-sm"
                          style={{
                            backgroundColor:
                              selectedIcon === icon.id
                                ? "var(--border)"
                                : "transparent",
                            color: "var(--text-main)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          {icon.icon}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium"
                    style={{ color: "var(--text-main)" }}
                  >
                    <input
                      type="checkbox"
                      checked={hideProgressBar}
                      onChange={(e) => setHideProgressBar(e.target.checked)}
                      className="rounded"
                      style={{ borderColor: "var(--border)" }}
                    />
                    Hide Progress Bar
                  </label>

                  <label
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium"
                    style={{ color: "var(--text-main)" }}
                  >
                    <input
                      type="checkbox"
                      checked={showActions}
                      onChange={(e) => setShowActions(e.target.checked)}
                      className="rounded"
                      style={{ borderColor: "var(--border)" }}
                    />
                    Show Actions
                  </label>
                </div>

                {showActions && (
                  <div
                    className="space-y-2 mt-3 pt-3 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <input
                      type="text"
                      value={actionLabel1}
                      onChange={(e) => setActionLabel1(e.target.value)}
                      placeholder="Action 1 label"
                      className="w-full px-3 py-2 text-sm border rounded-lg"
                      style={{ borderColor: "var(--border)" }}
                    />
                    <input
                      type="text"
                      value={actionLabel2}
                      onChange={(e) => setActionLabel2(e.target.value)}
                      placeholder="Action 2 label"
                      className="w-full px-3 py-2 text-sm border rounded-lg"
                      style={{ borderColor: "var(--border)" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Tips Card - Mobile */}
          <div
            className="rounded-xl shadow-sm border p-4 sm:p-6"
            style={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
              background: "linear-gradient(135deg, #f9f7ef 0%, #f5f0e5 100%)",
            }}
          >
            <h3
              className="font-semibold mb-2 text-sm sm:text-base"
              style={{ color: "var(--text-main)" }}
            >
              💡 Quick Tips
            </h3>
            <ul
              className="text-xs sm:text-sm space-y-1"
              style={{ color: "var(--text-main)" }}
            >
              <li>• Use variant presets for quick styling</li>
              <li>• Set duration to 0 for persistent toasts</li>
              <li>• Add actions for interactive notifications</li>
              <li>• Copy config to use in your code</li>
            </ul>
          </div>

          {/* Action Buttons - Mobile */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={showCustomToast}
              className="flex-1 text-white px-4 sm:px-6 py-3 rounded-xl font-medium transition-all hover:opacity-90 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
              style={{ backgroundColor: "var(--text-main)" }}
            >
              <FaPlay /> Show Toast
            </button>

            <button
              onClick={copyConfig}
              className="px-4 sm:px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{
                backgroundColor: "transparent",
                color: "var(--text-main)",
                border: "1px solid var(--border)",
              }}
            >
              <FaCopy /> Copy
            </button>

            <button
              onClick={resetDefaults}
              className="px-4 sm:px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{
                backgroundColor: "transparent",
                color: "var(--text-main)",
                border: "1px solid var(--border)",
              }}
            >
              <FaUndo /> Reset
            </button>
          </div>

          {/* Generated Code Card - Mobile */}
          <div
            className="rounded-xl shadow-sm border overflow-hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="p-3 sm:p-4"
              style={{ backgroundColor: "var(--code-panel)" }}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Generated Code
                </h3>
                <button
                  onClick={copyConfig}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-xs sm:text-sm"
                >
                  <FaCopy /> Copy
                </button>
              </div>
              <pre className="text-xs sm:text-sm text-green-400 overflow-x-auto">
                <code>{`toast({
  title: "${title}",
  description: "${description}",${
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

        {/* Desktop View - Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6">
          {/* Left Panel - Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Basic Settings Card */}
            <div
              className="rounded-xl shadow-sm border p-6"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <h2
                className="text-lg font-semibold mb-4 flex items-center gap-2"
                style={{ color: "var(--text-main)" }}
              >
                <FaCog /> Basic Settings
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{ borderColor: "var(--border)" }}
                    placeholder="Toast title"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{ borderColor: "var(--border)" }}
                    placeholder="Toast description"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Variant
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setVariant(v.id)}
                        className="p-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center gap-1"
                        style={{
                          backgroundColor:
                            variant === v.id ? v.color : "transparent",
                          color: variant === v.id ? "#fff" : "var(--text-main)",
                          border: "1px solid",
                          borderColor:
                            variant === v.id ? v.color : "var(--border)",
                        }}
                      >
                        <span>{v.icon}</span>
                        <span>{v.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Position
                  </label>
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {positions.map((p) => (
                      <option key={p} value={p}>
                        {p.replace("-", " ")}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: "var(--text-main)" }}
                  >
                    Duration (ms)
                  </label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    min="0"
                    step="500"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>
              </div>
            </div>

            {/* Appearance Settings Card */}
            <div
              className="rounded-xl shadow-sm border p-6"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <h2
                className="text-lg font-semibold mb-4 flex items-center gap-2"
                style={{ color: "var(--text-main)" }}
              >
                <FaPalette /> Appearance
              </h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--text-main)" }}
                    >
                      Theme
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setTheme("light")}
                        className="p-2 rounded-lg transition-colors"
                        style={{
                          backgroundColor:
                            theme === "light" ? "var(--border)" : "transparent",
                          color: "var(--text-main)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <FaSun />
                      </button>
                      <button
                        onClick={() => setTheme("dark")}
                        className="p-2 rounded-lg transition-colors"
                        style={{
                          backgroundColor:
                            theme === "dark" ? "var(--border)" : "transparent",
                          color: "var(--text-main)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <FaMoon />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      style={{ color: "var(--text-main)" }}
                    >
                      Background Color
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="h-10 w-20 rounded border"
                        style={{ borderColor: "var(--border)" }}
                      />
                      <input
                        type="text"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-lg"
                        style={{ borderColor: "var(--border)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      style={{ color: "var(--text-main)" }}
                    >
                      Text Color
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="h-10 w-20 rounded border"
                        style={{ borderColor: "var(--border)" }}
                      />
                      <input
                        type="text"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-lg"
                        style={{ borderColor: "var(--border)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      style={{ color: "var(--text-main)" }}
                    >
                      Accent Color
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="h-10 w-20 rounded border"
                        style={{ borderColor: "var(--border)" }}
                      />
                      <input
                        type="text"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-lg"
                        style={{ borderColor: "var(--border)" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      className="flex items-center gap-2 text-sm font-medium mb-2"
                      style={{ color: "var(--text-main)" }}
                    >
                      <input
                        type="checkbox"
                        checked={showIcon}
                        onChange={(e) => setShowIcon(e.target.checked)}
                        className="rounded"
                        style={{ borderColor: "var(--border)" }}
                      />
                      Show Icon
                    </label>

                    {showIcon && (
                      <div className="flex gap-2 mt-2">
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
                                selectedIcon === icon.id
                                  ? "var(--border)"
                                  : "transparent",
                              color: "var(--text-main)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {icon.icon}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: "var(--text-main)" }}
                    >
                      <input
                        type="checkbox"
                        checked={hideProgressBar}
                        onChange={(e) => setHideProgressBar(e.target.checked)}
                        className="rounded"
                        style={{ borderColor: "var(--border)" }}
                      />
                      Hide Progress Bar
                    </label>

                    <label
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: "var(--text-main)" }}
                    >
                      <input
                        type="checkbox"
                        checked={showActions}
                        onChange={(e) => setShowActions(e.target.checked)}
                        className="rounded"
                        style={{ borderColor: "var(--border)" }}
                      />
                      Show Actions
                    </label>
                  </div>

                  {showActions && (
                    <div
                      className="space-y-2 mt-3 pt-3 border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <input
                        type="text"
                        value={actionLabel1}
                        onChange={(e) => setActionLabel1(e.target.value)}
                        placeholder="Action 1 label"
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        style={{ borderColor: "var(--border)" }}
                      />
                      <input
                        type="text"
                        value={actionLabel2}
                        onChange={(e) => setActionLabel2(e.target.value)}
                        placeholder="Action 2 label"
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        style={{ borderColor: "var(--border)" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={showCustomToast}
                className="flex-1 text-white px-6 py-3 rounded-xl font-medium transition-all hover:opacity-90 flex items-center justify-center gap-2 shadow-lg"
                style={{ backgroundColor: "var(--text-main)" }}
              >
                <FaPlay /> Show Toast
              </button>

              <button
                onClick={copyConfig}
                className="px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--text-main)",
                  border: "1px solid var(--border)",
                }}
              >
                <FaCopy /> Copy
              </button>

              <button
                onClick={resetDefaults}
                className="px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--text-main)",
                  border: "1px solid var(--border)",
                }}
              >
                <FaUndo /> Reset
              </button>
            </div>
          </div>

          {/* Right Panel - Preview & Code */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Preview Card */}
            <div
              className="rounded-xl shadow-sm border p-6"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-main)" }}
              >
                Live Preview
              </h2>

              <div
                className="p-4 rounded-lg border-2 border-dashed transition-all"
                style={{
                  backgroundColor: variant === "default" ? bgColor : undefined,
                  color: variant === "default" ? textColor : undefined,
                  borderColor:
                    variant === "default" ? accentColor : "var(--border)",
                }}
              >
                <div className="flex items-start gap-3">
                  {showIcon && (
                    <div
                      className="text-2xl"
                      style={{
                        color: variant === "default" ? accentColor : undefined,
                      }}
                    >
                      {selectedIcon === "rocket" && <FaRocket />}
                      {selectedIcon === "heart" && <FaHeart />}
                      {selectedIcon === "star" && <FaStar />}
                      {selectedIcon === "smile" && <FaSmile />}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold">{title || "Toast Title"}</h3>
                    <p className="text-sm opacity-90">
                      {description || "Toast description"}
                    </p>

                    {showActions && (
                      <div className="flex gap-2 mt-3">
                        <button
                          className="px-3 py-1 text-white text-sm rounded"
                          style={{ backgroundColor: accentColor }}
                        >
                          {actionLabel1}
                        </button>
                        <button
                          className="px-3 py-1 text-sm rounded"
                          style={{
                            backgroundColor: "transparent",
                            border: "1px solid",
                            borderColor: accentColor,
                            color:
                              variant === "default" ? textColor : undefined,
                          }}
                        >
                          {actionLabel2}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {!hideProgressBar && (
                  <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-200"
                      style={{
                        width: "100%",
                        backgroundColor:
                          variant === "default" ? accentColor : undefined,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Quick Tips Card */}
            <div
              className="rounded-xl shadow-sm border p-6"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                background: "linear-gradient(135deg, #f9f7ef 0%, #f5f0e5 100%)",
              }}
            >
              <h3
                className="font-semibold mb-2"
                style={{ color: "var(--text-main)" }}
              >
                💡 Quick Tips
              </h3>
              <ul
                className="text-sm space-y-1"
                style={{ color: "var(--text-main)" }}
              >
                <li>• Use variant presets for quick styling</li>
                <li>• Set duration to 0 for persistent toasts</li>
                <li>• Add actions for interactive notifications</li>
                <li>• Copy config to use in your code</li>
              </ul>
            </div>

            {/* Generated Code Card */}
            <div
              className="rounded-xl shadow-sm border overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="p-4"
                style={{ backgroundColor: "var(--code-panel)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Generated Code
                  </h3>
                  <button
                    onClick={copyConfig}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                  >
                    <FaCopy /> Copy
                  </button>
                </div>
                <pre className="text-sm text-green-400 overflow-x-auto">
                  <code>{`toast({
  title: "${title}",
  description: "${description}",${
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
      </div>
    </div>
  );
}
