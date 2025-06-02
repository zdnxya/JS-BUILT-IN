// map
const newMap = new Map()

newMap.set("key1",  10);
newMap.set("key2",  20);

console.info(newMap.get("key1"))
console.info(newMap.delete("key2"))
console.info(newMap.get("key2"))

console.info("====================")

const newSet = new Set();

newSet.add(20)
newSet.add(30)
newSet.delete(20)
newSet.add(40)
console.info(newSet)

newSet.forEach(value => console.info(value))
