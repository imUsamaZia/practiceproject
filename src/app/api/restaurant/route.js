import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    const data = await restaurantSchema.find();
    console.log(data);
    return NextResponse.json({ result: true, data });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ result: false, error: error.message });
  }
}
