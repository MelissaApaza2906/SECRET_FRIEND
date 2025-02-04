// script.js

// Array para almacenar los nombres de los amigos
let friends = [];

// Función para añadir el nombre a la lista
function addName() {
    let name = document.getElementById("nameInput").value.trim();
    if (name !== "") {
        friends.push(name);
        document.getElementById("nameInput").value = ""; // Limpiar el campo de texto
        updateFriendsList();
    }
}

// Función para actualizar la lista de amigos en la página
function updateFriendsList() {
    let friendsList = document.getElementById("friendsList");
    friendsList.innerHTML = "";
    friends.forEach(function(friend) {
        let li = document.createElement("li");
        li.textContent = friend;
        friendsList.appendChild(li);
    });
}

// Función para realizar el sorteo
function drawName() {
    if (friends.length === 0) {
        document.getElementById("result").textContent = "¡Por favor, añade al menos un amigo!";
        return;
    }

    let randomIndex = Math.floor(Math.random() * friends.length);
    let drawnFriend = friends[randomIndex];
    document.getElementById("result").textContent = `¡Tu amigo secreto es: ${drawnFriend}!`;
}
