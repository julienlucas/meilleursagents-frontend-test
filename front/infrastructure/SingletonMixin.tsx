/**
 * Mixin used to mimic a singleton pattern on a class
 */
export default () =>
  class {
    static instance = null;

    static getInstance() {
      if (this.instance === null) {
        this.instance = new this();
      }

      return this.instance;
    }
  };
