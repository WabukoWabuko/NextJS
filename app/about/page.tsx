import Link from "next/link";

export default function About() {
  throw new Error("Just an Error");

  return (
    <>
      <h1>This is an About page</h1>
      <Link href={"/"}>Home Page</Link>
    </>
  );
}
