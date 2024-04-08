import { NextRequest, NextResponse } from "next/server";
// import { unstable_noStore as noStore } from "next/cache";

export async function GET(request: NextRequest) {
  // https://github.com/orgs/vercel/discussions/4696
  //   noStore();
  try {
    const data = await getData();

    const stats = {
      data,
    };
    return NextResponse.json(JSON.stringify(stats), { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Unable to find user stats" },
      { status: 500 }
    );
  }
}

async function getData() {
  return {};
}
