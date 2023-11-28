const formulaire = document.querySelector("form");

// Écouteur d'événement pour la soumission du formulaire
formulaire.addEventListener("submit", function (event) {
	event.preventDefault();

	//saisie utilisateur
	var volume = parseFloat(document.getElementById("volume").value);
	var zone = parseFloat(document.getElementById("zone").value);
	var isolation = parseFloat(document.getElementById("isolation").value);
	var nord = parseFloat(document.getElementById("nord").checked ? document.getElementById("nord").value : 0);
	var habitation = parseFloat(document.getElementById("habitation").value);
	var temperature = parseFloat(document.getElementById("temperature").value);
	var altitude = parseFloat(document.getElementById("altitude").value);
	var sdb = parseFloat(document.getElementById("sdb").checked ? document.getElementById("sdb").value : 0);

	var resultatCalcul = (volume + zone + isolation + nord + habitation + temperature + altitude + sdb) / 0.18;

	// Affichage du résultat dans la balise <p id="resultat">
	var resultat = document.getElementById("resultat");
	resultat.value = resultatCalcul;
});
