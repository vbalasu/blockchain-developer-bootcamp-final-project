# blockchain-developer-bootcamp-final-project

My final project is a DNS-based approval system. It will reach out to regular Internet users (outside the blockchain) with an approval request, and record their response (or lack thereof).

The user interface can be accessed here: https://static.cloudmatica.com/blockchain/index.html

My public Ethereum address: 0x539BA486B9C2ea933814B6310eE46A96bE3990eA

You can watch the screencast here: [screencast.mov](screencast.mov)

### Approval Contract Example Workflow
1. User gathers the information related to the approval request
  - Email address of approver(s)
  - Content being approved
  - Approval window (expressed in minutes)

2. User visits the contract web user interface and fills out a form

3. User submits the form (after confirming valid inputs)

4. Contract stores a record of approval request received

5. Backend service generates email(s) for each approver and sends them (not yet implemented)

6. Backend service listens for responses (not yet implemented)

7. Backend service checks the DKIM signature of incoming messages to confirm that they are coming from a valid DNS domain (not yet implemented)

8. Contract records responses

9. Close the approval request when all approvers have responded, or if the approval window expires (whichever comes first)


