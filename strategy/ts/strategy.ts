interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("Consultando la base de datos ....");
    return user === "admin" && password === "admin";
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("Consultando servicio ....");
    return user === "admin" && password === "admin";
  }
}

class LoginGoogleStrategy implements Strategy {
    login(user: string, password: string): boolean {
      console.log("Autenticandose con Google ....");
      return user === "admin" && password === "admin";
    }
  }

const loginDbStrategy = new LoginDBStrategy();
const loginServiceStrategy = new LoginServiceStrategy();
const loginGoogleStrategy = new LoginGoogleStrategy();

const auth = new LoginContext(loginDbStrategy);

console.log("-----------------------------------------------------------")

const isAuthenticatedInDB = auth.login("admin", "password");
console.log("🚀 ~ isAuthenticatedInDB:", isAuthenticatedInDB);

console.log("-----------------------------------------------------------")
auth.setStrategy(loginServiceStrategy);
const isAuthenticatedInService = auth.login("admin", "password");
console.log("🚀 ~ isAuthenticatedInService:", isAuthenticatedInService);

console.log("-----------------------------------------------------------")
auth.setStrategy(loginGoogleStrategy);

const isAuthenticatedInGoogle = auth.login("admin", "admin");
console.log("🚀 ~ isAuthenticatedInGoogle:", isAuthenticatedInGoogle);