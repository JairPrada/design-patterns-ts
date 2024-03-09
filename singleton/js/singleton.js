class Singleton {
    constructor() {
        this.random = Math.random()
        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this
    }
}

const singleton = new Singleton()
const singleton2 = new Singleton()

console.log("Instancia numero 1", singleton.random)
console.log("Instancia numero 2", singleton2.random)

console.log("¿Las instancias son iguales? ", singleton === singleton2)


// Ejemplo de Singleton 
class WeekDays {
    daysEs = [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes"
    ]
    daysEn = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    constructor(lang) {
        this.lang = lang
        if (WeekDays.instance) {
            return WeekDays.instance
        }
        WeekDays.instance = this
    }
    getDays() {
        return this.lang === "es" ? this.daysEs : this.daysEn
    }
}

const weekDays = new WeekDays("en")
// Ya no necesita la configuracion del lenguaje
const weekDays2 = new WeekDays()
//Si se envia una configuracion aparte solo va a tomar la de la primera instancia
const weekDays3 = new WeekDays("es")

console.log("Enviando la configuracion ", weekDays.getDays());
console.log("Sin enviar la configuracion", weekDays2.getDays());
console.log("Si se envia una configuracion aparte solo va a tomar la de la primera instancia", weekDays2.getDays());