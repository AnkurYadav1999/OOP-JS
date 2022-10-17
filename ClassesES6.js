class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }

    getSummary(){
        return `${this.title} is written by ${this.author} in ${this.year}`
    }

    getAge(){
        const years=new Date().getFullYear()-this.year;
        return `${this.title} is written ${years} years ago`
    }

    static publisher(){
        return 'Oxford Publications';
    }
}


// Instantiate Object

const book1 = new Book("Sherlock Holmes","Arthur Conan","2015")

console.log(book1)
console.log(book1.getSummary())
console.log(book1.getAge())
console.log(Book.publisher())