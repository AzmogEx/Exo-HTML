function calcul() {
	//saisie utilisateur
	var volume = parseFloat(document.getElementById("volume").value);

	//variables
	var zone = parseFloat(document.getElementById("zone").value);
	var isolation = parseFloat(document.getElementById("isolation").value);
	var nord = parseFloat(document.getElementById("nord").checked ? document.getElementById("nord").value : 0);
	var habitation = parseFloat(document.getElementById("habitation").value);
	var temperature = parseFloat(document.getElementById("temperature").value);
	var altitude = parseFloat(document.getElementById("altitude").value);
	var sdb = parseFloat(document.getElementById("sdb").checked ? document.getElementById("sdb").value : 0);

	var resultatCalcul = (volume + zone + isolation + nord + habitation + temperature + altitude + sdb) / 0.18;

	// Afficher le résultat
	document.getElementById("resultatCalcul").innerText = "Résultat du calcul : " + resultatCalcul;
}

document.getElementById("calculButton").addEventListener("click", function () {
	calcul();
});
