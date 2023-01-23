function obtenerSecuenciaFibonacci(num) {
    let secuencia = [1, 1];
    for (let i = 2; i < num; i++) {
      secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }
    return secuencia;
  }
  console.log(obtenerSecuenciaFibonacci(6));
  