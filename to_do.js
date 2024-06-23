
function addTextbox(){
    const existingInputs = document.querySelectorAll('.textbox input');
    existingInputs.forEach(input => input.readOnly = true);

    const existingContainer = document.querySelector('.textbox');
    const newContainer = existingContainer.cloneNode(true);

    const newInput = newContainer.querySelector('input');
    newInput.value = '';
    newInput.readOnly=false;

    const components = document.querySelector('.components');
    components.insertBefore(newContainer,components.querySelector('.buttons'));
}

function save(newInput){
    newInput.readOnly=true;
}

function editButton(button){
    const input = button.closest('.textbox').querySelector('input');
    console.log("before",input.readOnly);
    input.readOnly = false
    console.log("after",input.readOnly);
}

function deleteButton(button){
    const container = button.closest('.textbox');
    container.remove();
}