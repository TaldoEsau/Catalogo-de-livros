function toggleVerMais(element) {
    var livro = element.parentNode;
    var descricao = livro.querySelector('p');
    var verMais = livro.querySelector('.ver-mais');

    if (descricao.style.maxHeight) {
        descricao.style.maxHeight = null;
        verMais.innerHTML = 'Ver Menos';
    } else {
        descricao.style.maxHeight = descricao.scrollHeight + 'px'; // Ajusta para o tamanho real do texto
        verMais.innerHTML = 'Ver Menos';
    }
}