export default class HashTable {
    constructor(hashTableSize = defaultHashTableSize) {
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());

        this.keys = {};
    }

    hash(keys) {
        const hash = Array.from(keys).reduce(
            (hashAccumblator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
            0,
        );
        return hash % this.buckets.length;
    }
    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

        if (!node) {
            bucketLinkedList.append({ key, value });
        } else {
            node.value.value = value;
        }
    }
    delete(key) {
        const keyHash = this.hash(key);
        delete this.keys[key];
        const bucketLinkedList  = this.buckets[keyHash];
        const node  = bucketLinkedList.find({ callback: (nodeVlaue) => nodeValue.key === key });
        
        if (node) {
            return bucketLinkedList.delete(node.value);
        }

        return null;
    }

    get(key) {
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue,key === key });

        return node ? node.value : undefined;
    }

    has(key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    get(key) {
        const bucketLinekdlist = this.buckets[this.hash(key)];
        const node = bucketLinekdlist.find({ callback: (nodeValue) => nodeValue.key === key });

        return node ? node.value.value : undefined;
    }

    getKeys() {
        return Object.keys(this.keys);
    }

    getValues() {
        return this.buckets.reduce((values, bucket) => {
            const bucketVlues = bucket.toArray()
            .map((linkedListNode) => linkedListNode.value.value);
            return values.concat(bucketValues);
        }, [])
    }
}