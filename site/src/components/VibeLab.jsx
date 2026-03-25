"use client";

import React, { useState } from "react";
import { Toaster, toast } from "vibe-toast";
import {
  IconCheck,
  IconX,
  IconHourglassHigh,
  IconCompass,
  IconTerminal2,
  IconCode,
  IconLayersIntersect,
  IconCopy,
  IconRocket,
  IconTrash,
  IconInfoCircle,
  IconBell,
  IconClock,
  IconCloudUpload,
  IconDownload,
  IconAlertTriangle,
  IconHelp,
  IconHeart,
  IconStar,
  IconGift,
  IconWand,
  IconPalette,
  IconSettings,
  IconArrowBackUp,
  IconRefresh,
  IconUserPlus,
  IconShoppingCart,
  IconCreditCard,
  IconCash,
  IconCalendarEvent,
  IconSun,
  IconMoon,
  IconDeviceDesktop,
  IconTerminal,
} from "@tabler/icons-react";

export default function VibeLab() {
  const [activeCode, setActiveCode] = useState(
    'toast.success("Successfully toasted!")',
  );
  const [position, setPosition] = useState("top-center");
  const [theme, setTheme] = useState("light");

  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  const themes = [
    { id: "light", label: "Light", icon: <IconSun size={16} /> },
    { id: "dark", label: "Dark", icon: <IconMoon size={16} /> },
    { id: "system", label: "System", icon: <IconDeviceDesktop size={16} /> },
  ];

  // Shorthand Examples
  const shorthandExamples = [
    {
      id: "shorthandSuccess",
      label: "Success",
      icon: <IconCheck className="text-emerald-500" />,
      code: `toast.success("Action Confirmed")`,
      action: () => toast.success("Action Confirmed"),
    },
    {
      id: "shorthandError",
      label: "Error",
      icon: <IconX className="text-rose-500" />,
      code: `toast.error("Request Failed")`,
      action: () => toast.error("Request Failed"),
    },
    {
      id: "shorthandInfo",
      label: "Info",
      icon: <IconInfoCircle className="text-sky-500" />,
      code: `toast.info("Update Available")`,
      action: () => toast.info("Update Available"),
    },
    {
      id: "shorthandWarning",
      label: "Warning",
      icon: <IconAlertTriangle className="text-amber-500" />,
      code: `toast.warning("System Alert")`,
      action: () => toast.warning("System Alert"),
    },
  ];

  // Variant Examples
  const variantExamples = [
    {
      id: "variant-success",
      label: "Variant Success",
      icon: <IconCheck className="text-emerald-500" />,
      code: `toast({\n  variant: "success",\n  title: "Changes saved",\n  description: "Your profile has been updated"\n})`,
      action: () =>
        toast({
          variant: "success",
          title: "Changes saved",
          description: "Your profile has been updated",
        }),
    },
    {
      id: "variant-error",
      label: "Variant Error",
      icon: <IconX className="text-rose-500" />,
      code: `toast({\n  variant: "error",\n  title: "Upload failed",\n  description: "File size too large"\n})`,
      action: () =>
        toast({
          variant: "error",
          title: "Upload failed",
          description: "File size exceeds 10MB limit",
        }),
    },
    {
      id: "variant-warning",
      label: "Variant Warning",
      icon: <IconAlertTriangle className="text-amber-500" />,
      code: `toast({\n  variant: "warning",\n  title: "Low disk space",\n  description: "Clean up to continue"\n})`,
      action: () =>
        toast({
          variant: "warning",
          title: "Low disk space",
          description: "Only 500MB remaining",
        }),
    },
    {
      id: "variant-info",
      label: "Variant Info",
      icon: <IconInfoCircle className="text-sky-500" />,
      code: `toast({\n  variant: "info",\n  title: "New message",\n  description: "You have 3 unread messages"\n})`,
      action: () =>
        toast({
          variant: "info",
          title: "New message",
          description: "You have 3 unread messages",
        }),
    },
  ];

  // Action Examples
  const actionExamples = [
    {
      id: "action-undo",
      label: "Undo Action",
      icon: <IconArrowBackUp className="text-blue-500" />,
      code: `toast({\n  title: "Item deleted",\n  actions: [\n    { label: "Undo", onClick: handleUndo }\n  ]\n})`,
      action: () =>
        toast({
          title: "Item deleted",
          description: "Post moved to trash",
          variant: "warning",
          actions: [
            {
              label: "Undo",
              variant: "primary",
              onClick: () => toast.success("Item restored!"),
            },
          ],
        }),
    },
    {
      id: "action-confirm",
      label: "Confirm/Cancel",
      icon: <IconHelp className="text-purple-500" />,
      code: `toast({\n  title: "Confirm action",\n  actions: [\n    { label: "Yes", onClick: handleYes },\n    { label: "No", onClick: handleNo }\n  ]\n})`,
      action: () =>
        toast({
          title: "Delete permanently?",
          description: "This action cannot be undone",
          variant: "error",
          actions: [
            {
              label: "Confirm",
              variant: "primary",
              onClick: () => toast.success("Deleted!"),
            },
            {
              label: "Cancel",
              variant: "ghost",
              onClick: () => toast.info("Cancelled"),
            },
          ],
        }),
    },
    {
      id: "action-multi",
      label: "Multiple Actions",
      icon: <IconLayersIntersect className="text-indigo-500" />,
      code: `toast({\n  title: "File uploaded",\n  actions: [\n    { label: "Share" },\n    { label: "Download" },\n    { label: "Delete" }\n  ]\n})`,
      action: () =>
        toast({
          title: "File uploaded",
          description: "document.pdf (2.4 MB)",
          variant: "success",
          actions: [
            {
              label: "Share",
              variant: "primary",
              onClick: () => toast.info("Share dialog opened"),
            },
            {
              label: "Download",
              variant: "secondary",
              onClick: () => toast.success("Download started"),
            },
            {
              label: "Delete",
              variant: "ghost",
              onClick: () => toast.warning("File moved to trash"),
            },
          ],
        }),
    },
    {
      id: "action-retry",
      label: "Retry Action",
      icon: <IconRefresh className="text-amber-500" />,
      code: `toast({\n  variant: "error",\n  title: "Connection lost",\n  actions: [\n    { label: "Retry", onClick: retry }\n  ]\n})`,
      action: () =>
        toast({
          variant: "error",
          title: "Connection lost",
          description: "Unable to reach server",
          actions: [
            {
              label: "Retry",
              variant: "primary",
              onClick: () => {
                toast.loading("Reconnecting...");
                setTimeout(() => toast.success("Connected!"), 1500);
              },
            },
          ],
        }),
    },
  ];

  // Promise Examples
  const promiseExamples = [
    {
      id: "promise-simple",
      label: "Simple Promise",
      icon: <IconHourglassHigh className="text-sky-500" />,
      code: `toast.promise(saveData(), {\n  loading: 'Saving...',\n  success: 'Saved!',\n  error: 'Failed'\n})`,
      action: () => {
        const promise = new Promise((res) => setTimeout(res, 2000));
        toast.promise(promise, {
          loading: "Saving changes...",
          success: "Changes saved successfully!",
          error: "Failed to save",
        });
      },
    },
    {
      id: "promise-upload",
      label: "Upload Promise",
      icon: <IconCloudUpload className="text-blue-500" />,
      code: `toast.promise(uploadFile(), {\n  loading: 'Uploading...',\n  success: (data) => \`\${data.name} uploaded\`,\n  error: 'Upload failed'\n})`,
      action: () => {
        const promise = new Promise((res, rej) => {
          setTimeout(() => {
            if (Math.random() > 0.3) {
              res({ name: "image.jpg", size: "2.4MB" });
            } else {
              rej(new Error("Network error"));
            }
          }, 2500);
        });
        toast.promise(promise, {
          loading: "Uploading image.jpg...",
          success: (data) => `${data.name} (${data.size}) uploaded!`,
          error: (err) => `Upload failed: ${err.message}`,
        });
      },
    },
    {
      id: "promise-multi",
      label: "Multi-stage",
      icon: <IconDownload className="text-green-500" />,
      code: `const steps = [\n  'Downloading',\n  'Installing',\n  'Cleaning up'\n];`,
      action: () => {
        let step = 0;
        const steps = [
          "Downloading package...",
          "Installing dependencies...",
          "Cleaning up...",
        ];

        const promise = new Promise((res) => {
          const interval = setInterval(() => {
            if (step < steps.length) {
              toast.loading(steps[step]);
              step++;
            } else {
              clearInterval(interval);
              res("Complete!");
            }
          }, 1000);
        });

        toast.promise(promise, {
          loading: steps[0],
          success: "Installation complete! 🎉",
          error: "Installation failed",
        });
      },
    },
  ];

  // Icon Examples
  const iconExamples = [
    {
      id: "icon-rocket",
      label: "Rocket",
      icon: <IconRocket className="text-purple-500" />,
      code: `toast({\n  title: "Launching!",\n  icon: <IconRocket />,\n  style: { accent: "#a855f7" }\n})`,
      action: () =>
        toast({
          title: "Launching!",
          description: "Application is starting up",
          icon: <IconRocket />,
          style: { accent: "#a855f7" },
        }),
    },
    {
      id: "icon-heart",
      label: "Heart",
      icon: <IconHeart className="text-rose-500" />,
      code: `toast({\n  title: "Thank you!",\n  icon: <IconHeart />,\n  style: { accent: "#f43f5e" }\n})`,
      action: () =>
        toast({
          title: "Thank you!",
          description: "Your support means a lot",
          icon: <IconHeart />,
          style: { accent: "#f43f5e" },
        }),
    },
    {
      id: "icon-star",
      label: "Star",
      icon: <IconStar className="text-amber-500" />,
      code: `toast({\n  title: "New achievement!",\n  icon: <IconStar />,\n  style: { accent: "#f59e0b" }\n})`,
      action: () =>
        toast({
          title: "New achievement!",
          description: "You've earned a gold star",
          icon: <IconStar />,
          style: { accent: "#f59e0b" },
        }),
    },
    {
      id: "icon-gift",
      label: "Gift",
      icon: <IconGift className="text-pink-500" />,
      code: `toast({\n  title: "Special offer!",\n  icon: <IconGift />,\n  style: { accent: "#ec4899" }\n})`,
      action: () =>
        toast({
          title: "Special offer!",
          description: "50% off your next purchase",
          icon: <IconGift />,
          style: { accent: "#ec4899" },
        }),
    },
  ];

  // Custom Style Examples
  const styleExamples = [
    {
      id: "style-dark",
      label: "Dark Mode",
      icon: <IconPalette className="text-gray-600" />,
      code: `toast({\n  title: "Dark theme",\n  style: {\n    background: "#1a1a1a",\n    color: "#fff"\n  }\n})`,
      action: () =>
        toast({
          title: "Dark theme",
          description: "Custom dark background",
          style: { background: "#1a1a1a", color: "#fff", accent: "#8b5cf6" },
        }),
    },
    {
      id: "style-gradient",
      label: "Gradient",
      icon: <IconWand className="text-[#AA8A47]" />, 
  code: `toast({\n  title: "System Update",\n  style: {\n    background: "rgba(26, 26, 26, 0.85)",\n    backdropFilter: "blur(10px)",\n    border: "1px solid rgba(170, 138, 71, 0.3)",\n    color: "#fff"\n  }\n})`,
      action: () =>
        toast({
          title: "Gradient vibe",
          description: "Smooth color transition",
          style: {
            background: "rgba(26, 26, 26, 0.9)", // Deep charcoal with slight transparency
            backdropFilter: "blur(12px)", // The "Hot" frosted effect
            border: "1px solid #AA8A47", // Your signature Gen.G Gold border
            color: "#fff",
            accent: "#AA8A47",
          },
        }),
    },
    {
      id: "style-border",
      label: "Bordered",
      icon: <IconSettings className="text-slate-500" />,
      code: `toast({\n  title: "Bordered style",\n  style: {\n    border: "2px solid #3b82f6",\n    background: "transparent"\n  }\n})`,
      action: () =>
        toast({
          title: "Bordered style",
          description: "Clean outline design",
          style: {
            border: "2px solid #3b82f6",
            background: "transparent",
            color: "var(--text-main)",
          },
        }),
    },
  ];

  // Duration Examples
  const durationExamples = [
    {
      id: "duration-short",
      label: "Short (1.5s)",
      icon: <IconClock className="text-emerald-500" />,
      code: `toast.success("Quick message", { duration: 1500 })`,
      action: () => toast.success("Quick message", { duration: 1500 }),
    },
    {
      id: "duration-long",
      label: "Long (8s)",
      icon: <IconClock className="text-amber-500" />,
      code: `toast.info("Important notice", { duration: 8000 })`,
      action: () =>
        toast.info("Important notice - please read carefully", {
          duration: 8000,
        }),
    },
    {
      id: "duration-persist",
      label: "Persistent",
      icon: <IconBell className="text-rose-500" />,
      code: `toast.warning("Click to dismiss", { duration: 0 })`,
      action: () =>
        toast.warning("This toast won't auto-dismiss", { duration: 0 }),
    },
  ];

  // Application Examples
  const appExamples = [
    {
      id: "app-auth",
      label: "Auth Events",
      icon: <IconUserPlus className="text-blue-500" />,
      code: `// Login success\ntoast.success("Welcome back!")\n\n// Logout\ntoast.info("Logged out")`,
      action: () => {
        toast.success("Welcome back, John! 👋");
        setTimeout(() => toast.info("Session restored"), 500);
      },
    },
    {
      id: "app-cart",
      label: "Shopping Cart",
      icon: <IconShoppingCart className="text-green-500" />,
      code: `toast.success("Item added to cart")\ntoast.info("Cart updated")`,
      action: () => {
        toast.success("Product added to cart", {
          icon: <IconShoppingCart />,
          actions: [
            {
              label: "View Cart",
              onClick: () => toast.info("Opening cart..."),
            },
          ],
        });
      },
    },
    {
      id: "app-payment",
      label: "Payment",
      icon: <IconCreditCard className="text-purple-500" />,
      code: `toast.loading("Processing...")\ntoast.success("Payment complete!")`,
      action: () => {
        toast.loading("Processing payment...");
        setTimeout(
          () =>
            toast.success("Payment successful! 🎉", {
              icon: <IconCash />,
              actions: [{ label: "View Receipt", onClick: () => {} }],
            }),
          2000,
        );
      },
    },
    {
      id: "app-event",
      label: "Calendar",
      icon: <IconCalendarEvent className="text-indigo-500" />,
      code: `toast.success("Event created")\ntoast.info("Reminder set")`,
      action: () => {
        toast.success("Meeting scheduled for tomorrow", {
          icon: <IconCalendarEvent />,
          actions: [
            {
              label: "Add to Calendar",
              onClick: () => toast.success("Added!"),
            },
          ],
        });
      },
    },
  ];

  const handlePositionChange = (pos) => {
    if (pos === position) return;
    toast.dismissAll();
    setPosition(pos);
    setTimeout(() => {
      toast.success(`Position updated: ${pos}`);
    }, 50);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    toast.success(`Theme switched to ${newTheme} mode`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeCode);
    toast.success("Code copied");
  };

  const showRandomToast = () => {
    const allActions = [
      () => toast.success("Random success!"),
      () => toast.error("Random error!"),
      () => toast.info("Random info!"),
      () => toast.warning("Random warning!"),
    ];
    const random = allActions[Math.floor(Math.random() * allActions.length)];
    random();
  };

  return (
    <div
      className="p-4 md:p-4 min-h-screen font-sans antialiased"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Control Bar */}
        <div className="flex flex-wrap gap-4 justify-between items-center mb-12 p-4 bg-[var(--card)] rounded-lg shadow-sm ring-1 ring-black/10">
          <div className="flex gap-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => handleThemeChange(t.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  theme === t.id
                    ? "bg-[var(--text-main)] text-white shadow-lg scale-105"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t.icon}
              </button>
            ))}
          </div>

          <button
            onClick={showRandomToast}
            className="px-5 py-2 rounded-lg text-sm font-medium text-neutral-800 shadow-sm ring-1 ring-black/10 transition-all flex items-center gap-2 bg-[radial-gradient(circle_at_top_left,#f3f4f6_0%,transparent_60%),radial-gradient(circle_at_bottom_right,#e5e7eb_0%,transparent_60%)] hover:bg-neutral-50 hover:shadow-md hover:scale-[1.02]"
          >
            <IconWand size={16} /> Random Toast
          </button>

          <button
            onClick={() => toast.dismissAll()}
            className="px-4 py-2 border border-[var(--border)]/20 rounded-xl text-sm font-medium hover:bg-gray-100 transition-all"
          >
            Dismiss All
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Panel - Buttons */}
          <div className="space-y-10 max-h-[800px] overflow-y-auto pr-4 custom-scroll">
            {/* Shorthand Examples */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 flex items-center gap-2">
                <IconCode /> Shorthand Methods
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {shorthandExamples.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveCode(item.code);
                      item.action();
                    }}
                    className="flex flex-col items-center gap-2 bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]/10 hover:border-[var(--border)]/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Variant Examples */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 flex items-center gap-2">
                <IconLayersIntersect /> Variants
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {variantExamples.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveCode(item.code);
                      item.action();
                    }}
                    className="flex flex-col items-center gap-2 bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]/10 hover:border-[var(--border)]/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Action Examples */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 flex items-center gap-2">
                <IconTrash /> Action Buttons
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {actionExamples.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveCode(item.code);
                      item.action();
                    }}
                    className="flex flex-col items-center gap-2 bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]/10 hover:border-[var(--border)]/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Promise Examples */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 flex items-center gap-2">
                <IconHourglassHigh /> Promise API
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {promiseExamples.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveCode(item.code);
                      item.action();
                    }}
                    className="flex flex-col items-center gap-2 bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]/10 hover:border-[var(--border)]/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Icon Examples */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 flex items-center gap-2">
                <IconRocket /> Custom Icons
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {iconExamples.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveCode(item.code);
                      item.action();
                    }}
                    className="flex flex-col items-center gap-2 bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]/10 hover:border-[var(--border)]/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Style Examples */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 flex items-center gap-2">
                <IconPalette /> Custom Styles
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {styleExamples.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveCode(item.code);
                      item.action();
                    }}
                    className="flex flex-col items-center gap-2 bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]/10 hover:border-[var(--border)]/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Duration Examples */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 flex items-center gap-2">
                <IconClock /> Duration Control
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {durationExamples.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveCode(item.code);
                      item.action();
                    }}
                    className="flex flex-col items-center gap-2 bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]/10 hover:border-[var(--border)]/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Application Examples */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 flex items-center gap-2">
                <IconBell /> Real-world Examples
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {appExamples.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveCode(item.code);
                      item.action();
                    }}
                    className="flex flex-col items-center gap-2 bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]/10 hover:border-[var(--border)]/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Position Controller */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 flex items-center gap-2">
                <IconCompass /> Position Controller
              </h3>
              <div className="bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]/10 grid grid-cols-3 gap-2">
                {positions.map((pos) => (
                  <button
                    key={pos}
                    onClick={() => handlePositionChange(pos)}
                    className={`py-2 px-1 text-xs font-medium rounded-lg border transition-all ${
                      position === pos
                        ? "bg-[var(--text-main)] text-white border-[var(--text-main)] shadow-md"
                        : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    {pos.replace("-", " ")}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Right Panel - Code Display */}
          <div className="w-full overflow-hidden lg:sticky lg:top-10">
            <div
              className="rounded-lg p-8 shadow-md ring-1 ring-white/90 relative min-h-[400px] flex items-center group overflow-hidden border"
              style={{ backgroundColor: "var(--code-panel)" }}
            >
              {/* Window Controls */}
              <div className="absolute top-6 left-8 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>

              {/* Copy Button */}
              <button
                onClick={copyToClipboard}
                className="absolute top-6 right-8 text-white/20 hover:text-white transition-colors p-2 bg-white/5 rounded-lg border border-white/5"
                title="Copy Code"
              >
                <IconCopy />
              </button>

              {/* Code Display */}
              <pre className="font-mono text-sm md:text-base leading-relaxed text-orange-50/90 w-full overflow-x-auto pt-8">
                <code>{activeCode}</code>
              </pre>

              {/* Footer */}
              <div className="absolute bottom-6 right-8 flex items-center gap-2 text-[8px] font-bold text-white/40 tracking-wider uppercase">
                <IconTerminal /> vibe-toast • 50+ examples
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toaster Component */}
      <Toaster key={position} theme={theme} position={position} />

      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 20px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}