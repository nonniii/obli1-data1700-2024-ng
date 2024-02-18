const kino = [];

function select() {
    let option = document.getElementById("film").value;
    console.log(option);
}

function visKino() {
    //Skriver ut det som står i inputbokser
    let ut =
        "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let p of kino) {
        ut += "<tr>";
        ut +=
            "<td>" +
            p.film +
            "</td><td>" +
            p.antall +
            "</td><td>" +
            p.fornavn +
            "</td><td>" +
            p.etternavn +
            "</td><td>" +
            p.telefonnr +
            "</td><td>" +
            p.epost +
            "</td>";
        ut += "</tr>";
    }
    document.getElementById("kino").innerHTML = ut;
}

//Input-validering som sjekker at alle inputfeltene inneholder noe.

function validerFilm() {
    const film = document.getElementById("film").value;
    if (film === "") {
        document.getElementById("film-error").innerHTML =
            "Vennligst velg en film";
        return false;
    } else {
        document.getElementById("film-error").innerHTML = "";
        return true;
    }
}

function validerAntall(antall) {
    if (antall === "") {
        document.getElementById("antall-error").innerHTML =
            "Vennligst fyll ut antall";
        return false;
    } else {
        document.getElementById("antall-error").innerHTML = "";
        return true;
    }
}

function validerNavn(navn, id) {
    if (navn === "") {
        document.getElementById(id).innerHTML = "Vennligst fyll ut navn";
        return false;
    } else {
        document.getElementById(id).innerHTML = "";
        return true;
    }
}
function validerTelefon(telefon) {
    if (telefon === "") {
        document.getElementById("telefon-error").innerHTML =
            "Vennligst fyll ut telefonnummer";
        return false;
    } else {
        document.getElementById("telefon-error").innerHTML = "";
        return true;
    }
}

function validerEpost(epost) {
    if (epost === "") {
        document.getElementById("epost-error").innerHTML =
            "Vennligst fyll ut e-post";
        return false;
    } else {
        document.getElementById("epost-error").innerHTML = "";
        return true;
    }
}

function kjopBillett() {
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const validerAntallOk = validerAntall(antall);
    const validerFornavnOk = validerNavn(fornavn, "fornavn-error");
    const validerEtternavnOk = validerNavn(etternavn, "etternavn-error");
    const validerTelefonOk = validerTelefon(telefonnr);
    const validerEpostOk = validerEpost(epost);
    const validerFilmOk = validerFilm();

    if (
        validerAntallOk &&
        validerFornavnOk &&
        validerEtternavnOk &&
        validerTelefonOk &&
        validerEpostOk &&
        validerFilmOk
    ) {
        const enBillett = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost,
        };

        kino.push(enBillett);

        //Nullstiller inputboksene
        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";

        visKino();
    }
}

function slettBillett() {
    kino.length = 0;
    visKino();
}