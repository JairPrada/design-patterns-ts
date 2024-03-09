interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];
  subscribe(observer: IObserver<T>): void;
  unSubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>) {
    this.observers.push(observer);
  }

  unSubscribe(observer: IObserver<T>) {
    this.observers = this.observers.filter(
      (currentObserver) => currentObserver !== observer
    );
  }

  notify(value: T) {
    this.observers.forEach((observer) => observer.refresh(value));
  }
}

class Observer<T> implements IObserver<T> {
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();
const observer1 = new Observer<number>((numero: number) =>
  console.log("Nuevo cambio obs1 : " + numero)
);
const observer2 = new Observer<number>((numero: number) =>
  console.log("Nuevo cambio: obs2 :" + numero)
);
console.log("----------------------------------");
console.log("Observador Numeros");
console.log("----------------------------------");
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify(1.9);
subject.notify(1900);

console.log("----------------------------------");
console.log("Observador Strings");
console.log("----------------------------------");

const subjectString = new Subject<string>();
const observerString1 = new Observer<string>((cadena: string) =>
  console.log("Nuevo cambio obs1 : " + cadena.toLowerCase())
);
const observerString2 = new Observer<string>((cadena: string) =>
  console.log("Nuevo cambio: obs2 :" + cadena.toUpperCase())
);

subjectString.subscribe(observerString1);
subjectString.subscribe(observerString2);
subjectString.notify("Jair Andres");
subjectString.notify("Prada Sierra");
