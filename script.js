
const end = [
  {"id":"1","código":"","nome":"coca lt 350ml","rua":"a", "lado":"esquerdo","Predio":"1","andar":"1",},
  {"id":"2","código":"","nome":"coca lt 220ml","rua":"a", "lado":"esquerdo","Predio":"1","andar":"2",},
  {"id":"3","código":"","nome":"coca pet 500ml","rua":"a", "lado":"esquerdo","Predio":"1","andar":"3",},
  {"id":"4","código":"","nome":"coca pet 1lt","rua":"a", "lado":"esquerdo","Predio":"1","andar":"4",},
  {"id":"5","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"2","andar":"1",},
  {"id":"6","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"2","andar":"2",},
  {"id":"7","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"2","andar":"3",},
  {"id":"8","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"2","andar":"4",},
  {"id":"9","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"3","andar":"1",},
  {"id":"10","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"3","andar":"2",},
  {"id":"11","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"3","andar":"3",},
  {"id":"12","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"3","andar":"4",},
  {"id":"13","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"4","andar":"1",},
  {"id":"14","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"4","andar":"2",},
  {"id":"15","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"4","andar":"3",},
  {"id":"16","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"4","andar":"4",},
  {"id":"16","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"5","andar":"1",},
  {"id":"17","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"5","andar":"2",},
  {"id":"18","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"5","andar":"3",},
  {"id":"19","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"5","andar":"4",},
  {"id":"20","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"6","andar":"1",},
  {"id":"21","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"6","andar":"2",},
  {"id":"22","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"6","andar":"3",},
  {"id":"23","código":"","nome":"","rua":"a", "lado":"esquerdo","Predio":"6","andar":"4",},


]

 

//carrega página
$(document).ready(function() {


//entrada da pesquisa
  $('button').click(function(){
   let inputPesquisa= $('#inputText').val()

  })


//verificar se é entrada valida

//se inputPesquisa atender os requisitos de entrada
//retornar valor da pesquisa dentro da tabela

 $('table').html( 
 '<tr> <th>código</th><th>nome</th><th>validade</th><th>rua</th><th>lado</th><th>predio</th><th>andar</th></tr>'
+'<tr>  <td>'+ end[1].código+'</td><td>'+ end[1].nome +'</td><td>'+"" +'</td><td>'+ end[1].rua+'</td><td>'+ end[1].lado+'</td><td>'+end[1].Predio +'</td><td>'+end[1].andar+'</td></tr>'

)
 });


 