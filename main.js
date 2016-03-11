var Livre = require('./livre');


var marinChilien = new Livre('gallimard','Un marin chilien');
Livre.prototype.setAuteur = function(auteur){this.auteur=auteur};
marinChilien.setAuteur('Agnes Mathieu-Daude');

var LivrePrecis = function (editeur,nom,auteur){
  Livre.call(this,editeur,nom);
  this.auteur = auteur;
}
LivrePrecis.prototype = new Livre;

var monLivre = new LivrePrecis('moi-même','mon histoire','BMD');
Livre.prototype.getInfo = function(){console.log('Le livre ' + this.nom + ' a été écrit par ' + this.auteur + ' et est édité par ' + this.editeur);};
LivrePrecis.prototype.setPrix = function(prix){this.prix = prix;};

marinChilien.getInfo()
monLivre.setPrix('10 $');
monLivre.getInfo()
console.log('toto');
return monLivre;
