class User {
  constructor(name) {
    this.name = name;
  }

  read(text) {
    return `${this.name} is reading ${text}`;
  }

  // Cuando se publica algo, el usuario lee el resumen
  notify(post) {
    return this.read(post.summary);
  }
}

export { User };
export default User;