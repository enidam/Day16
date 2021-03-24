class Person {
static display() {
    return  "Static method is invoked from Person class";
  
}
     show() {
    return Person.display();
}


};

var message = newPerson();
message.show();
module.exports = Person;

