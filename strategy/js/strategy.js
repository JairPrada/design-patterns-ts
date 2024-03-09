class SaleContext {
    constructor(strategy) {
        this.strategy = strategy
    }
    setStrategy(strategy) {
        this.strategy = strategy
    }
    calculate(amount) {
        return this.strategy.calculate(amount)
    }
}

class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax
    }
    calculate(amount) {
        return amount + (amount * this.tax)
    }
}

class DiscountSaleStrategy {
    constructor(tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount) {
        return (amount + (amount * this.tax)) - (amount + (amount * this.tax)) * this.discount
    }
}

class ForeignSaleStrategy {
    getDollarPrice() {
        //Retorna el valor de USD -> COP
        return 3500
    }

    //Amount es el valor en dolares
    calculate(amount) {


        return amount * this.getDollarPrice()
    }
}

// Creacioon de estrategias
const regularSale = new RegularSaleStrategy(0.19)
const discount = new DiscountSaleStrategy(0.19, 0.5)
const foreignSaleStrategy = new ForeignSaleStrategy(0.19, 0.5)
//Creacion del contexto
const sale = new SaleContext(regularSale)

console.log("Venta regular: ", sale.calculate(90))
//Cambiando la estrategia del contexto
sale.setStrategy(discount)
console.log("Venta con descuento 50%: ", sale.calculate(90))
//Cambiando la estrategia del contexto
sale.setStrategy(foreignSaleStrategy)
console.log("Venta en pesos Colombianos: ", sale.calculate(5000))


// Ejemplo practico


const data = [{
    "name": "Hyvinkää Airfield",
    "country": "Russia",
    "info": "1-712 - Local Conditions",
    "img": "http://dummyimage.com/160x100.png/ff4444/ffffff"
}, {
    "name": "Brindisi – Salento Airport",
    "country": "Indonesia",
    "info": "7-600 - Flashing and Sheet Metal",
    "img": "http://dummyimage.com/196x100.png/dddddd/000000"
}, {
    "name": "Grand Canyon National Park Airport",
    "country": "China",
    "info": "11-480 - Athletic, Recreational, and Therapeutic Equipment",
    "img": "http://dummyimage.com/107x100.png/ff4444/ffffff"
}, {
    "name": "Guemar Airport",
    "country": "China",
    "info": "2-311 - Final Grading",
    "img": "http://dummyimage.com/234x100.png/cc0000/ffffff"
}, {
    "name": "Grumman Bethpage Airport",
    "country": "Russia",
    "info": "2-936 - Fertilizer",
    "img": "http://dummyimage.com/118x100.png/cc0000/ffffff"
}, {
    "name": "Mawlamyine Airport",
    "country": "Myanmar",
    "info": "9-250 - Gypsum Wallboard",
    "img": "http://dummyimage.com/219x100.png/cc0000/ffffff"
}, {
    "name": "Hrodna Airport",
    "country": "Peru",
    "info": "15-700 - Heating, Venting and Air Conditioning",
    "img": "http://dummyimage.com/190x100.png/5fa2dd/ffffff"
}, {
    "name": "Tingo Maria Airport",
    "country": "Indonesia",
    "info": "14-500 - Material Handling",
    "img": "http://dummyimage.com/138x100.png/dddddd/000000"
}, {
    "name": "Coles County Memorial Airport",
    "country": "Finland",
    "info": "6-050 - Basic Wood and Plastic Materials and Methods",
    "img": "http://dummyimage.com/141x100.png/cc0000/ffffff"
}, {
    "name": "Philadelphia Seaplane Base",
    "country": "China",
    "info": "15 - Mechanical",
    "img": "http://dummyimage.com/124x100.png/ff4444/ffffff"
}, {
    "name": "Miskolc Airport",
    "country": "Cyprus",
    "info": "3-310 - Expansion Joints",
    "img": "http://dummyimage.com/101x100.png/5fa2dd/ffffff"
}, {
    "name": "Leron Plains Airport",
    "country": "Peru",
    "info": "12 - Furnishings",
    "img": "http://dummyimage.com/241x100.png/cc0000/ffffff"
}, {
    "name": "Kaghau Airport",
    "country": "France",
    "info": "1-014 - Project Executive",
    "img": "http://dummyimage.com/223x100.png/ff4444/ffffff"
}, {
    "name": "Łódź Władysław Reymont Airport",
    "country": "Isle of Man",
    "info": "1-011 - Project Engineer",
    "img": "http://dummyimage.com/118x100.png/cc0000/ffffff"
}, {
    "name": "Kindu Airport",
    "country": "China",
    "info": "2 - Site Construction",
    "img": "http://dummyimage.com/188x100.png/ff4444/ffffff"
}, {
    "name": "Malamala Airport",
    "country": "Indonesia",
    "info": "2-784 - Stone Unit Pavers",
    "img": "http://dummyimage.com/209x100.png/dddddd/000000"
}, {
    "name": "Keewaywin Airport",
    "country": "Mexico",
    "info": "3-500 - Cementitious Decks and Underlayments",
    "img": "http://dummyimage.com/236x100.png/dddddd/000000"
}, {
    "name": "Woodbourne Airport",
    "country": "Peru",
    "info": "2-932 - PLants and Bulbs",
    "img": "http://dummyimage.com/189x100.png/dddddd/000000"
}, {
    "name": "Egegik Airport",
    "country": "Slovenia",
    "info": "16-050 - Basic Electrical Materials and Methods",
    "img": "http://dummyimage.com/196x100.png/ff4444/ffffff"
}, {
    "name": "Breiðdalsvík Airport",
    "country": "Colombia",
    "info": "2-870 - Sculpture/Ornamental",
    "img": "http://dummyimage.com/217x100.png/5fa2dd/ffffff"
}, {
    "name": "Pellston Regional Airport of Emmet County Airport",
    "country": "Indonesia",
    "info": "14-100 - Dumbwaiters",
    "img": "http://dummyimage.com/122x100.png/cc0000/ffffff"
}, {
    "name": "Greeley–Weld County Airport",
    "country": "South Africa",
    "info": "11-050 - Library Equipment",
    "img": "http://dummyimage.com/207x100.png/ff4444/ffffff"
}, {
    "name": "Bateen Airport",
    "country": "Indonesia",
    "info": "1-013 - Project Coordinator",
    "img": "http://dummyimage.com/206x100.png/ff4444/ffffff"
}, {
    "name": "Helsinki Vantaa Airport",
    "country": "Syria",
    "info": "2-362 - Termite Control",
    "img": "http://dummyimage.com/161x100.png/dddddd/000000"
}, {
    "name": "Taganrog Yuzhny Airport",
    "country": "Sweden",
    "info": "9 - Finishes",
    "img": "http://dummyimage.com/160x100.png/ff4444/ffffff"
}, {
    "name": "Ocean City Municipal Airport",
    "country": "Canada",
    "info": "6-050 - Basic Wood and Plastic Materials and Methods",
    "img": "http://dummyimage.com/152x100.png/dddddd/000000"
}, {
    "name": "Ramstein Air Base",
    "country": "Russia",
    "info": "6-200 - Finish Carpentry",
    "img": "http://dummyimage.com/246x100.png/ff4444/ffffff"
}, {
    "name": "Currillo Airport",
    "country": "Ukraine",
    "info": "3-400 - Precast Concrete",
    "img": "http://dummyimage.com/185x100.png/cc0000/ffffff"
}, {
    "name": "Cleve Airport",
    "country": "Philippines",
    "info": "12-600 - Multiple Seating",
    "img": "http://dummyimage.com/128x100.png/ff4444/ffffff"
}, {
    "name": "Kickapoo Downtown Airport",
    "country": "Portugal",
    "info": "11-030 - Teller and Service Equipment",
    "img": "http://dummyimage.com/138x100.png/ff4444/ffffff"
}, {
    "name": "Tandag Airport",
    "country": "China",
    "info": "10-240 - Grilles and Screens",
    "img": "http://dummyimage.com/102x100.png/cc0000/ffffff"
}, {
    "name": "28 de Noviembre Airport",
    "country": "Russia",
    "info": "7-600 - Flashing and Sheet Metal",
    "img": "http://dummyimage.com/171x100.png/dddddd/000000"
}, {
    "name": "Salina Municipal Airport",
    "country": "Panama",
    "info": "6-500 - Structural Plastics",
    "img": "http://dummyimage.com/116x100.png/cc0000/ffffff"
}, {
    "name": "OR Tambo International Airport",
    "country": "Indonesia",
    "info": "11-480 - Athletic, Recreational, and Therapeutic Equipment",
    "img": "http://dummyimage.com/192x100.png/5fa2dd/ffffff"
}, {
    "name": "Salekhard Airport",
    "country": "France",
    "info": "7 - Thermal and Moisture Protection",
    "img": "http://dummyimage.com/113x100.png/5fa2dd/ffffff"
}, {
    "name": "Silistra Polkovnik Lambrinovo Air Base",
    "country": "Afghanistan",
    "info": "13-900 - Fire Suppression",
    "img": "http://dummyimage.com/150x100.png/ff4444/ffffff"
}, {
    "name": "Krainiy Airport",
    "country": "Russia",
    "info": "10-400 - Identification Devices",
    "img": "http://dummyimage.com/133x100.png/5fa2dd/ffffff"
}, {
    "name": "Dewadaru - Kemujan Island",
    "country": "Norway",
    "info": "10-270 - Access Flooring",
    "img": "http://dummyimage.com/183x100.png/5fa2dd/ffffff"
}, {
    "name": "Abaco I Walker C Airport",
    "country": "Philippines",
    "info": "11-280 - Hydraulic Gates and Valves",
    "img": "http://dummyimage.com/179x100.png/cc0000/ffffff"
}, {
    "name": "Philip S. W. Goldson International Airport",
    "country": "Zambia",
    "info": "7-400 - Roofing and Siding Panels",
    "img": "http://dummyimage.com/209x100.png/ff4444/ffffff"
}, {
    "name": "Inhaminga Airport",
    "country": "Indonesia",
    "info": "3-400 - Precast Concrete",
    "img": "http://dummyimage.com/227x100.png/cc0000/ffffff"
}, {
    "name": "Cap Haitien International Airport",
    "country": "Ethiopia",
    "info": "1-520 - Construction Facilities",
    "img": "http://dummyimage.com/139x100.png/dddddd/000000"
}, {
    "name": "Meekatharra Airport",
    "country": "Nepal",
    "info": "12-900 - Furnishings Restoration and Repair",
    "img": "http://dummyimage.com/249x100.png/dddddd/000000"
}, {
    "name": "Lakefield Airport",
    "country": "China",
    "info": "11-140 - Vehicle Service Equipment",
    "img": "http://dummyimage.com/118x100.png/cc0000/ffffff"
}, {
    "name": "Senador Nilo Coelho Airport",
    "country": "Indonesia",
    "info": "12-800 - Interior Plants and Planters",
    "img": "http://dummyimage.com/243x100.png/cc0000/ffffff"
}, {
    "name": "Tozeur Nefta International Airport",
    "country": "Peru",
    "info": "4-600 - Corrosion-Resistant Masonry",
    "img": "http://dummyimage.com/181x100.png/5fa2dd/ffffff"
}, {
    "name": "Moala Airport",
    "country": "Poland",
    "info": "1-523 - Sanitary Facilities",
    "img": "http://dummyimage.com/168x100.png/dddddd/000000"
}, {
    "name": "Kiel-Holtenau Airport",
    "country": "Colombia",
    "info": "11-170 - Solid Waste Handling Equipment",
    "img": "http://dummyimage.com/176x100.png/dddddd/000000"
}, {
    "name": "Tadjoura Airport",
    "country": "Philippines",
    "info": "9-050 - Basic Finish Materials and Methods",
    "img": "http://dummyimage.com/115x100.png/cc0000/ffffff"
}, {
    "name": "José Aponte de la Torre Airport",
    "country": "Uganda",
    "info": "10-500 - Lockers",
    "img": "http://dummyimage.com/138x100.png/5fa2dd/ffffff"
}]


class InfoContext {

    constructor(strategy, data, element) {
        this.data = data
        this.element = element
        this.setStrategy(strategy)
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    show() {
        this.strategy.show(this.data, this.element)
    }


}

class SummaryListStrategy {
    show(data, element) {

        element.innerHTML = data.reduce((accumulated, airport) => {
            return accumulated + `<div class="airport-card">
                <h2>${airport.name}</h2>
                <p>${airport.country}</p>
            </div>`
        }, "")
    }
}


class DetailListStrategy {
    show(data, element) {

        element.innerHTML = data.reduce((accumulated, airport) => {
            return accumulated + `<div class="airport-card">
                <h2>${airport.name}</h2>
                <p>${airport.country}</p>
                <p>${airport.info}</p>
            </div>`
        }, "")
    }
}


class ImagesListStrategy {
    show(data, element) {

        element.innerHTML = data.reduce((accumulated, airport) => {
            return accumulated + `<div class="airport-card">
                <h2>${airport.name}</h2>
                <p>${airport.country}</p>
                <img src="${airport.img}" width="200" height="200" />
            </div>`
        }, "")
    }
}

const summaryStrategy = new SummaryListStrategy()
const detailStrategy = new DetailListStrategy()
const imagesListStrategy = new ImagesListStrategy()
const container = document.getElementById("content")

const strategies = [
    summaryStrategy,
    detailStrategy,
    imagesListStrategy
]

const info = new InfoContext(summaryStrategy, data, container)
info.show()

listType.addEventListener("change", (event) => {
    const option = event.target.value
    info.setStrategy(strategies[option])
    info.show()
})
