import Link from "next/link";

export default function Home() {
  return (
    <main className="px-16 py-8">
      <h1 className="text-4xl font-bold mb-6">Pangutang Mo Diri</h1>
      <Link
        href="/customers"
        className="bg-blue-600 px-4 py-2 text-white rounded"
      >
        Go to customers
      </Link>
    </main>
  );
}
