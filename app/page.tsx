import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid items-center align-middle justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <p>Hi i am the homepage</p>
      <Link href="/login">
        Login
      </Link>
    </div>
  );
}
