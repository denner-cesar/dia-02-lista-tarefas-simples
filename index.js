const input = document.getElementById('inputTarefa');
const botao = document.getElementById('btnAdicionar');
const lista = document.getElementById('listaTarefas');

botao.addEventListener('click', () => {
    if (input.value.trim() === '') return;

    const item = document.createElement('li');
    item.textContent = input.value;

    item.addEventListener('click', () => {
        item.classList.toggle('concluida');
    });

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.style.margin = "10px"
    btnRemover.addEventListener('click', () => {
        item.remove();
    });

    item.appendChild(btnRemover);
    lista.appendChild(item);
    input.value = '';
});