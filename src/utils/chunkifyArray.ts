function chunkifyArray<T>(sourceArray: T[], chunkLength: number) {
  const chunks = [];
  let i = 0;
  const n = sourceArray.length;

  while (i < n) {
    chunks.push(sourceArray.slice(i, (i += chunkLength)));
  }

  return chunks;
}

export default chunkifyArray;
