import { HiddenLetters, Layout } from "@/components";
import { getNextUniqueIndex, getRandomIntInclusive } from "@/utils";

export default function Home() {
  const index = getRandomIntInclusive();
  const uniqueIndex = getNextUniqueIndex(index);

  return (
    <Layout>
      <main className="p-5">
        <HiddenLetters index={uniqueIndex} />
      </main>
    </Layout>
  );
}
