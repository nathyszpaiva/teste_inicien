const sounds = [
    { name: "Choro de Bebê", frequency: 500, color: "#FF0000", duration: 2 },
    { name: "Sirene de Polícia", frequency: 1000, color: "#00FF00", duration: 3 },
    { name: "Sirene de Ambulância", frequency: 1500, color: "#0000FF", duration: 4 },
    { name: "Barulho de Trânsito", frequency: 300, color: "#FFFF00", duration: 5 },
    { name: "Barulho do Metrô", frequency: 400, color: "#FF00FF", duration: 3 }
];

function displaySoundConfigs() {
    const soundsList = document.getElementById('sounds-list');
    soundsList.innerHTML = ''; // Limpa a lista antes de adicionar

    sounds.forEach((sound, index) => {
        const soundDiv = document.createElement('div');
        soundDiv.classList.add('sound-config');
        soundDiv.innerHTML = `
            <strong>${sound.name}</strong>
            <br>
            Frequência: <input type="number" value="${sound.frequency}" onchange="updateFrequency(${index}, this.value)">
            <br>
            Cor: <input type="color" value="${sound.color}" onchange="updateColor(${index}, this.value)">
            <br>
            Duração (s): <input type="number" value="${sound.duration}" onchange="updateDuration(${index}, this.value)">
            <br>
            <button onclick="testVibration(${index})">Testar Vibração</button>
            <hr>
        `;
        soundsList.appendChild(soundDiv);
    });
}

function updateFrequency(index, value) {
    sounds[index].frequency = value;
}

function updateColor(index, value) {
    sounds[index].color = value;
}

function updateDuration(index, value) {
    sounds[index].duration = value;
}

function testVibration(index) {
    const sound = sounds[index];
    alert(`Vibração: ${sound.name}\nFrequência: ${sound.frequency} Hz\nCor: ${sound.color}\nDuração: ${sound.duration} s`);
    // Aqui você pode integrar a lógica de vibração
}

// Exibir configurações de sons se a página for a de seleção de sons
if (document.getElementById('sounds-list')) {
    displaySoundConfigs();
}