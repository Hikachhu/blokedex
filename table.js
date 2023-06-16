var profilsJson = localStorage.getItem('profils');
var profils = JSON.parse(profilsJson);

var tableBody = document.querySelector('#profil-table tbody');

// Fonction pour supprimer une ligne du tableau
function removeRow(event) {
  var row = event.target.parentNode.parentNode; // Obtient la ligne parente du bouton supprimer
  var index = row.getAttribute('data-index'); // Récupère l'index de l'élément dans le tableau profils

  // Supprimer la ligne de la table
  row.remove();

  // Supprimer la ligne correspondante dans le localStorage
  profils.splice(index, 1);
  localStorage.setItem('profils', JSON.stringify(profils));

  // Mettre à jour les attributs data-index des lignes restantes
  var rows = tableBody.querySelectorAll('tr');
  rows.forEach(function(row, index) {
    row.setAttribute('data-index', index);
  });
}

// Générer les lignes du tableau
profils.forEach(function(profil, index) {
  var row = document.createElement('tr');
  row.setAttribute('data-index', index); // Ajoute l'index de l'élément en tant qu'attribut data-index

  var siteCell = document.createElement('td');
  siteCell.textContent = profil.site;
  row.appendChild(siteCell);

  var pseudoCell = document.createElement('td');
  pseudoCell.textContent = profil.pseudo;
  pseudoCell.classList.add('pseudo'); // Ajoute une classe pour cibler facilement le pseudo
  row.appendChild(pseudoCell);

  var raisonCell = document.createElement('td');
  raisonCell.textContent = profil.raison;
  row.appendChild(raisonCell);

  var actionCell = document.createElement('td');
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Supprimer';
  deleteButton.addEventListener('click', removeRow);
  actionCell.appendChild(deleteButton);
  row.appendChild(actionCell);

  tableBody.appendChild(row);
});
