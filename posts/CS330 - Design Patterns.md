# Lecture 1

Design patterns are *"best practice"* templates.
They help us solve recuring problems, provide us with common vocabulary, and improve readability.

### Object Oriented Programming Review
**Encapsulation, Inheritance, Polymorphism, Coupling, and Cohesion** are the principles of OOP.

**Encapsulation** is packing up state and behavior in a single package.
Benefits of encapsulation are maintainability, flexibility, and extensibility; we can modify implemented code without breaking the code of others who use our code.

**Inheritance** is when a subclass is defined it inherits definitions from the base class.
Benefits of this are easier maintenance and reliability as changes only need to be made in the super class and what works for the super class will work for subclasses.

**Polymorphism** is the ability to assign a different meaning to methods in different contexts.
Benefits are variability and ease of maintenance; objects are able to respond differently to some method or property and objects are independent of each other.

**Cohesion** is "how much they make sense" or the degree to which elements belong together inside a class, does a class have everything it needs to have. Higher is better.
Benefits include: 
- readability
- reusability
- reduce complexity

**Coupling** is the degree to which classes depend on each other. We want to keep coupling low.
Benefits are:
- increase ease of replacing things
- easier testability
- reduces risk of breaking system when adding new features.

Design patterns help us solve reoccurring problems, provide a common vocabulary, and improve readability and maintainability.
* * *
# Lecture 2
### The Strategy Pattern
Behavioral patterns help with the interaction or communication between objects.
These patterns help with flexibility.
The interaction between objects should in a way they are loosely coupled.

Strategy is a behavioral pattern.
Used when a program needs to support different types of behaviors, encapsulates each and makes them interchangeable.

identify the aspects of your application that vary and separate them from the class then program them to an interface.

Creational patterns help with object creation.

Structural patterns are how we structure things.

UML Review
![[Pasted image 20230905153127.png]]
General Class Diagram for Strategy pattern
 ![[Pasted image 20230905153159.png]]

In the Student records sorting example:
Strategy declares a common interface to all supported algorithms. Context uses this interface to call the algorithm defined by concrete strategy.

ConcreteStrategy implements the algorithm using the strategy interface.

Context is configured with a ConcreteStrategy object maintains a reference to a Strategy object may define an interface the lets Strategy access its data.

In class example: Guitar Hero
has abstract class GameCharacter with attributes GuitarBehavior and SoloBehavaior. Also contains playGuitar and playSolo functions which call the respective attibutes play and solo methods.

have different classes for guitars which implement interface GuitarBehavior that override the play function. GuitarBehavior contains only play function.

same thing for the solo classes.

define guitar and solo behaviors for the characters in the character's class constructor.
* * *
# Lecture 3
### The Observer Pattern
Behavioral Pattern.
The problem this solves is that of related objects needing to communicate with each other to maintain consistency.

The Observer Pattern is defines a one to many dependency between objects so that when one object changes state, all of the dependents are notified and updated automatically.

![[Pasted image 20230912151259.png]]
In class example: Eye of sauron
Sauron and Saruman subscribe to the eye of sauron and get updates on hobbit positions
Eye of sauron class has array or observers, loop through obeservers and call their update functions.
* * *
# Lecture 4
### Decorator Design Pattern
Structural pattern

The problem it solves is that of overuse of inheritance often leading to an explosion of classes.

Open minded principle: classes should be open for extension, but closed for modification.

The decorator pattern attaches additional responsibilities to an object dynamically.

There are objects and decorators
decorators have the same supertype as objects they decorate.
you can pass around a decorated object instead of the original

![[Pasted image 20230919151227.png]]

in class example: bagels
add topping to bagels using decorators
![[Pasted image 20231015201537.png]]
* * *
# Lecture 5
### Factory Method
creational pattern

the problem it solves is that of too many dependencies to concrete classes that makes your software difficult to maintain and modify

The factory method pattern defines an interface for creating an object but lets sub classes decide which class to instantiate. Factory method lets a class defer instantiation to subclasses.

![[Pasted image 20231003150813.png]]
in class example: Pizza
creating pizzas using a pizza factory. type of pizza is defined in main and created in the factory

hint for exercise: use geography
* * *
# Lecture 6
### Midterm Review
Know the difference between patterns
tightly coupled 
loosely coupled
high cohesion
low cohesion

compare and contrast between patterns
draw generic diagrams for any pattern

3-4 design problems: select most appropriate design pattern to use for this problem and provide the patterns intent.
### Abstract Factory Pattern
creational pattern

problem it solves "Too many dependencies to concrete classes makes your software difficult to maintain."

No variable should have a reference to a concrete class
No class should derive from a concrete class
No method should override 

The abstract factory pattern provides an interface for  creating families of related or dependent 
![[Pasted image 20231015201924.png]]
in class example: electronics
creating devices from different carriers with different specs
![[Pasted image 20231015202043.png]]
* * *
# Lecture 7
### The Singleton Pattern
creational pattern

Problem is solves is that of classes only needing to be instantiated once.

used in loggers, drivers, caching, security. Fixes incorrect behavior, overuse of resources, and inconsistent results.

Definition: ensures a class has only one instance and provides a global access point to it.

![[Pasted image 20231024151606.png]]

Benefits:
Ensures you only at most have one instance  
Provides global access point  
Examine your performance requirements to  
determine which implementation of the  
singleton works best.  
Some implementations don’t work with older  
version of Java (see book)
* * *
# Lecture 8
### Command Pattern
behavioral pattern

problem it solves is that of a program having many different actions it can perform that implementing would lead to huge if else blocks or switches.

encapsulates a request as an object thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.

![[Pasted image 20231031151434.png]]
increases cohesion
decreases coupling
* * *
# Lecture 9
### Adapter Pattern
structural pattern

problem it solves is that of interface incompatibility and you cannot change the library you want to use.

The adapter pattern 

![[Pasted image 20231217122228.png]]
* * *
# Lecture 10
### Composite Pattern
structural pattern

the problem it solves is that of dealing with tree structured data where programmers have to discriminate between a leaves and branches.

the composite pattern allows you to compose objects into tree structures to represents part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

![[Pasted image 20231114151031.png]]
* * *
# Lecture 11
### Model View Controller
behavioral pattern

Good for web applications (or anything with a GUI).

Independent components, separating allows for parallel development.

Model: the central component of the pattern 
it is the application's dynamic data structure

View represents the information such as a chart or table

Controller: accepts input and converts it to commands for the model or view
It generally manages the logic and the rules of the application

![[Pasted image 20231217122129.png]]
* * *
# State Pattern
Behavioral pattern

The State Pattern allows an object to alter its  
behavior when its internal state changes. The  
object will appear to change its class.

![[Pasted image 20231219133003.png]]

