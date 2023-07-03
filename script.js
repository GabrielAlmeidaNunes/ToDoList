import criaTarefa from "./criaTarefa.js";

const botaoCadastra = document.querySelector('[data-btn-cadastra]');

export  const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[];

tarefas.forEach(tarefa=>{

    criaTarefa(tarefa);
})

botaoCadastra.addEventListener('click',()=>{
    
    const valorInput = document.querySelector('[data-input]').value;
    
    const novaTarefa = {

        novaTarefa : valorInput,
        id : tarefas[tarefas.length-1]?tarefas[tarefas.length-1].id + 1 : 0
    }   

    if(valorInput!=''){

        criaTarefa(novaTarefa);

        tarefas.push(novaTarefa);
       
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    
        document.querySelector('[data-input]').value = '';
        document.querySelector('[data-input]').placeholder = 'Digite a nova tarefa';
        document.querySelector('[data-input]').classList.remove('input-vazio');
    }
    else{

        document.querySelector('[data-input]').placeholder = 'Insira uma Tarefa';
        document.querySelector('[data-input]').classList.add('input-vazio');
    }  
})