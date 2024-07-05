const ninjaList = [
    {
        name: "Naruto Uzumaki",
        village: "Konoha",
        image: "images/naruto.jpg",
        description: "Ninja dari Konoha dengan jurus Rasengan.",
        price: 100
    },
    {
        name: "Sasuke Uchiha",
        village: "Konoha",
        image: "images/sasuke.jpg",
        description: "Ninja dari Konoha dengan jurus Chidori.",
        price: 120
    },
    // Add more ninjas as needed
];

const ninjaContainer = document.getElementById('ninja-container');

ninjaList.forEach(ninja => {
    const ninjaCard = document.createElement('div');
    ninjaCard.classList.add('ninja-card');
    
    ninjaCard.innerHTML = `
        <img src="${ninja.image}" alt="${ninja.name}">
        <h3>${ninja.name}</h3>
        <p>Desa: ${ninja.village}</p>
        <p>${ninja.description}</p>
        <p>Harga: $${ninja.price}</p>
        <button class="buy-button" onclick="buyNinja('${ninja.name}', ${ninja.price})">Beli</button>
    `;
    
    ninjaContainer.appendChild(ninjaCard);
});

function buyNinja(name, price) {
    const ninjaDetail = `Ninja: ${name}, Harga: $${price}\n`;
    saveNinjaToFile(ninjaDetail);

function saveNinjaToFile(data) {
    const blob = new Blob([data], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'ninja.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = '_blank';
    anchor.style.display = 'none'; // make it hidden if needed
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
