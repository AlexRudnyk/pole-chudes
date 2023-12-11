import { HiddenLetters, Layout } from "@/components";
import { getNextUniqueIndex, getRandomIntInclusive } from "@/utils";

export default function Home() {
  const index = getRandomIntInclusive();
  const uniqueIndex = getNextUniqueIndex(index);

  return (
    <Layout>
      <main className="p-5 w-[1280px] mx-auto">
        <HiddenLetters index={uniqueIndex} />
      </main>
    </Layout>
  );
}
