const input = document.getElementById('inputTarefa');
const botao = document.getElementById('btnAdicionar');
const lista = document.getElementById('listaTarefas');


let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];


function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}


function renderizarTarefas() {
    lista.innerHTML = '';
    tarefas.forEach((texto, index) => {
        const item = document.createElement('li');
        item.textContent = texto;

        item.addEventListener('click', () => {
            item.classList.toggle('concluida');
        });

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.style.margin = "10px"
        btnRemover.addEventListener('click', () => {
            tarefas.splice(index, 1);
            salvarTarefas();
            renderizarTarefas();
        });

        item.appendChild(btnRemover);
        lista.appendChild(item);
    });
}


botao.addEventListener('click', () => {
    if (input.value.trim() === '') return;

    tarefas.push(input.value.trim());
    salvarTarefas();
    renderizarTarefas();
    input.value = '';
});


renderizarTarefas();