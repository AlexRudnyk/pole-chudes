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
    const nextIndex = getRandomIntInclusive(0, tasks.length - 1);
    return getNextUniqueIndex(nextIndex);
  }
}

export function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
