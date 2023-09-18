function addition() {
    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;
  
    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);
  
    let resultat = numero1 + numero2;
    window.alert("Le résultat de l'addition est : " + resultat);
  }

 function soustraction() {
    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;
  
    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);
  
    let resultat = numero1 - numero2;
    window.alert("Le résultat de la soustraction est : " + resultat);
  }
  
  function multiplication() {
    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;
  
    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);
  
    let resultat = numero1 * numero2;
    window.alert("Le résultat de la multiplication est : " + resultat);
  }
  
  function division() {
    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;
  
    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);
  
    if (numero2 === 0) {
      window.alert("Erreur : Division par zéro !");
    } else {
      let resultat = numero1 / numero2;
      window.alert("Le résultat de la division est : " + resultat);
    }
  }