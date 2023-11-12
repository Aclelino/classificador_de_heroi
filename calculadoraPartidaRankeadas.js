var saldo

function rankeadas(vitorias,derrotas){
    let vitoria = (vitorias - derrotas)

    saldo = vitoria

    if (vitoria <= 10){
        vitoria = "Ferro";
    }
    else if (vitoria >11 && vitoria <= 20 ){
        vitoria = "Bronze";

    }
    else if (vitoria >21 && vitoria <= 50 ){
        vitoria = "Prata";

    }

    else if (vitoria >51 && vitoria <= 80 ){
        vitoria = "Ouro";

    }

    else if (vitoria >81 && vitoria <= 90 ){
        vitoria = "Diamante";

    }

    else if (vitoria >91 && vitoria <= 100 ){
        vitoria = "Lendário";

    }

    else if (vitoria >= 101 ){
        vitoria = "Imortal";

    }

    return vitoria

}


let nivel = rankeadas(200,100)

console.log("O Heroi tem de saldo de " + saldo,"e está no nivel " + nivel );
