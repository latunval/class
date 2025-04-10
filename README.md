# class
# Class-Based Programming Exercises

## 1. Library Book Management
- Create a `Book` class with properties `title`, `author`, and `yearPublished`.
- Add a method `getBookInfo()` that returns a formatted string of the book details.
- Create multiple book instances and display their information.

## 2. Employee Payroll System
- Create an `Employee` class with properties `name`, `position`, and `salary`.
- Add a method `getAnnualSalary()` to return the total salary for a year.
- Create instances for multiple employees and display their annual salaries.

## 3. Vehicle Registration System (Inheritance)
- Create a `Vehicle` class with properties `brand`, `model`, and `year`.
- Create a `Car` subclass that extends `Vehicle` and adds a new property `fuelType`.
- Add a method `getCarDetails()` to return the car’s details.
- Create multiple car instances and display their information.

## 4. Online Shopping Cart (Static Methods)
- Create a `ShoppingCart` class with a static method `calculateTotal(cartItems)` that takes an array of item prices and returns the total price.
- Test the static method with different shopping cart values.

## 5. Banking System (Class & Methods)
- Create a `BankAccount` class with properties `owner`, `balance`, and methods:
  - `deposit(amount)`: Adds the amount to balance.
  - `withdraw(amount)`: Deducts the amount from balance (if sufficient funds).
  - `getBalance()`: Returns the current balance.
- Create multiple accounts and perform transactions.

---

 *ASSIGNMENT TO BE SUBMITTED TOMORROW MORNING*

### 6. Smart Device Inheritance
📌 **Task**: Create a `Device` class with properties for `brand`, `model`, and `year`. Then, create a `Smartphone` subclass that adds `os` (Operating System).

🔹 **Steps**:
- Define a `Device` class with properties `brand`, `model`, and `year`.
- Add a method `getDeviceDetails()` to display the device's details.
- Extend `Device` into `Smartphone`, adding an `os` property.
- Create multiple smartphone instances and display their information.

### 7. University Student Management (Inheritance & Methods)
📌 **Task**: Create a `Person` class with properties for `name` and `age`. Then, create a `Student` subclass that tracks course and grade.

🔹 **Steps**:
- Define a `Person` class with properties `name` and `age`.
- Add a method `getDetails()` to return person details.
- Extend `Person` into `Student`, adding `course` and `grade` properties.
- Add a method `getStudentInfo()` to return the student’s details.
- Create multiple students and display their information.

### 8. E-Commerce Order System (Inheritance & Methods)
📌 **Task**: Create an `Order` class with properties for `orderId` and `customerName`. Then, create a `ProductOrder` subclass that tracks product details.

🔹 **Steps**:
- Define an `Order` class with properties `orderId` and `customerName`.
- Add a method `getOrderDetails()` to return order details.
- Extend `Order` into `ProductOrder`, adding `productName` and `price` properties.
- Create multiple product orders and display their information.

### 9. Healthcare System (Inheritance & Methods)
📌 **Task**: Create a `Person` class with properties for `name` and `age`. Then, create a `Patient` subclass that tracks illness and hospital details.

🔹 **Steps**:
- Define a `Person` class with properties `name` and `age`.
- Add a method `getDetails()` to return person details.
- Extend `Person` into `Patient`, adding `illness` and `hospitalName` properties.
- Add a method `getPatientDetails()` to return the patient’s details.
- Create multiple patient instances and display their information.

### 10. Movie Ticket Booking (Inheritance & Methods)
📌 **Task**: Create a `Movie` class with properties for `title` and `duration`. Then, create a `MovieTicket` subclass that tracks ticket details.

🔹 **Steps**:
- Define a `Movie` class with properties `title` and `duration`.
- Add a method `getMovieDetails()` to return movie details.
- Extend `Movie` into `MovieTicket`, adding `seatNumber` and `price` properties.
- Add a method `getTicketInfo()` to return the ticket details.
- Create multiple movie ticket instances and display their information.

### 11. Online Learning Platform
📌 **Task**: Create a `Course` class with properties for `courseName` and `instructor`. Then, create a `StudentCourse` subclass that tracks a student's progress.

🔹 **Steps**:
- Define a `Course` class with properties like `courseName` and `instructor`.
- Create a method `getDetails()` to return course details.
- Extend `Course` into `StudentCourse`, adding a `progress` property.
- Create an instance of `StudentCourse`, update progress, and display details.

### 12. Smart Home System
📌 **Task**: Develop a `Device` class representing smart home devices with `turnOn()` and `turnOff()` methods. Extend it to `SmartLight` and `SmartThermostat` classes.

🔹 **Steps**:
- Create a `Device` class with a `status` property (on or off).
- Add `turnOn()` and `turnOff()` methods to update status.
- Extend `Device` into `SmartLight` and `SmartThermostat`.
- Add properties like `brightness` for `SmartLight` and `temperature` for `SmartThermostat`.
- Create instances and test turning them on/off.

### 13. E-Wallet System
📌 **Task**: Create an `EWallet` class where users can `deposit()`, `withdraw()`, and check their balance. Use a static method to track total wallets created.

🔹 **Steps**:
- Define an `EWallet` class with a `balance` property initialized to 0.
- Add `deposit(amount)`, `withdraw(amount)`, and `getBalance()` methods.
- Implement a static property `totalWallets` to track wallet count.
- Create multiple wallet instances and test transactions.

### 14. Food Delivery Service
📌 **Task**: Design a `Restaurant` class that stores `name` and `menu`. Extend it into `FoodOrder`, allowing users to place orders.

🔹 **Steps**:
- Create a `Restaurant` class with `name` and `menu` (an object storing food items and prices).
- Add a `displayMenu()` method to show available food items.
- Extend `Restaurant` into `FoodOrder`, adding an `orderFood(item)` method.
- Create instances of `FoodOrder` and simulate placing an order.

### 15. Ride-Sharing App
📌 **Task**: Build a `Vehicle` class with `brand`, `model`, and `year`. Extend it to `Ride`, which tracks `driverName`, `passengerName`, and `fare`.

🔹 **Steps**:
- Create a `Vehicle` class with properties `brand`, `model`, and `year`.
- Add a `getVehicleDetails()` method to display details.
- Extend `Vehicle` into `Ride`, adding properties like `driverName`, `passengerName`, and `fare`.
- Implement a `calculateFare()` method based on distance.
- Create instances of `Ride` and simulate a ride.
