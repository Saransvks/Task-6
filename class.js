// class - movie 


class movie{
    constructor(title,production,rating = 'PG')
    {
        this.title = title;
        this.production = production;
        this.rating = rating;
    }
}
const movie1 = new movie("PonniyinSelvan 1","LycaProduction","7.6");
const movie2 = new movie("PonniyinSelvan 2","LycaProduction","6.4");

console.log(movie1.title);
console.log(movie1.production);
console.log(movie.rating);


console.log(movie2.title);
console.log(movie2.production);
console.log(movie2.rating);