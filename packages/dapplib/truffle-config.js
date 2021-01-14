require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name rifle rural mixture hunt hidden system gesture'; 
let testAccounts = [
"0x759fc0af8b9d67fa9eb47b31181300bc7c264c8ce5646d6e26e6affb924cbbd6",
"0xd5ee92b499616b32cab3fff2a1d5a364924e1ef58d24728c96c835891db1b72f",
"0x030714a846d1b8a1f855c6859c5cbae9778ed6202ba91f09803353d035998be5",
"0x6187dd83bfe06615c1d3ef49905c6cbb6a8feb24e009268ca7ff2943376efaa4",
"0xe77ae8e65908aac5532aea5695caed185cd4745cd42b866ba20e3c02018ffca9",
"0x1855d856e4962bc033cc4a090d2b55a350ec4742e7de40097a1ddc60e4588ea3",
"0x1ab76b0f0344f0991ee4e296a9b3317148fda491b182e8bca226ea20d32225a3",
"0xfa572d4e8c3ac7dc0a98f08d4d12937fb7c4edc171309f8aa7150512032e0d89",
"0x7d49a3db32434cf265fb000a5546434fd96467d894e84669c8a2e7638a28d9b9",
"0xbdf4618f32fb464f5e9a787d1746bfffd8f2f14baf2a0b96123bd6ac6fd5fdbe"
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
