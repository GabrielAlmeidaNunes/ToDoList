import { tarefas } from "./script.js";

const localDaCriacaoDaTarefa = document.querySelector('[data-tarefa-cadastrada]');

export default function criaTarefa(tarefa){

    const li = document.createElement('li');
    li.classList.add('criaTarefa-li');

    const valorTarefa = criaTarefaValor(tarefa);

    const divBotoes = divBtns();
    const editarTarefa = editaElemento(valorTarefa);
    const deletaTarefa = botaoDeletaTarefa(valorTarefa);
    divBotoes.append(editarTarefa,deletaTarefa);

    li.append(valorTarefa,divBotoes);
    localDaCriacaoDaTarefa.append(li);

}

function criaTarefaValor(tarefa){

    const valorTarefa = document.createElement('p');
    
    valorTarefa.innerText = tarefa.novaTarefa;
    valorTarefa.id = tarefa.id;
    return valorTarefa;
}

function divBtns(){
    
    const div = document.createElement('div');
    div.classList.add('div-acoes');
    
    return div ;
}

function editaElemento(valorElemento){

    const btnEditar = document.createElement('button');
    btnEditar.innerText = "📝";
    btnEditar.classList.add('btn-editar');

    btnEditar.addEventListener('click', function(){

         const novoValorTarefa = prompt('Informe o novo valor da tarefa');

        if(novoValorTarefa!=null){

            valorElemento.innerText = novoValorTarefa ;

            const index = tarefas.findIndex((tarefa)=>tarefa.id == valorElemento.id );
     
            if(index>=0){

                tarefas[index].novaTarefa = novoValorTarefa;

             }
        }

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        
    })

    return btnEditar;
}

function botaoDeletaTarefa(elemento){

    const btnDeleta = document.createElement('button');
    btnDeleta.innerText = "🗑️";
    btnDeleta.classList.add('btn-deletar');

    btnDeleta.addEventListener('click', function(){

        const index = tarefas.findIndex(tarefa=> tarefa.id == elemento.id);
       
        if(index>=0){
            
            tarefas.splice(index,1);
        }
        
        localStorage.setItem('tarefas',JSON.stringify(tarefas));
       
        removeTarefa(this.parentNode);
    })

    return btnDeleta;
}

function removeTarefa(tag){
    
    tag.parentNode.remove();
}