"use client";

import React from "react";
import { Toaster, toast } from "vibe-toast";
import {
  IconCheck,
  IconX,
  IconAlertTriangle,
  IconInfoCircle,
  IconLoader2,
  IconRefresh,
  IconExternalLink,
  IconTrash,
  IconCopy,
  IconBell,
  IconClock,
  IconCloudUpload,
  IconDownload,
  IconHeart,
  IconStar,
  IconRocket,
  IconGift,
  IconWand,
  IconPalette,
  IconSettings,
  IconArrowBackUp,
  IconUserPlus,
  IconShoppingCart,
  IconCreditCard,
  IconCalendarEvent,
  IconSun,
  IconMoon,
  IconDeviceDesktop,
} from "@tabler/icons-react";

export default function ToastExamples() {
  // Promise Examples
  const showPromise = () => {
    const promise = new Promise((res) =>
      setTimeout(() => res({ name: "vibe-toast" }), 2000),
    );
    toast.promise(promise, {
      loading: "Deploying components...",
      success: (data) => `${data.name} is now live!`,
      error: "Deployment failed",
    });
  };

  const showUploadPromise = () => {
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
      loading: "Uploading image...",
      success: (data) => `${data.name} (${data.size}) uploaded!`,
      error: (err) => `Upload failed: ${err.message}`,
    });
  };

  // Action Examples
  const showUndoAction = () => {
    toast({
      title: "File Deleted",
      description: "Moved to trash bin",
      variant: "warning",
      actions: [
        {
          label: "Undo",
          onClick: () => toast.success("Restored!"),
          variant: "primary",
        },
      ],
    });
  };

  const showConfirmAction = () => {
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
    });
  };

  const showMultiAction = () => {
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
    });
  };

  // Custom Icon Examples
  const showRocketToast = () => {
    toast({
      title: "Launching!",
      description: "Application is starting up",
      icon: <IconRocket />,
      style: { accent: "#a855f7" },
    });
  };

  const showHeartToast = () => {
    toast({
      title: "Thank you!",
      description: "Your support means a lot",
      icon: <IconHeart />,
      style: { accent: "#f43f5e" },
    });
  };

  const showStarToast = () => {
    toast({
      title: "New achievement!",
      description: "You've earned a gold star",
      icon: <IconStar />,
      style: { accent: "#f59e0b" },
    });
  };

  // Duration Examples
  const showShortToast = () => {
    toast.success("Quick message", { duration: 1500 });
  };

  const showLongToast = () => {
    toast.info("Important notice - please read carefully", { duration: 8000 });
  };

  const showPersistentToast = () => {
    toast.warning("This toast won't auto-dismiss - click X to close", {
      duration: 0,
    });
  };

  // Custom Style Examples
  const showGlassToast = () => {
    toast("Glassmorphism", {
      style: {
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      },
    });
  };

  const showGradientToast = () => {
    toast({
      title: "System Update",
      description: "New features available",
      style: {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        accent: "#fff",
      },
    });
  };

  const showDarkToast = () => {
    toast({
      title: "Dark theme",
      description: "Custom dark background",
      style: { background: "#1a1a1a", color: "#fff", accent: "#8b5cf6" },
    });
  };

  // Variant Examples
  const showVariantSuccess = () => {
    toast({
      variant: "success",
      title: "Changes saved",
      description: "Your profile has been updated",
    });
  };

  const showVariantError = () => {
    toast({
      variant: "error",
      title: "Upload failed",
      description: "File size exceeds 10MB limit",
    });
  };

  const showVariantWarning = () => {
    toast({
      variant: "warning",
      title: "Low disk space",
      description: "Only 500MB remaining",
    });
  };

  const showVariantInfo = () => {
    toast({
      variant: "info",
      title: "New message",
      description: "You have 3 unread messages",
    });
  };

  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Toaster position="top-right" theme="light" />

      <div className="max-w-fit px-4 py-6 sm:px-6 sm:py-8">
        <header className="text-left mb-8">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text-main)" }}
          >
            Toast Examples
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Click any button to preview the toast effect in action
          </p>
        </header>

        {/* Basic Toast Types */}
        <div className=" py-4 md-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
            <IconBell size={14} /> Toast Types
          </h3>
          <div className="flex flex-wrap gap-2">
            <ExampleBtn label="Default" onClick={() => toast("Hello World")} />
            <ExampleBtn
              label="Success"
              onClick={() => toast.success("Action completed")}
              icon={<IconCheck size={14} />}
            />
            <ExampleBtn
              label="Error"
              onClick={() => toast.error("Something went wrong")}
              icon={<IconX size={14} />}
            />
            <ExampleBtn
              label="Warning"
              onClick={() => toast.warning("Check your settings")}
              icon={<IconAlertTriangle size={14} />}
            />
            <ExampleBtn
              label="Info"
              onClick={() => toast.info("New update available")}
              icon={<IconInfoCircle size={14} />}
            />
          </div>
        </div>

        {/* Variants */}
        <div className="">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
            <IconPalette size={14} /> Variants
          </h3>
          <div className="flex flex-wrap gap-2">
            <ExampleBtn label="Variant Success" onClick={showVariantSuccess} />
            <ExampleBtn label="Variant Error" onClick={showVariantError} />
            <ExampleBtn label="Variant Warning" onClick={showVariantWarning} />
            <ExampleBtn label="Variant Info" onClick={showVariantInfo} />
          </div>
        </div>

        {/* With Description */}
        <div className="py-4 md-2" >
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
            <IconCopy size={14} /> With Description
          </h3>
          <div className="flex flex-wrap gap-2">
            <ExampleBtn
              label="Warning + Description"
              onClick={() =>
                toast.warning("Low Storage", {
                  description: "You have less than 10% disk space remaining.",
                })
              }
            />
            <ExampleBtn
              label="Error + Description"
              onClick={() =>
                toast.error("Upload Failed", {
                  description: "File size exceeds the 50MB limit.",
                })
              }
            />
            <ExampleBtn
              label="Success + Description"
              onClick={() =>
                toast.success("Profile Updated", {
                  description: "Your changes have been saved.",
                })
              }
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className=" py-4 md-2" >
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
            <IconRefresh size={14} /> Action Buttons
          </h3>
          <div className="flex flex-wrap gap-2">
            <ExampleBtn
              label="Undo Action"
              onClick={showUndoAction}
              icon={<IconArrowBackUp size={14} />}
            />
            <ExampleBtn
              label="Confirm/Cancel"
              onClick={showConfirmAction}
              icon={<IconTrash size={14} />}
            />
            <ExampleBtn
              label="Multiple Actions"
              onClick={showMultiAction}
              icon={<IconExternalLink size={14} />}
            />
          </div>
        </div>

        {/* Promise API */}
        <div className=" py-4 md-2" >
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
            <IconLoader2 size={14} /> Promise API
          </h3>
          <div className="flex flex-wrap gap-2">
            <ExampleBtn
              label="Simple Promise"
              onClick={showPromise}
              icon={<IconLoader2 size={14} className="animate-spin" />}
            />
            <ExampleBtn
              label="Upload Promise (50/50)"
              onClick={showUploadPromise}
              icon={<IconCloudUpload size={14} />}
            />
          </div>
        </div>

        {/* Custom Icons */}
        <div className=" py-4 md-2" >
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
            <IconRocket size={14} /> Custom Icons
          </h3>
          <div className="flex flex-wrap gap-2">
            <ExampleBtn
              label="Rocket"
              onClick={showRocketToast}
              icon={<IconRocket size={14} />}
            />
            <ExampleBtn
              label="Heart"
              onClick={showHeartToast}
              icon={<IconHeart size={14} />}
            />
            <ExampleBtn
              label="Star"
              onClick={showStarToast}
              icon={<IconStar size={14} />}
            />
            <ExampleBtn
              label="Gift"
              onClick={() =>
                toast({ title: "Special offer!", icon: <IconGift /> })
              }
              icon={<IconGift size={14} />}
            />
          </div>
        </div>
        {/* Dismiss All */}
        <div className=" py-4" >
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
            <IconTrash size={14} /> Utilities
          </h3>
          <div className="flex flex-wrap gap-2">
            <ExampleBtn
              label="Dismiss All"
              onClick={() => toast.dismissAll()}
              icon={<IconTrash size={14} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Button Component with Playground UI
const ExampleBtn = ({ label, onClick, icon }) => (
  <button
    onClick={onClick}
    className="group flex items-center gap-2 px-4 py-2 rounded-4xl text-xs font-medium transition-all hover:shadow-md active:scale-[0.98]"
    style={{
      backgroundColor: "var(--card)",
      color: "var(--text-main)",
      border: "1px solid rgba(0,0,0,0.08)",
    }}
  >
    {icon && (
      <span className="opacity-60 group-hover:opacity-100 transition-opacity">
        {icon}
      </span>
    )}
    {label}
  </button>
);
