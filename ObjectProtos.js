const ProtosObj={
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
      },
  
    getAge:function(){
          const years=new Date().getFullYear()-this.year;
          return `${this.title} is written ${years} years ago`
      }
}

const book1=Object.create(ProtosObj);
book1.title="Sire"
book1.author="James Gowl"
book1.year="2019"

console.log(book1)