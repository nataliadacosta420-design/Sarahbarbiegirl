// ABRIR EMBALAGEM

function abrirCaixa(){

    const intro =
    document.getElementById("intro");

    intro.classList.add("open");

    setTimeout(() => {

        intro.style.display = "none";

    }, 1500);

}


// SCANNER

function escanear(){

    const resultado =
    document.getElementById(
        "scannerResultado"
    );

    resultado.innerHTML = `

        <br>

        ✓ Carisma detectado<br>
        ✓ Bom gosto detectado<br>
        ✓ Compatibilidade com bonecas detectada<br>
        ✓ Edição rara confirmada<br><br>

        <strong>
        Resultado:
        Sarah Barbie Girl™
        Collector Edition
        </strong>

    `;
}


// CURIOSIDADES

const curiosidades = [

    "Possui compatibilidade oficial com o universo do spiderman . 🕷️",

    "Nível de carisma acima da média. ✨",

    "Edição extremamente difícil de encontrar. 🎀",

    "Pode causar sorrisos inesperados. 💖",

    "Colecionável certificada pela Mattel. 👑",

    "Especialista em ter bom gosto. 😎",

    "Possui energia de protagonista. ⭐"

];

function mostrarCuriosidade(){

    const curiosidade =
    document.getElementById(
        "curiosidade"
    );

    const sorteio =

        curiosidades[
            Math.floor(
                Math.random() *
                curiosidades.length
            )
        ];

    curiosidade.innerHTML =
    sorteio;
}


// MENSAGEM

function mostrarMensagem(){

    alert(

`💌 Mensagem da Desenvolvedora

Parabéns!

Você encontrou a mensagem secreta.

Este site foi desenvolvido com criatividade,
dedicação e uma quantidade questionável
de tempo livre.

Obrigada por visitar a coleção oficial
Sarah Barbie Girl™ 🎀

beijinhos da nati`

    );

}


// CONQUISTA

let conquistaLiberada = false;

function desbloquearConquista(){

    if(conquistaLiberada) return;

    conquistaLiberada = true;

    alert(

`🏆 CONQUISTA DESBLOQUEADA

Você encontrou a protagonista
deste site.

Recompensa:

+100 pontos de raridade ✨`

    );

}