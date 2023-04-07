import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main>
      <h1>My Page</h1>
      <p>Slug: {slug}</p>
    </main>
  );
}
