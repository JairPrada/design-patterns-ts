class Subject {

    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((currentObserver) => currentObserver !== observer)
    }

    notify(data) {
        this.observers.forEach((observer) => {
            observer.refresh(data)
        })
    }
}


class Observer {

    constructor(fn) {
        this.fn = fn
    }

    refresh(data) {
        this.fn(data)
    }

}

const subjectClass = new Subject()

function change() {
    subjectClass.notify(eventNotify.value)
}

const observer1 = new Observer((data) => document.getElementById("observer").innerHTML = "observer 1 : " + data)
const observer2 = new Observer((data) => document.getElementById("observer2").innerHTML = "Observer 2 : " + data.split("").reverse().join(""))

subjectClass.subscribe(observer1)
subjectClass.subscribe(observer2)


