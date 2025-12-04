// Adicionei isso após algumas pesquisas, pois não queria que o nome e o xp fosse fixo, mas que o próprio usuario que decidice nome e xp 
const readline = require("readline");

// Criando interface para capturar texto do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do herói: ", function(nomeHeroi) {

    rl.question("Digite o XP do herói: ", function(xpDigitado) {

        let XP = Number(xpDigitado);   // transforma em número
        let nivelHeroi = "";

        if (XP <= 1000) {
            nivelHeroi = "Ferro";
        } else if (XP >= 1001 && XP <= 2000) {
            nivelHeroi = "Bronze";
        } else if (XP >= 2001 && XP <= 5000) {
            nivelHeroi = "Prata";
        } else if (XP >= 5001 && XP <= 7000) {
            nivelHeroi = "Ouro";
        } else if (XP >= 7001 && XP <= 8000) {
            nivelHeroi = "Platina";
        } else if (XP >= 8001 && XP <= 9000) {
            nivelHeroi = "Ascendente";
        } else if (XP >= 9001 && XP <= 10000) {
            nivelHeroi = "Imortal";
        } else if (XP >= 10001) {
            nivelHeroi = "Radiante";
        }

        console.log("\nO Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);

        rl.close();
    });

});