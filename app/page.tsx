import { HiddenLetters } from "@/components";
import { getNextUniqueIndex, getRandomIntInclusive } from "@/utils";

export default function Home() {
  const index = getRandomIntInclusive();
  const uniqueIndex = getNextUniqueIndex(index);

  return (
    <main className="p-5">
      <HiddenLetters index={uniqueIndex} />
    </main>
  );
}
