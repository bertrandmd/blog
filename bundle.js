(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//module livre de BMD
var Livre = function(editeur,nom){
  this.editeur = editeur
  this.nom = nom
  this.type = 'livre'
}

module.exports = Livre;

},{}],2:[function(require,module,exports){
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

},{"./livre":1}]},{},[2]);
