Embark = require('embark-framework');
Embark.init();
Embark.blockchainConfig.loadConfigFile('config/blockchain.yml');
Embark.contractsConfig.loadConfigFile('config/contracts.yml');

var files = ['app/contracts/BitBadge.sol'];
Embark.contractsConfig.init(files, 'development');

