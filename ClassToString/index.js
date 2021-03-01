class User {
  constructor(name) {
    this.name = name;
  }
  toString() {
    return this.name;
  }
}

console.log(`Hi ${new User("Dobby")}`);
