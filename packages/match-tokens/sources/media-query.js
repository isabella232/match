Object.defineProperties(MediaQuery.prototype, {
  query: {
    get() {
      return `min-width: ${this.minWidth}px`;
    }
  }
});
