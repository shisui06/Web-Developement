export function calculerFrais(distance, montantCommande, isPremium) {
 let frais = 0;

 // Livraison gratuite pour les membres premium avec une commande > 150$
 if (isPremium && montantCommande > 150) {
   return 0;
 }

 // Frais de 10$ si la distance est < 10 km
 if (distance < 10) {
   frais += 10;
 }

 // Frais fixe de 2$ pour les non-membres premium
 if (!isPremium) {
   frais += 2;
 }

 return montantCommande + frais;
}
