export class HashMap {
    constructor(capacity , loadFactor) {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,];
        this.length =0;

    }
    hash(key){
            let hashing =0;
            const prime = 31;
            let x =0;
            while(x<key.length){
                hashing = hashing* prime + key.charCodeAt(x);
                hashing = hashing % this.capacity; 
                x=x+1;
            }
            return hashing;
    }
    check(boundary){
       if(boundary<0 || boundary >= this.capacity){
        throw "You're out of bounds";
        }
    }
    set(key, value){
        const index = this.hash(key);
        this.check(index);
        if (this.buckets[index] === null) {
            this.buckets[index] = [];
          }
          let x = 0;
          while( x < this.buckets[index].length) {
            const [storedKey, storedValue] = this.buckets[index][x];
            if (storedKey === key) {
              this.buckets[index][x][1] = value; 
              return;
            }
            x++;
          }
          this.buckets[index].push([key, value]);
          this.length++;
    }
    get(key){
        const index = this.hash(key);
        this.check(index);
        if (this.buckets[index] !== null) {
            for (let i = 0; i < this.buckets[index].length; i++) {
              const [storedKey, storedValue] = this.buckets[index][i];
              if (storedKey === key) {
                return storedValue;
              }
            }
          }
          return null;
    }
    remove(key){
        const index = this.hash(key);
        this.check(index);
        if (this.buckets[index] !== null) {
            for (let i = 0; i < this.buckets[index].length; i++) {
              const [storedKey, storedValue] = this.buckets[index][i];
              if (storedKey === key) {
                this.buckets[index].splice(i, 1); 
                this.length--;
                return true;
              }
              
            }
        }
    }
}