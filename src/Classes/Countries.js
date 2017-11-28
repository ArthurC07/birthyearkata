class Country {
    constructor(location){
        this.location = location;
        this.currency = 'bitcoin';
    }

    data(){
        return {
            location: this.location,
            currency: this.currency
        };
    }
}

class Honduras extends Country {
    constructor(location){
        super(location);
        this.currency = 'lempira';
    }
}

class Usa extends Country {
    constructor(location){
        super(location);
        this.currency = 'dollar';
    }

    thanksGiving(){
        return 'November 23';
    }
}

const place = new Usa('home');
place.data();

module.exports = {
    country: Country,
    honduras: Honduras,
    usa: Usa
};
