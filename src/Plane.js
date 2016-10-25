'use strict';

function Plane(){}
//Plane.prototype.land = function(){};
Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};
