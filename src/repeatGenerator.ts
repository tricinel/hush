const repeatGenerator = function*<T>(
  set: T[],
  repeat: number
): IterableIterator<T> {
  let setIndex = 0;
  const len = set.length;
  const max = repeat * len;

  for (let i = 0; i < max; i++) {
    yield set[setIndex % len];
    setIndex = (setIndex + 1) % len;
  }
};

export default repeatGenerator;
