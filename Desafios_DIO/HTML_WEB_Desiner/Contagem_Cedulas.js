let valor = parseInt(gets());

function ContaNotas(valor) {
  var cedulas = [100,50,20,10,5,2,1];
  var quantidade = {'100': 0,'50': 0,'20': 0,'10': 0,'5': 0,'2': 0,'1': 0};
	console.log(valor);
  for (var nota of cedulas) {
    while (valor >= nota) {
      quantidade[nota] += 1
      valor -= nota
    }
    console.log(quantidade[nota] + " nota(s) de R$ " + nota + ",00" +'\n');
  }

}
ContaNotas(valor)
