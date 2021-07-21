numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();

function NumerosPares (numero) {
    if (numero % 2 == 0) 
        return numero;
}

function NumerosImpares (numero) {
    if (numero % 2 != 0) 
        return numero;
}

function NumerosPositivos (numero) {
    if (numero  > 0) 
        return numero;
}

function NumerosNegativos (numero) {
    if (numero  < 0) 
        return numero;
}


pares = numero.filter( NumerosPares );
impares = numero.filter( NumerosImpares );

positivos = numero.filter( NumerosPositivos  );
negativos = numero.filter( NumerosNegativos  );

print(pares.length + " valor(es) par(es)");
print(impares.length + " valor(es) impar(es)");

print(positivos.length + " valor(es) positivo(s)");
print(negativos.length + " valor(es) negativo(s)");

