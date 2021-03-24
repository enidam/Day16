class Book {
        
    constructor(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle

    }

};


const littlePrince = new Book("La Petit Prince");
console.log(littlePrince.title);
littlePrince.title = title;
console.log(littlePrince.title);

module.exports = Book;