const ApprovalRequest = artifacts.require("ApprovalRequest");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ApprovalRequest", function (/* accounts */) {
  it("should assert true", async function () {
    await ApprovalRequest.deployed();
    return assert.isTrue(true);
  });
  it("can create a new approval request", async function() {
    let approvalRequest = await ApprovalRequest.deployed();
    let response = await approvalRequest.create('vbalasu@gmail.com', 'Test create request', 1);
    return assert.isTrue(response['receipt']['status']);
  });
  it("can get approval request", async function() {
    let approvalRequest = await ApprovalRequest.deployed();
    let response = await approvalRequest.get(0);
    return assert.equal(response['approvalWindowMinutes'], 1);
  });
  it("allows owner to set response on unexpired approval request", async function() {
    let approvalRequest = await ApprovalRequest.deployed();
    await approvalRequest.create('vbalasu@gmail.com', 'Test create request', 2);
    let length = await approvalRequest.length();
    let response = await approvalRequest.setResponse(length.toNumber() - 1, "approved");
    return assert.isTrue(true);
  });
  //it("prevents owner from setting response on expired approval request", async function() {});
});
