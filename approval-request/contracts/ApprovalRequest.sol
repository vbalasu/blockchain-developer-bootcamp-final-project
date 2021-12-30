// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import 'openzeppelin-solidity/contracts/access/Ownable.sol';

struct ApprovalRequestData {
    uint id;
    string approverEmail;
    string contents;
    uint approvalWindowMinutes;
    string response;
}

contract ApprovalRequest is Ownable {
    ApprovalRequestData[] public data;

    function get(uint _index) external view returns (ApprovalRequestData memory) {
        return data[_index];
    }

    // Creates a new approval request, adds it to contract storage and returns the id
    function create(string calldata _approverEmail, string calldata _contents, uint _approvalWindowMinutes) external returns (uint, uint) {
        ApprovalRequestData memory _data;
        uint _id = block.timestamp;
        _data.id = _id;
        _data.approverEmail = _approverEmail;
        _data.contents = _contents;
        _data.approvalWindowMinutes = _approvalWindowMinutes;
        data.push(_data);
        return (_id, data.length - 1);   // Return the timestamp (id) and position (index) in the array
    }

    // Sets the approval response for the given index
    // If response is already set, return an error
    function setResponse(uint _index, string calldata _response) external {
        require(bytes(data[_index].response).length == 0, "Response is already set");
        data[_index].response = _response;
    }
}
