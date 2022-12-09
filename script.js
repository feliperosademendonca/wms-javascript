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
  {"EAN":7894900011511, "codigo":01,"nome":"coca 350ml unid","validade":"01/01/23","quantidade":900},
  {"EAN":7894900011517, "codigo":02,"nome":"coca 1lt unid","validade":"01/01/23","quantidade":800},
  {"EAN":7894900011512, "codigo":03,"nome":"coca 2lt unid","validade":"01/01/23","quantidade":800},
  {"EAN":7894900011513, "codigo":04,"nome":"coca 500ml unid","validade":"01/01/23","quantidade":800},
  {"EAN":7894900011514, "codigo":05,"nome":"coca 3lt unid","validade":"01/01/23","quantidade":800},
  {"EAN":7894900011515, "codigo":06,"nome":"coca 220ml unid","validade":"01/01/24","quantidade":800},
  {"EAN":7894900011516, "codigo":07,"nome":"coca 200ml unid","validade":"01/01/23","quantidade":800},
  {"EAN":7894900011510, "codigo":08,"nome":"coca Zero 350ml unid","validade":"01/01/23","quantidade":800},
]

//carrega página
$(document).ready(function() {
  //alert("carregou")

//Pesquisar  
  $("button[name=btn-Pesquisar]").click(function(){
  //alert("clicou em pesquisar")

    let inputPesquisa= parseInt($('#inputText').val())
    //percorre o arrey de objetos e seus valores
      $.each(prod, function(index, element){

        if(inputPesquisa===element.EAN){
         
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
                  return false

            } else{
              //msg erro pesquisa EAN
              alert('EAN não encontrado')
              return false

            }
      })
  });


  $("button[name=ADD-EAN]").click(function  (){
      
      var dataFormatada = $("input[name=ADD-DATE-VALIDADE]").val().replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1');
      //alert("clicou em add")
      let prod_add_end= {
        ean:$("input[name=ADD-EAN]").val(),
        validade:dataFormatada,
        quantidade:$("input[name=ADD-QUANTIDADE]").val(),
        rua:$("input[name=ADD-RUA]").val(),
        predio:$("input[name=ADD-PREDIO]").val(),
        andar:$("input[name=ADD-ANDAR]").val(),
      }
 
     $.each(prod, function(index, element ){
      if(prod_add_end.ean==element.EAN){
        element.quantidade = prod[index].quantidade+=parseInt(prod_add_end.quantidade)
        element.validade=prod[index].validade
        element.rua=prod[index].rua
        element.predio=prod[index].predio
        element.andar=prod[index].andar
        alert('funcionou!')
        return false
      }else{
        alert('EAN não encontrado')
        return false
      }
    })
  })
})
