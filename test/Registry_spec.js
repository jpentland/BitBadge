var assert = require('assert');
var Embark = require('embark-framework');
var EmbarkSpec = Embark.initTests();

describe("Registry", function(done) {

  before(function(done) {
    EmbarkSpec.deployAll(done);
  });

//  Registry.registerIdentity("johnsmith", "facebook.com", "");

  it("register an identity and get it back", function(done) {
    Registry.registerIdentity("johnsmith", "facebook.com", "",
			function() {
				Registry.getAddr("johnsmith", "facebook.com", "",
					function(err, result){
						assert.equal(result.toNumber(), 150);
						done();
					});
			});
  });
/*
  it("set storage value", function() {
    SimpleStorage.set(100);
    expect(SimpleStorage.get()).toEqual('100');
  });

*/
})
