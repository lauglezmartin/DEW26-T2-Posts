import User from "./user.js";
import PaidPost from "./paid-post.js";

class Client extends User {
  constructor(name) {
    super(name);
    this.billing = 0;
  }

  notify(post) {
    // Solo se cobra si la publicación es de pago
    if (post instanceof PaidPost) {
      this.billing = Math.round((this.billing + post.price) * 100) / 100;
    }
    return super.notify(post);
  }
}

export { Client };
export default Client;