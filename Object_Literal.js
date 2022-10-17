const book1={
    title:"Book One",
    author:'john Doe',
    year:'2012',
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2={
    title:"Book Two",
    author:'Jane Doe',
    year:'2014',
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}


console.log(book1.getSummary());
console.log(book2.getSummary());

console.log(Object.values(book1))
console.log(Object.keys(book1))