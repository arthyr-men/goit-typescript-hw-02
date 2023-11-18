// Визначення типу для об'екта, який може мати будь-які властивості//
type AnyObject = Record<string, any>;

// Функція merge з використанням generics та типу для об'єкта
function merge<T extends AnyObject, U extends AnyObject>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Приклад використання
const mergedObject = merge({ name: 'John' }, { age: 25 });

console.log(mergedObject);