class Person{
    firstname;
    lastname;
    age;
    constructor(fname,lname ,age){
        this.firstname=fname;
        this.lastname=lname;
        this.age=age
    }
    name(){
        console.log(`\nname:${this.firstname} ${this.lastname}\nage:${this.age}`);
        if(this.age>18){
            console.log(`\nthis person is adult`);
        }
    }

}
person1=new Person("Rahul","Mk",22)

person1.name();



// class Author{
//     title;
//     author;
//     year;

//     constructor(tile,author,year){
//         this.title=tile;
//         this.author=author;
//         this.year=year;

//     }

//     book(){
//         console.log(`${this.title} is written by ${this.author}.this book published on ${this.year}`);
        
//     }
// }
// book1=new Author("Ram c/o anandhi","akhil p dharmajan",2022)
// book1.book();