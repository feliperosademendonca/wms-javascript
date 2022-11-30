var end = [
  {"id":"001", "rua":"a", "lado":"esquerdo","Predio":"1","andar":"1","produto":"prod{''}"},
  {"id":"002", "rua":"a", "lado":"esquerdo","Predio":"1","andar":"2","produto":"prod{''}"},
  {"id":"003", "rua":"a", "lado":"esquerdo","Predio":"1","andar":"3","produto":"prod{''}"},
  {"id":"004", "rua":"a", "lado":"esquerdo","Predio":"1","andar":"4","produto":"prod{''}"},
  {"id":"005", "rua":"a", "lado":"esquerdo","Predio":"2","andar":"1","produto":"prod{''}"},
  {"id":"006", "rua":"a", "lado":"esquerdo","Predio":"2","andar":"2","produto":"prod{''}"},
  {"id":"007", "rua":"a", "lado":"esquerdo","Predio":"2","andar":"3","produto":"prod{''}"},
  {"id":"008", "rua":"a", "lado":"esquerdo","Predio":"2","andar":"4","produto":"prod{''}"},
  {"id":"009", "rua":"a", "lado":"esquerdo","Predio":"3","andar":"1","produto":"prod{''}"},
  {"id":"010","rua":"a", "lado":"esquerdo","Predio":"3","andar":"2","produto":"prod{''}"},
  {"id":"011","rua":"a", "lado":"esquerdo","Predio":"3","andar":"3","produto":"prod{''}"},
  {"id":"012","rua":"a", "lado":"esquerdo","Predio":"3","andar":"4","produto":"prod{''}"},
  {"id":"013","rua":"a", "lado":"esquerdo","Predio":"4","andar":"1","produto":"prod{''}"},
  {"id":"014","rua":"a", "lado":"esquerdo","Predio":"4","andar":"2","produto":"prod{''}"},
  {"id":"015","rua":"a", "lado":"esquerdo","Predio":"4","andar":"3","produto":"prod{''}"},
  {"id":"016","rua":"a", "lado":"esquerdo","Predio":"4","andar":"4","produto":"prod{''}"},
  {"id":"017","rua":"a", "lado":"esquerdo","Predio":"5","andar":"1","produto":"prod{''}"},
  {"id":"018","rua":"a", "lado":"esquerdo","Predio":"5","andar":"2","produto":"prod{''}"},
  {"id":"019","rua":"a", "lado":"esquerdo","Predio":"5","andar":"3","produto":"prod{''}"},
  {"id":"021","rua":"a", "lado":"esquerdo","Predio":"5","andar":"4","produto":"prod{''}"},
  {"id":"022","rua":"a", "lado":"esquerdo","Predio":"6","andar":"1","produto":"prod{''}"},
  {"id":"023","rua":"a", "lado":"esquerdo","Predio":"6","andar":"2","produto":"prod{''}"},
  {"id":"024","rua":"a", "lado":"esquerdo","Predio":"6","andar":"3","produto":"prod{''}"},
  {"id":"025","rua":"a", "lado":"esquerdo","Predio":"6","andar":"4","produto":"prod{''}"},
]

var prod=[
  {"EAN":1,             "codigo":001,"nome":"coca 350ml unid","validade":"01/01/23","quantidade":900},
  {"EAN":7894900011517, "codigo":002,"nome":"coca 1lt unid","validade":"01/01/23","quantidade":800},
  {"EAN":7894900011512, "codigo":003,"nome":"coca 2lt unid","validade":"01/01/23","quantidade":800},
  {"EAN":7894900011513, "codigo":004,"nome":"coca 500ml unid","validade":"01/01/23","quantidade":800},
  {"EAN":7894900011514, "codigo":005,"nome":"coca 3lt unid","validade":"01/01/23","quantidade":800},
  {"EAN":7894900011515, "codigo":006,"nome":"coca 220ml unid","validade":"01/01/24","quantidade":800},
  {"EAN":7894900011516, "codigo":007,"nome":"coca 200ml unid","validade":"01/01/23","quantidade":800},
  {"EAN":7894900011510, "codigo":010,"nome":"coca Zero 350ml unid","validade":"01/01/23","quantidade":800},
]

//carrega página
$(document).ready(function() {
  //alert("carregou")

//Pesquisar  
$("button[name=btn-Pesquisar]").click(function(){
//alert("clicou")

  let inputPesquisa= parseInt($('#inputText').val())
   //percorre o arrey de objetos e seus valores
$.each(prod, function(index, prop ){

if(inputPesquisa==prop.EAN){
  
 let tdEan = prod[index].EAN
 let tdCodigo = prod[index].codigo
 let tdNome = prod[index].nome
 let tdQuantidade = prod[index].quantidade
 let tdValidade = prod[index].validade
 $('table').html( 
  +'<tbody>'
  +'<tr> <th>EAN</th><th>cod</th><th>nome</th><th>valid</th><th>quantidade</th><th>rua</th><th>lado</th><th>predio</th><th>andar</th></tr>'
  +'<tr><td>'+tdEan+'</td><td>'+tdCodigo+'</td><td>'+tdNome+'</td><td>'+tdValidade+'</td><td>'+tdQuantidade+'</td><td>'+""+'</td><td>'+""+'</td><td>'+""+'</td></tr><br>'
  +'</tbody>'
  )
  return false;


} 

})


    let tdEan = prod[inputPesquisa].EAN
    let tdCodigo = prod[inputPesquisa].codigo
    let tdNome = prod[inputPesquisa].nome
    let tdQuantidade = prod[inputPesquisa].quantidade
    let tdValidade = prod[inputPesquisa]

    // loop dentro de outro loop
 
      $('table').html( 
        +'<tbody>'
        +'<tr> <th>EAN</th><th>cod</th><th>nome</th><th>validade</th><th>rua</th><th>lado</th><th>predio</th><th>andar</th></tr>'
        +'<tr><td>'+tdEan+'</td><td>'+tdCodigo+'</td><td>'+tdNome+'</td><td>'+tdValidade+'</td><td>'+""+'</td><td>'+""+'</td><td>'+""+'</td><td>'+""+'</td></tr><br>'
        +'</tbody>'
        )
  

 //mostrar o 'end' que tem o 'prod' pesquisado

//retornar valor da pesquisa dentro da tabela



 });
})