Embark = require('embark-framework');
Embark.init();
Embark.blockchainConfig.loadConfigFile('config/blockchain.yml');
Embark.contractsConfig.loadConfigFile('config/contracts.yml');

var files = ['app/contracts/Registry.sol'];
Embark.contractsConfig.init(files, 'development');

var EmbarkSpec = Embark.tests(files);

describe("Registry", function() {
  beforeAll(function() {
    // equivalent to initializing SimpleStorage with param 150
    Registry = EmbarkSpec.request("Registry");
	Registry.registerIdentity("johnsmith", "facebook.com", "");
  });

  it("register an identity and get it back", function() {
    expect(Registry.()).toEqual('150');
  });

  it("set storage value", function() {
    SimpleStorage.set(100);
    expect(SimpleStorage.get()).toEqual('100');
  });

})

