export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    // Use the inner variables if needed, or return an array that includes them.
  }

  return [task, task2];
}
