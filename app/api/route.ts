import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const likes = 0;
    const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
    return Response.json({ rows });
}