import { NextResponse } from "next/server";

// ** Fetch Data From Api Dummy json
export async function GET() {
  const res = await fetch("http://safaryapi.runasp.net/api/Tours/GetAll" ,{cache:"no-store"});
  const data = await res.json();
  return NextResponse.json(data);
}