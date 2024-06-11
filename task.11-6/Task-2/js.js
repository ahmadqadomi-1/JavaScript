document.getElementById('Info').addEventListener('submit', function(event) {

    event.preventDefault(); 

    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        birthDate: document.getElementById('birthDate').value,
        image: document.getElementById('image').value,
        description: document.getElementById('description').value,
        major: document.getElementById('major').value,
        programmingLanguages: {
            html: document.getElementById('html').checked,
            css: document.getElementById('css').checked,
            js: document.getElementById('js').checked
        },
        siblingsNumber: document.getElementById('number').value,
        siblingsDescription: document.getElementById('describing').value
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    console.log('Form Data Saved:', formData);
});