//exemple de module pattern
function Car(marque) {
  var car ={},
    position=0;

    //constructeur public
    car.marque = marque;

  //incrémenter un id de la classe
  Car.numInstances = (Car.numInstances || 0) + 1;
  car.id =   Car.numInstances;

  //Méthodes privéees
  function blabla(){console.log("blabla !!")}

  //méthodes publiques
  car.avance = function(a){
    var a = typeof a === 'undefined' ? 1 : a ;
    position += a;
    console.log('la voiture avance jusqu\'à la position ' + position);
    return car;
  }
  car.recule = function(a) {
    var a = typeof a === 'undefined' ? 1 : a ;
    position -= a;
    console.log('la voiture recule jusqu\'à la position ' + position);
    return car;
  }
  car.getPosition = function () {
    console.log(position);
    return car;
  }
  car.resetPosition = function () {
    position = 0;
    return car;
  }
  car.getNumero = function () {
    console.log('Le numéro de la voiture est ' + car.id);
    blabla()
    return car;
  }
  arr.push(car)
  return car;
}
//console.log(Car());


//exemple d'heritage en module pattern
function Mini() {
  var mini = {}
  //heritage du prototype
  mini.__proto__= Car('volkswagen')
  mini.parle = function () {
    console.log('je suis une mini');
  }
  mini.freeze = function () {
    Object.freeze(mini);
  }
  return mini
}
var arr = [];

var c= Car();
console.log(Object.keys(c));
var c2= Car('Audi');
console.log('la marque de c2 est : ' + c2.marque);
c.avance(1);
c.avance();
console.log('chainage');
c.avance().recule();
c.avance().avance(3);
c.getPosition();
c2.getPosition();
console.log(c.position);
console.log('c2');
c2.avance().getPosition();
c2.position = 3;
c2.getPosition();
console.log('c1');
c.resetPosition().getPosition();
c.getNumero();
c2.getNumero();

var voitureMimi = Mini();
voitureMimi.parle();
voitureMimi.avance();
//mutabilité des objets
Object.preventExtensions(voitureMimi) //plus possible d'ajouter des propriétés à l'objet
voitureMimi.position = 3; // ne se fait pas
console.log(voitureMimi.position); // affiche undefined
//on aurait pu utiliser Object.seal() => empèche en + la suppression de propriétés existantes
//on aurait pu utiliser Object.freeze() => empèche en + la modification de propriétés existantes
voitureMimi.freeze()
voitureMimi.getPosition()
voitureMimi.avance().getPosition();
console.log(voitureMimi.marque)
voitureMimi.getNumero()

var ar = [c,c2,voitureMimi];

console.log(ar);
for (ob in ar) {
  if (ar[ob].id==2){console.log('Je suis la voiture n°2 !!!')}
}

console.log(arr);
