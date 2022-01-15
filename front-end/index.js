function processForm() {
    var formData = {
        approverEmail: document.querySelector('#approverEmail').value,
        contents: document.querySelector("#contents").value,
        approvalWindowMinutes: document.querySelector('#approvalWindowMinutes').value
    };
    return formData;
}

var form = document.querySelector('#createApprovalRequest');
form.addEventListener('submit', (event) => {
    // if (!form.checkValidity()) {
    //     event.preventDefault()
    //     event.stopPropagation()
    //   }
      var formData = processForm();
      form.classList.add('was-validated');
      event.preventDefault()
      event.stopPropagation()
      console.log(formData);
});
