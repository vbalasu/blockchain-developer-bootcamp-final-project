const ApprovalRequest = artifacts.require("ApprovalRequest");

module.exports = function (deployer) {
  deployer.deploy(ApprovalRequest);
};
