interface IA {
  a: number;
  b: string;
}

interface IB {
  a: number;
  c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

interface IDifference {
  b: string;
}

let v0: IDifference = difference(a, b);

function difference<
  A extends object,
  B extends object
>(a: A, b: B): Omit<A, Extract<keyof A, keyof B>> {
  const result = {} as Omit<A, Extract<keyof A, keyof B>>;

  for (const key in a) {
    if (!(key in b)) {
      (result as any)[key] = a[key];
    }
  }

  return result;
}

console.log(v0);