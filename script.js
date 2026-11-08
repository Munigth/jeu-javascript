// ==========================================
// OUVRIR UN JEU
// ==========================================

function jouer(jeu) {


    // ==============================
    // SNAKE
    // ==============================

    if (jeu === "snake") {

        window.location.href =
            "snake/index.html";

    }


    // ==============================
    // CAR RACE
    // ==============================

    else if (jeu === "car") {

        window.location.href =
            "car/index.html";

    }

    // ==============================
    // BOAT RACE
    // ==============================

    else if (jeu === "boat") {

        window.location.href =
            "boat/index.html";

    }

    // ==============================
    // ARCHERIE
    // ==============================

    else if (jeu === "archery") {

        window.location.href =
            "archery/index.html";

    }

    
    // ==============================
    // ZUMA
    // ==============================

    else if (jeu === "Zuma") {

        window.location.href =
            "Zuma/index.html";

    }

    // ==============================
    // PONG
    // ==============================

    else if (jeu === "Pong") {

        window.location.href =
            "pong/index.html";

    }



    // ==============================
    // TETRIS
    // ==============================

    else if (jeu === "tetris") {

        window.location.href =
            "tetrix/index.html";

    }

    // ==============================
    // pacman
    // ==============================

    else if (jeu === "pacman") {

        window.location.href =
            "pacman/index.html";

    }

    // ==============================
    // SUDOKU
    // ==============================

    else if (jeu === "sudoku") {

        window.location.href =
            "sudoku/index.html";

    }

     // ==============================
    // Millionnaire
    // ==============================

    else if (jeu === "millionnaire") {

        window.location.href =
            "millionnaire/index.html";

    }

    // ==============================
    // JEU INCONNU
    // ==============================

    else {

        console.error(
            "Jeu inconnu :",
            jeu
        );

    }

}