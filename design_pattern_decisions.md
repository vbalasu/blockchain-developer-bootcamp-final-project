The ApprovalRequest contract implements the Ownable design pattern. Only the contract owner is allowed to store a response against an approval request (after properly verifying DKIM signatures)

The contract will eventually implement the Oracle pattern, where the backend will securely update the response field on the blockchain
