var Web3 = require('web3');
//var web3 = new Web3('http://localhost:7545');
var web3 = new Web3('https://ropsten.infura.io/v3/575bff3c07814421ae83000e25d2993e');
async function getBalance(address) {
    var balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
}
async function send5eth() {
    await web3.eth.sendTransaction({from: '0x353A375d1EbAbd1FdBd30bC07D08A7cB4EdC52E0', to: '0x539BA486B9C2ea933814B6310eE46A96bE3990eA', value: web3.utils.toWei('5', 'ether')});
    return await getBalance('0x539BA486B9C2ea933814B6310eE46A96bE3990eA');
}
let ethBalance;
async function main() {
    ethBalance = await getBalance('0x539BA486B9C2ea933814B6310eE46A96bE3990eA');
    console.log(ethBalance);
}
main()
