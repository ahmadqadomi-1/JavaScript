const url = "https://66681676f53957909ff67af8.mockapi.io/users/Animals"
const select = document.getElementById("animals");
const image = document.getElementById("catImg");

async function ani () {
    const response = await fetch(url);
    const readJson = await response.json ();
    for (let i = 0 ; i< readJson.length ; i++) {
        const newObj = document.createElement("option");
    newObj.value= readJson [i]. id;
    newObj.textContent=readJson[i]. name;
    select.appendChild (newObj);
    }
    select.addEventListener('change', (event) => {
        const selectId = event.target.value;
        const selectedAnimal = readJson.find(animals => animals.id === selectId);
        if (selectedAnimal) {
            image.src = selectedAnimal.image;
        }
    });
}
ani();
