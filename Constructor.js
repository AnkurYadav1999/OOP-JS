// Constructor Function

function Book(title,author,year){
  this.title=title;
  this.author=author;
  this.year=year;
  this.getSummary=function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}


//Instantiate an Object
const book1=new Book("4IV","john","2025");
const book2=new Book("4IVII","Sir John","2027");


console.log(book1.getSummary())
console.log(book2.getSummary())

