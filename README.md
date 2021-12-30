# blockchain-developer-bootcamp-final-project

My final project will consist of a DNS-based approval system. It will reach out to regular Internet users (outside the blockchain) with an approval request, and record their response (or lack thereof).

### Approval Contract Example Workflow
1. User gathers the information related to the approval request
  - Email address of approver(s)
  - Content being approved
  - Approval window (expressed in minutes)

2. User visits the contract web user interface and fills out a form

3. User submits the form (after confirming valid inputs)

4. Contract stores a record of approval request received

5. Contract generates email(s) for each approver and sends them

6. Contract listens for responses

7. Contract checks the DKIM signature of incoming messages to confirm that they are coming from a valid DNS domain

8. Contract records responses

9. Close the approval request when all approvers have responded, or if the approval window expires (whichever comes first)