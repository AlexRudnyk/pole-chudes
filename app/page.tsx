import { HiddenLetters, Layout } from "@/components";

export default function Home() {
  return (
    <Layout>
      <main className="p-5 w-[1280px] mx-auto">
        <HiddenLetters />
      </main>
    </Layout>
  );
}
