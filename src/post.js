import User from "./user.js";

class Post {
  // Privados para que no se puedan tocar desde fuera
  #number = 0;
  #subscribers = [];

  constructor(name) {
    this.name = name;
  }

  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }

  getSubscribers() {
    return this.#subscribers.map((user) => user.name).join(",");
  }

  attach(user) {
    if (user instanceof User && !this.#subscribers.includes(user)) {
      this.#subscribers.push(user);
    }
  }

  detach(user) {
    this.#subscribers = this.#subscribers.filter((sub) => sub !== user);
  }

  publish() {
    this.#number++;
    return this.#subscribers.map((user) => user.notify(this));
  }
}

export { Post };
export default Post;