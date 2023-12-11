import { HiddenLetters } from "@/components";
import tasks from "@/tasks";

export default function Home() {
  function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const index = getRandomIntInclusive(0, tasks.length - 1);

  return (
    <main className="p-5">
      <HiddenLetters index={index} />
    </main>
  );
}
