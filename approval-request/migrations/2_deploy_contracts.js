const ApprovalRequest = artifacts.require("ApprovalRequest");

//https://ethereum.stackexchange.com/questions/97012/truffle-test-doesnt-connect-to-ganache
module.exports = async function (deployer) {
  const accounts = await web3.eth.getAccounts();
  await deployer.deploy(ApprovalRequest, {from: accounts[0], overwrite: false});
  this.deployedApprovalRequest = await ApprovalRequest.deployed();
  console.log(`Migrations deployed ApprovalRequest: ${this.deployedApprovalRequest.address}`);
};
