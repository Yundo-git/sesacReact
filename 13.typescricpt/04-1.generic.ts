function arrElement<T>(arr:T[] , index :number):T | boolean {
     if(index > arr.length)
        return false;
        return arr[index];
}

console.log(arrElement<string>(['a'], 1)); // false
