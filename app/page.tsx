import { HiddenLetters } from "@/components";
import tasks from "@/tasks";
import { getNextUniqueIndex, getRandomIntInclusive } from "@/utils";

export default function Home() {
  const index = getRandomIntInclusive(0, tasks.length - 1);
  const uniqueIndex = getNextUniqueIndex(index);

  return (
    <main className="p-5">
      <HiddenLetters index={uniqueIndex} />
    </main>
  );
}
