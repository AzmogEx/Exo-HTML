const lesProduits = document.querySelectorAll("#liste_produits li");
const panier = document.querySelector(".panier");

lesProduits.forEach((produit) => {
  produit.addEventListener("click", (e) => {
    panier.innerHTML += "<li count='1>" + produit.textContent + "</li>";
  });
});
