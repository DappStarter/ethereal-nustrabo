require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember solid inflict phone obscure shaft'; 
let testAccounts = [
"0x1de6f82941bc01c8d184e658287539a960f3e3b5453ede2bfdb17251451984e6",
"0x48d1c1473206ca2862d498828c9696717d27dcb80ec6d9ddcd4ec33122edde86",
"0xc8b7248c5501321f91398c64010bb9678433bc16e44d82dd5fef09fc0f9e2646",
"0x1f85ed49327ea0ba80851f5d16a8df266158dc3cff000415e8ba5709199d31ec",
"0xde7f4aa84b1c23dde06e8475d4ea3330b22944fa68ff7d7fa61bfdac18dd73c2",
"0xc0b76fea87a18cb0befc4af7bc7bfe9c227bcb6dbd5cd4777dad5c592e9ef26c",
"0x22cb5e9ab31936e93f00a0b2cfc5c10ccf709d25077f189a707e9363f13280f6",
"0x136a165387c644862bcc993298b044fc165884f892f9f56d98bea55b24be4457",
"0x6fbeb31c80b22242ddcb31cd87a7cf61b38e5a891a56ce40f9ef78c3888f51b0",
"0xe03bebc55b02ab8bc00eff50adc4c049f03e6ff29e7ada9680dc8f5f3fba4173"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
