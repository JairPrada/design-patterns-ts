class SingletonTs {
  private static instance: SingletonTs;
  public random: number;

  constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SingletonTs {
    if (!this.instance) {
      this.instance = new SingletonTs();
    }
    return this.instance;
  }
}

const singleton = SingletonTs.getInstance();
const singleton2 = SingletonTs.getInstance();

console.log("Primera Instancia: ", singleton.random);
console.log("Segundo Instancia: ", singleton2.random);
