import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "vibe-toast",
    type: "registry:component",
    title: "Vibe Toast",
    description: "Modern toast notifications for React",
    dependencies: ["vibe-toast"]
  });
}