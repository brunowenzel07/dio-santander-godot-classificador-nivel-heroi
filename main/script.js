let herois = [
    ["Superman", 7500],
    ["Batman", 1500],
    ["Mulher Maravilha", 3000],
    ["Thor", 7000],
    ["Aquaman", 8500],
    ["Lanterna Verde", 750],
    ["Hulk", 10000],
    ["Mr. Bean", 100000]
]

for (let i=0; i < herois.length; i++) {
    let nome = herois[i][0];
    let xp = herois[i][1];
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

}