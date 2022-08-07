function calcular(tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'c') {
      document.getElementById('resultado').value = ''
    } else if (valor === '=') {
      try {
        var resul = document.getElementById('resultado').value
        document.getElementById('resultado').value = eval(resul)
      } catch (e) {
        document.getElementById('resultado').value = 'Error'
      }
    } else {
      document.getElementById('resultado').value += valor
    }
  } else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor
  }
}
