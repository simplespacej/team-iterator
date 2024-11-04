class Team {
    constructor() {
      this.characters = [];
    }
  
    add(character) {
      this.characters.push(character);
    }
  
    [Symbol.iterator]() {
      let index = 0;
      const characters = this.characters;
  
      return {
        next() {
          if (index < characters.length) {
            return { value: characters[index++], done: false };
          }
          return { done: true };
        },
      };
    }
  }
  
  export default Team;
  