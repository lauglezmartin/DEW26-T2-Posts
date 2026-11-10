import PaidPost from "./paid-post.js";

class Magazine extends PaidPost {
  constructor(name, price, topic) {
    super(name, price);
    this.topic = topic;
  }

  get summary() {
    return `${super.summary} of ${this.topic}`;
  }
}

export { Magazine };
export default Magazine;
