function verification() {
    // Récupérer les valeurs des champs
    let a = document.forms["formul"]["fname"].value.trim();
    let b = document.forms["formul"]["lname"].value.trim();
    let c = document.forms["formul"]["email"].value.trim();
    let d = document.forms["formul"]["tel"].value.trim();
    let e = document.forms["formul"]["date"].value.trim();
    let f = document.forms["formul"]["time"].value.trim();
    let g = document.forms["formul"]["nbP"].value.trim();

    // Liste pour stocker les noms des champs vides
    let emptyFields = [];

    // Vérifier chaque champ
    if (a === "") {
        emptyFields.push("First name");
    }
    if (b === "") {
        emptyFields.push("Last name");
    }
    if (c === "") {
        emptyFields.push("Email");
    }
    if (d === "") {
        emptyFields.push("Tel");
    }
    if (e === "") {
        emptyFields.push("Date");
    }
    if (f === "") {
        emptyFields.push("Time");
    }
    if (g === "") {
        emptyFields.push("Nombre de personnes");
    }

    // Si des champs sont vides, afficher une alerte
    if (emptyFields.length > 0) {
        alert("Les champs suivants sont vides :\n- " + emptyFields.join("\n- "));
        return false; // Empêcher la soumission du formulaire
    }

    // Si tout est valide, permettre la soumission du formulaire
    return true;
}