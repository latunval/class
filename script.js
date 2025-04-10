class book {
    constructor(title, author, yearPublished) {
        this.author = author,
        this.title = title,
        this.yearPublished = yearPublished
    };
    getBookInfo(){
       return ` ${this.author} is the owner of ${this.title} in this ${this.yearPublished}`;

    }
}

const book1 = new book("OTHELLO", "WILLIAMS SHAKESPARE", 2010);
// console.table(book1);
const book2 = new book ("Blood of a stranger", "MICHEAL CASSIO",2000);
const book3 = new book("CASTLE OF OTRANTTO", "WILLIAMS SHAKESPARE", 2006);
const books = [book1, book2, book3];
console.table(books)
for (let i = 0; i < books.length; i++) {
    const element = books[i].getBookInfo();
    console.log(element)
};

// step 2

class Employee {
    constructor(name, position, salary) {
        this.name = name,
        this.position = position,
        this.salary = salary
    }
    getAnnualSalary(){
        return this.salary * 12;
    }
}
// const total = Employee.getAnnualSalary(30)

const employer1 = new Employee ("Johnson","Secretary", 30);
// console.table(employer1.getAnnualSalary())
const employer2 = new Employee ("Johnson","Admin", 40);
const employer3 = new Employee ("Johnson","Cleaner", 20);
const employer4 = new Employee ("Johnson","Manager", 50);
const employer5 = new Employee ("Samson","gateman", 30);

const employers = [employer1,employer2,employer3,employer4, employer5]

for (let i = 0; i < employers.length; i++) {
    const element = `${employers[i].name} ${employers[i].position} $${employers[i].getAnnualSalary()}`;
    console.table( element)
};

class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand,
        this.model = model,
        this.year = year
    }
    getCarDetails() {
        return `This ${this.brand} is a ${this.model} in the year ${this.year}`
    }
}
class subCar extends Vehicle {
    constructor(brand,model,year, fuelType) {
        super(brand,model,year);
        this.fuelType = fuelType
    }
    details(){
        return `${this.getCarDetails()} and its fuel type is ${this.fuelType}`
    }
}
 const car1  = new subCar("Mazda", "xl420", 2017, "diesel");
 console.table(car1);
 const car2  = new subCar("camry", "xle220", 2016, "diesel");
 const car3  = new subCar("Lexus", "xl5500", 2019, "diesel");
 const car4  = new subCar("Sienna", "rx300", 2021, "diesel");

 const vehicles = [car1, car2, car3, car4];
 console.table(vehicles);
for (let i = 0; i < vehicles.length; i++) {
    const element = vehicles[i].getCarDetails();
    console.table(element)
};

// step 4 online cart 
class ShoppingCart {
    static calculateTotal(cartItems) {
        return cartItems.reduce((total, price) => total + price, 0);
    }
}

// Test the static method with different shopping cart values
const cart1 = [20, 40, 40];
const cart2 = [15, 25, 35, 45];
const cart3 = [100, 200, 300];

console.log(ShoppingCart.calculateTotal(cart1)); 
console.log(ShoppingCart.calculateTotal(cart2)); 
console.log(ShoppingCart.calculateTotal(cart3)); 



// step 5
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner,
        this.balance = balance
    }
    deposit(amount) {
return amount + this.balance

    }
    withdraw(amount) {
        return this.balance - amount 
    }
    getBalance() {
        return this.balance
    }
};

const user1 = new BankAccount ( "Joseph", 700);
console.log(user1.deposit(50))
const user2 = new BankAccount ( "Samson", 250);
console.log(user1.withdraw(50))
const user3 = new BankAccount ( "segun", 900);
console.log(user1.getBalance());
const users =[user1,user2,user3]
console.table(users)
for (let i = 0; i < users.length; i++) {
    const element =` ${users[i].deposit(50)}, ${users[i].withdraw(100)} ${users[i].getBalance()}`;
    console.log(element)
};


// step 6

class Device {
    constructor(brand, model, year) {
        this.brand = brand,
        this.model = model,
        this.year = year
    }
    getDeviceDetails() {
        return `This ${this.model} is the products of ${this.brand} in year ${this.year}`
    }
}
class SmartPhone extends Device {
    constructor(brand,model,year,os) {
       super(brand,model,year)
        this.system = os
    }
    display() {
         return `${this.getDeviceDetails()} it has ${this.system}`
    }
}
 const tecno = new SmartPhone("Tecno", "pop7", 2023, 7.2);
 console.table(tecno);
 const infinix = new SmartPhone("Infinix", "Smart6", 2022, 7.2);
 console.table(infinix.display());

//  step 7
class Person {
    constructor(name, age) {
        this.owner = name,
        this.balance = age
    }
    getDetails() {
        return `This ${this.owner} is the products of ${this.balance}`
    }
};
    class Student extends Person {
        constructor(name, age,course, grade) {
            super(name,age)
this.course = course,
this.grade = grade
        }
        getStudentInfo() {
return `  ${this.getDetails()} and has study this${this.course} which has this${this.grade}`
        }
    }
    const student1 = new Student ("Bolaji", 19, "computer", 80)
console.log(student1.getStudentInfo())

// step 8
class Order {
    constructor(id,name) {
        this.orderid = id,
        this.name = name
    }
    getDetails() {
        return `this id ${this.orderid} belong to this customer ${this.name}`
    }
}
class ProductOrder extends Order {
    constructor(id,name,productName,price) {
        super(id,name)
        this.productName = productName,
        this.price = price
    }
    getOrderDetails() {
        return `${this.getDetails()} bought this ${this.productName} at the rate of ${this.price}`
    }
}
const orders1 = new ProductOrder(1, "Segun", "Power Bank", 8600);
console.log(orders1.getOrderDetails())

// step 9
class Persons {
    constructor(name, age) {
        this.owner = name,
        this.balance = age
    }
    getDetails() {
        return `This ${this.owner} is the products of ${this.balance}`
    }
};
    class Patient extends Persons {
        constructor(name, age,illness, hospitalName) {
            super(name,age)
this.course = illness,
this.grade = hospitalName
        }
        getPatientDetails() {
return `  ${this.getDetails()} and has study this${this.course} which has this${this.grade} hospital`
        }
    }
    const patient1 = new Student ("Bolaji", 19, "Malaria", "Dotman")
console.log(patient1.getStudentInfo());

// step 10
class Movie {
    constructor(title, duration) {
        this.title = title,
        this.duration = duration
    }
    getMovieDetails() {
        return `the title of this movie is ${this.title} and it has duration of ${this.duration}hours`
    }
}
class MovieTicket extends Movie {
    constructor(title,duration,seatNumber,price) {
        super(title,duration),
        this.seat = seatNumber,
        this.price = price
    }
    getTicketInfo(){
        return `${this.getMovieDetails()} for number ${this.seat} with the price of ${this.price}`
    }
};
const movie1 = new MovieTicket("Lisabi", 2, 20, 1000);
console.log(movie1.getTicketInfo());
const movie2 = new MovieTicket("RRR", 2+":"+50, 10, 10000);
console.log(movie2.getTicketInfo())
// step 11 
class Course {
    constructor(courseName,instructor) {
        this.name = courseName,
        this.instructor =instructor
    }
    getDetails() {
        return `the ${this.name} will be lecture to the students by ${this.instructor}`
    }
};
class StudentCourse extends Course {
    constructor(courseName,instructor, progress) {
        super(courseName,instructor),
        this.progress = progress
    }
details(){
    return `${this.getDetails()} its progress to another level ${this.progress}`
}
}
const students = new StudentCourse("Literature", "Haboo", 70+"%");
console.log(students.details());
const students1 = new StudentCourse("English", "Azeez", 60+"%");
console.log(students1.details());

// step 12

class Devices {
    constructor(on,off) {
        this.on = on,
        this.off = off
    }
    turnOn(){

    }
}

// step 13
class EWallet {
    static totalWallets = 0;

    constructor() {
        this.balance = 0;
        EWallet.totalWallets++;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited: $${amount}`;
        }
        return "Deposit amount must be positive.";
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrawn: $${amount}`;
        }
        return "Insufficient balance or invalid amount.";
    }

    getBalance() {
        return `Current Balance: $${this.balance}`;
    }
}

// Create wallet instances and test transactions
const wallet1 = new EWallet();
console.log(wallet1.deposit(100));
console.log(wallet1.withdraw(50));
console.log(wallet1.getBalance());

const wallet2 = new EWallet();
console.log(wallet2.deposit(200));
console.log(wallet2.withdraw(300));
console.log(wallet2.getBalance());

const wallet3 = new EWallet();
console.log(wallet3.deposit(200));
console.log(wallet3.withdraw(300));
console.log(wallet3.getBalance());
console.log(`Total Wallets Created: ${EWallet.totalWallets}`);

// step 14
class Restuarant {
    constructor(name,menu) {
        this.name = name,
        this.menu = menu
    }
    displayMenu(){
        return `This food is ${this.name} with the price of ${this.menu}`
    }
}
class FoodOrder extends Restuarant {
    constructor(name,menu) {
        super(name,menu)
    }
    orderFood(item){
        return `${this.displayMenu()} ${item}`
    }
}
const order1 = new FoodOrder("fastfood", 2000);
console.log(order1.orderFood("egg-buns"));
const order2 = new FoodOrder("smallchops", 700);
console.log(order2.orderFood("pie"));

// step 15


class Vehicles {
    constructor(brand, model, year) {
        this.brand = brand,
        this.model = model,
        this.year = year
    }
    getVehicleDetails() {
        return `This ${this.brand} is a ${this.model} in the year ${this.year}`
    }
}
class Ride extends Vehicles {
    constructor(brand,model,year, driverName,passengerName,fare) {
        super(brand,model,year);
        this.driverName = driverName,
        this.passenger = passengerName,
        this.fare = fare
    }
    details(){
        return `${this.getVehicleDetails()} and the driver name  is ${this.driverName} that is giving tihs passenger ${this.passenger} rides at the rate of ${this.fare}`
    }
}
 const ride1  = new Ride("Mazda", "xl420", 2017, "Saheed", "Sewa", 1500);
 console.table(ride1);
 console.log(ride1.details());

