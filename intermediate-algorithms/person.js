var Person = function (firstAndLast) {
  // 
  let [fName, lName] = firstAndLast.split(" ");
  this.getFirstName = () => fName;
  this.getLastName = () => lName;
  this.getFullName = () => `${fName} ${lName}`;
  this.setFirstName = first => {
    fName = first;
  }
  this.setLastName = last => {
    lName = last;
  }
  this.setFullName = firstAndLast => {
    [fName, lName] = firstAndLast.split(" ");
  }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

/**
 * TESTS
 * Object.keys(bob).length should return 6.
 * bob instanceof Person should return true.
 * bob.firstName should return undefined.
 * bob.lastName should return undefined.
 * bob.getFirstName() should return "Bob".
 * bob.getLastName() should return "Ross".
 * bob.getFullName() should return "Bob Ross".
 * bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
 * bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
 * bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
 * bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
 * bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
 */
