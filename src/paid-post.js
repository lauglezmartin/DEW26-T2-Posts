import Post from "./post.js";
import Client from "./client.js";

class PaidPost extends Post {
  constructor(name, price) {
    super(name);
    this.price = price;
  }

  // Solo se pueden suscribir clientes porque a ellos se les factura
  attach(client) {
    if (client instanceof Client) {
      super.attach(client);
    }
  }

  detach(client) {
    super.detach(client);
  }
}

export { PaidPost };
export default PaidPost;
