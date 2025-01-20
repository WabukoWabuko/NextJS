import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Starting NextJS and TS</h1>
      <Link href={"/about"}>About</Link>
    </main>
  );
}
