class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }

    getSummary(){
        return `${this.title} is written by ${this.author} in ${this.year}`
    }

}

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year)
        this.month=month;
    }
}

const mag1=new Magazine("Vouge","LMedia","2010","Jan")
console.log(mag1.getSummary())