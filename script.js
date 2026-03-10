const tarefas = [
    {id: 1, descricao: 'Implementar tela de listagem de tarefas', etiqueta: 'frontend', data: 'Criada em :21/08/2024', botão: false},
    {id: 2, descricao: 'Criar endpoint para cadastro de tarefas', etiqueta: 'backend', data: 'Criada em :21/08/2024', botão: false},
    {id: 3, descricao: 'Implementar protótipo da listagem de tarefas', etiqueta: 'ux', data: 'Criada em :21/08/2024', botão: false}
]

const renderizarTarefa =  (tarefa) => {
        
        const tabela = document.getElementById('menu-itens');

        const tarefaLayout = document.createElement('div');
        const divinfo = document.createElement('div');
        const divtxt = document.createElement('div');
        const elementos = document.createElement('li');
        const data = document.createElement('p');
        const etiqueta = document.createElement('span');
        const botao = document.createElement('button');
       

        
        
        
        elementos.id = tarefa.id;
        botao.id = tarefa.id
        elementos.textContent = tarefa.descricao;
        data.textContent = tarefa.data;
        etiqueta.textContent = tarefa.etiqueta;

        
        botao.type = 'submit';
        botao.textContent = 'Concluir';
        
        botao.className = 'botao-concluir';
        BtnConcluir (botao);
        tarefaLayout.className = 'itens-tarefa';
        divinfo.id = 'informações';
        divtxt.id = 'textos';
          
     

        
        
        divinfo.appendChild(elementos);
        divinfo.appendChild(botao);
        
        divtxt.appendChild(etiqueta);
        divtxt.appendChild(data);
       
       

        tarefaLayout.appendChild(divinfo);
        tarefaLayout.appendChild(divtxt); 
        
        tabela.appendChild(tarefaLayout);
        
        return tarefaLayout;
    }

    const atualizarContador = (tarefas) => {
        
        let contador = 0;
        
        tarefas.forEach((tarefa) => {
                
                if(tarefa.botão === true){
                    contador++;}

        })
        return contador + ' tarefas concluídas';
    }
    const getIdNovaTarefa = () => {
        if(tarefas.length ===0){
            return 1;
        } else{
            return tarefas[tarefas.length - 1]. id + 1;
        }
    }

    const criarTarefa = (descricao, etiqueta, botao) => {
        const novaTarefa = {
            id: getIdNovaTarefa(),
            descricao: descricao,
            etiqueta: etiqueta,
            data: 'Criada em : 09/09/2024',
            botão: botao
        }
        return novaTarefa;

        }
    const BtnConcluir = (botao) => {
        botao.addEventListener('click', () => {
            const tarefa = tarefas.find(t => t.id == parseInt(botao.id));
            const elemento = document.getElementById(botao.id);
            if(botao.disabled === false) {
                
                tarefa.botão = true;
                botao.disabled = true;
                botao.textContent = ' ✔';
                elemento.style.textDecoration = 'line-through';
                
            }
            document.getElementById('contador').textContent = atualizarContador(tarefas);
        })
    }

    
        
    

    const AdicionarTarefa = (tarefa) => {
        tarefas.push(tarefa);
    
    }

window.onload = function() {
    
    const form = document.getElementById('cadastra-tarefa');
    form.addEventListener('submit',(event) => {
        event.preventDefault();
        const descricao = document.getElementById('descrição').value;
        const etiqueta = document.getElementById('etiqueta').value;
        const botao = false;
        const novaTarefa = criarTarefa(descricao, etiqueta,botao);
        AdicionarTarefa(novaTarefa);
        renderizarTarefa(novaTarefa);
    } )
   
   
const tabela = document.getElementById('menu-itens');
    
    const contador = document.createElement('span');
    contador.id = 'contador';
    contador.textContent = atualizarContador(tarefas);

    tabela.appendChild(contador);

    tarefas.forEach((tarefa) => {
        renderizarTarefa(tarefa)
    })
}
     