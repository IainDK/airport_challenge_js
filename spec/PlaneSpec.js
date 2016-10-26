'use strict';

describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
    plane.land(airport);
  });
  it('can land at an airport', function(){
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('can takeoff from an airport', function(){
   plane.takeoff();
   expect(airport.clearForTakeOff).toHaveBeenCalled();
 });
});
