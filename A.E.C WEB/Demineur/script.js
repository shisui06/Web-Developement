for(let i = 0; i < taille; i++){
    nbBombe = 0;
    if(grille[i] != 'x'){
      if(grille[i-long] == 'x' && i >= long)
        nbBombe++;
      if(grille[i-long+1] == 'x' && i >= long && (i + 1) % long != 0)
        nbBombe++;
      if(grille[i+1] == 'x' && (i + 1) % long != 0)
        nbBombe++;
      if(grille[i+long+1] == 'x' && i <= taille - long && (i + 1) % long != 0)
        nbBombe++;
      if(grille[i+long] == 'x' && i <= taille - long)
        nbBombe++;
      if(grille[i+long-1] == 'x' && i <= taille - long && i % long != 0)
        nbBombe++;
      if(grille[i-1] == 'x' && i % long != 0)
        nbBombe++;
      if(grille[i-long-1] == 'x' && i >= long && i % long != 0)
        nbBombe++;
      grille[i] = nbBombe;
    }
  }