function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;

}

    Book.prototype.getSummary=function(){
      return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    Book.prototype.getAge=function(){
        const years=new Date().getFullYear()-this.year;
        return `${this.title} is written ${years} years ago`
    }

    Book.prototype.revise=function(newYear){
         this.year=newYear;
         this.revised=true;
    }

  
  
  //Instantiate an Object
  const book1=new Book("4IV","john","2015");
  const book2=new Book("4IVII","Sir John","2017");

  console.log(book1)
  book1.revise("2018")
  console.log(book1)
