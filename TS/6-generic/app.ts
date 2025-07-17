const obj: Record<string, number> = {
  a: 1,
  b: 2
}

function swapKeysAndValues<T extends string | number>(
  obj: Record<string, T>
): Record<T, string> {
  const result = {} as Record<T, string>;

  for (const key in obj) {
    const value = obj[key];
    result[value] = key;
  }

  return result;
}


const res = swapKeysAndValues(obj);
console.log(res);