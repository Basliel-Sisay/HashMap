class HashMap {
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
}