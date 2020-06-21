//Filter() metoda


let brojevi = [23,45,11,22,56,23,1,6,2]
let granica = 20;


let manjiBrojevi = brojevi.filter(function(num){
    return num < granica;
});

let veciBrojevi = brojevi.filter(provjeriVece);


function provjeriVece(num){
    return num > granica;
}

let neparniBrojevi = brojevi.filter(function(num){
    return num & 1;
});

console.log('/n Brojevi manji od 20: ', manjiBrojevi);
console.log('/n Brojevi veci od 20: ', veciBrojevi);
console.log('/n Neparni brojevi: ', neparniBrojevi);


// Map metoda

let imena_studenata = ['Dino','Ivan','Marko','Gabrijela',
                       'Kristijan', 'Domagoj', 'Filip', 'Igor'];

 let duljinaImena = imena_studenata.map(function(item,index,array){
     let duljina = item.length;
     return duljina;
 });

 console.log(duljinaImena);


 //Reduce metoda


 const trgovina = [
     {
         product: 'Luster',
         value: '500',
         count: 3
     },
     {
        product: 'Televizor Samsung',
        value: '2500',
        count: 2
    },
    {
        product: 'Laptop Acer Nitro 5',
        value: '7000',
        count: 10
    },
    {
        product: 'Apple Iphone XS 64 GB',
        value: '9500',
        count: 4
    },
 ];

 const ukupnaVrijednostTrgovine = trgovina.reduce(
     (acc,item) => acc + item.value * item.count,0
 );

 console.log(ukupnaVrijednostTrgovine);
                       