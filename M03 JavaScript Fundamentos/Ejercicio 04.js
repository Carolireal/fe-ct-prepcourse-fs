/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   result = Math.pow(num,2);
   return result;
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   result = Math.pow(num,3);
   return result;
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   result = Math.pow(num,exponent);
   return result;
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   result = Math.round(num);
   return result;
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   result = Math.ceil(num);
   return result;
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   
   result = Math.random();
   return result;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
