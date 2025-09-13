export class User {
//   #id;
  #name;
  #email;
  #passwordHash;

  constructor({ id, name, email, passwordHash }) {
    // this.#id = id;
    this.#name = name;
    this.#email = email;
    this.#passwordHash = passwordHash;
  }

//   get id() {
//     return this.#id;
//   }
  get name() {
    return this.#name;
  }
  get email() {
    return this.#email;
  }
  get passwordHash() {
    return this.#passwordHash;
  }

  toJSON() {
    return {
    //   id: this.#id,
      name: this.#name,
      email: this.#email,
      passwordHash: this.#passwordHash,
    };
  }
}

export const users = [];
