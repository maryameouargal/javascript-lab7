console.log("===== Lab JavaScript :  Fonctions JavaScript : rechercher une lettre dans un mot =====");


// Partie A — Réaliser l’exercice de base (pas à pas) 

console.log('Partie A — Réaliser l’exercice de base (pas à pas) ');

function letterFinderA(word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}
console.log(typeof letterFinderA); 
letterFinderA("test", "t");

// Partie B — Comprendre et améliorer

console.log('Partie B — Comprendre et améliorer');

// B2

console.log('B2 — Ajouter une validation des paramètres (robustesse)');

function letterFinderB(word, match) {
  if (typeof word !== "string") {
    console.log("Erreur: word doit être une chaîne de caractères.");
    return;
  }
  if (typeof match !== "string" || match.length !== 1) {
    console.log("Erreur: match doit être une seule lettre (1 caractère).");
    return;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

letterFinderB("game", "t");

//B3

console.log('B3 — Variante : recherche insensible à la casse (A = a)');

function letterFinderIgnoreCase(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    console.log("Paramètres invalides.");
    return;
  }

  const w = word.toLowerCase();
  const m = match.toLowerCase();

  for (let i = 0; i < w.length; i++) {
    if (w[i] === m) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}
letterFinderIgnoreCase("STATESIDE", "t");

// B4 
console.log('B4 — Variante : retourner les positions au lieu d’afficher');

function letterPositions(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    return [];
  }

  const positions = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      positions.push(i);
    }
  }
  return positions;
}

console.log(letterPositions("test", "t")); 

// B5 

console.log('B5 — Variante : arrêter dès la première occurrence '); 

function firstLetterPosition(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    return -1;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) return i;
  }
  return -1;
}

console.log(firstLetterPosition("test", "t")); 
console.log(firstLetterPosition("test", "z")); 

// Partie C — Exercices d’application
 
console.log(' Exercice 1');

letterFinderA("banana", "a");

console.log(' Exercice 2');

letterFinderB("hello", "z");

console.log(' Exercice 3 (bonus)');

function countLetter(word, match) {
    if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
        console.log("Paramètres invalides");
        return 0;
    }
    
    let count = 0; 
    
   
    for (let i = 0; i < word.length; i++) {
       
        if (word[i] === match) {
            count++;
        }
    }
    
    return count;  
}

console.log(countLetter("banana", "a"));