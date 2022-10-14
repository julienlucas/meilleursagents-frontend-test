/**
 * Mixin used to mimic a singleton pattern on a class
 */
export default () =>
  class {
    static instance;

    static getInstance() {
      this.instance = new this();
      return this.instance;
    }
  };
