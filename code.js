export const configurazione = {
  testo: "P",

  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 1,
  densitàPuntiBase: 1,

  nascondiInterfaccia: true,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza (0, 1, 2, 3, ...)
 * @property {number} unita - Unita' di misura: corrisponde al 10% della dimensione più piccola della finestra (larghezza o altezza)
 * @property {number} volume - Il volume del microfono - Varia da 0 a 1
 * @property {number} frameCount - Il numero di frame passati dall'avvio del programma
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation) - Varia da 0 a 360
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt) - Varia da -90 a 90
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt) - Varia da -90 a 90
 *
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  frameCount,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  //let lunghezza = map(volume, 0, 1, 50, 200);
  //let larghezza = map(sin(frameCount * 20 + indice), -1, 1, -50, 20);

  stroke("white");
  fill("red");
  //ellipse(x, y, lunghezza, 1);
  //ellipse(x, y, larghezza, 5);

  //ellipse(x, y, 90, 1);

  //ellipse(x, y, larghezza, 10);
  //ellipse(x, y, 10, 10);

  //line(x, y, mouseX, mouseY);

  //ellipse(x, y, larghezza, 10);

  //ellipse(x, y, larghezza, 8);
  //rect(x, y, larghezza, 8);

  //ellipse(x, y, larghezza, 10);

  //ellipse(x, y, larghezza, 10);
  //ellipse(x, y, larghezza, 30);

  push();
  translate(x, y);
  rotate(frameCount * 6 + indice * 10);
  translate(volume * 1000, 0);
  ellipse(20, 0, 50, 20);
  pop();

  // push();
  // fill("white");
  // translate(x, y);
  // rotate(random(0, 360));
  // translate(volume * 1000, 0);
  // ellipse(0, 0, 50, 30);
  // pop();

  // push();
  // translate(x, y);
  // rotate(angolo + 90 + frameCount + indice);
  // let lunghezza = map(volume, 0, 1, 30, 200);
  // // line(-lunghezza / 2, 0, lunghezza / 2, 0);
  // ellipseMode(CENTER);
  // noFill();
  // rect(0, 0, lunghezza);

  pop();
}

/**
 * Carica le risorse necessarie
 * Esempio: carica immagini, suoni, ecc.
 */
export function caricamentoRisorse() {}

/**
 * Imposta le impostazioni iniziali
 * Esempio: impostazioni di frame rate, misura degli angoli, ecc.
 */
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
  rectMode(CENTER);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background("white");

  // [INFO] Rimuovi il commento per disegnare il testo
  //fill("yellow");
  //disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
