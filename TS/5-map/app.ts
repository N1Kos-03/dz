class MapNode {
  constructor(
    public key: string,
    public value: any,
    public next: MapNode | null = null
  ) {}
}

class Map1 {
  private carts: Array<MapNode | null>;

  constructor(private array: number = 16) {
    this.carts = new Array(this.array).fill(null);
  }

  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % this.array;
  }

  add(key: string, value: any): void {
    const index = this.hash(key);
    let node = this.carts[index];

    while (node) {
      if (node.key === key) {
        node.value = value;
        return;
      }
      node = node.next;
    }

    this.carts[index] = new MapNode(key, value, this.carts[index]);
  }

  get(key: string): any | null {
    let node = this.carts[this.hash(key)];
    while (node) {
      if (node.key === key) return node.value;
      node = node.next;
    }
    return null;
  }

  remove(key: string): boolean {
    const index = this.hash(key);
    let node = this.carts[index];
    let prev: MapNode | null = null;

    while (node) {
      if (node.key === key) {
        if (prev) prev.next = node.next;
        else this.carts[index] = node.next;
        return true;
      }
      prev = node;
      node = node.next;
    }
    return false;
  }

  clear(): void {
    this.carts.fill(null);
  }
}

const map = new Map1();

map.add('London', 20);
map.add('Berlin', 25);
console.log(map.get('London')); 

map.remove('Berlin');
console.log(map.get('Berlin'));

map.clear();
console.log(map.get('London'));

