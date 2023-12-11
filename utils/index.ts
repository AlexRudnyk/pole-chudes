import tasks from "@/tasks";

let arrayOfUniqueIndexes: number[] = [];

export function getNextUniqueIndex(index: number): number {
  if (!arrayOfUniqueIndexes.includes(index)) {
    arrayOfUniqueIndexes.push(index);

    if (arrayOfUniqueIndexes.length === tasks.length) {
      arrayOfUniqueIndexes = [];
    }

    return index;
  } else {
    const nextIndex = getRandomIntInclusive();
    return getNextUniqueIndex(nextIndex);
  }
}

export function getRandomIntInclusive(): number {
  // Генерация случайного индекса
  const randomIndex = Math.floor(Math.random() * tasks.length);
  return randomIndex;
}
