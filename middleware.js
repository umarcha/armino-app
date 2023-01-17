import { NextResponse } from "next/server";

export default function middleware(req) {
  let token = localStorage.getItem("token");
  let url = req.url;

  if (!token && url.includes("/users") && url.includes("/events")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (token && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/dashboard");
  }
}
