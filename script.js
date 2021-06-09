
(()=> {
    (async () => {
        let response = await fetch('https://techstockbackend.herokuapp.com/products')
        loadCards(await response.json())
    })()
})()

function loadCards(data) {
    let lista = document.getElementById('lista')

    data.forEach(item => {
        let li = document.createElement('li')
        let produto = document.createElement('div')
        let descricao = document.createElement('div')
        let categoria = document.createElement('div')
        let preco = document.createElement('div')
        let estoque = document.createElement('div')
        let id = document.createElement('div')


        produto.innerHTML = `<h3>Produto: </h3> <span>${item.name}</span>`
        descricao.innerHTML = `<strong>Descricao: <strong> <span>${item.description}</span>`
        categoria.innerHTML = `<strong>Categoria: <strong> <span>${item.category}</span>`
        preco.innerHTML = `<strong>Preço: <strong> <span>${item.price}</span>`
        estoque.innerHTML = `<strong>Estoque: <strong> <span>${item.stock}</span>`
        id.innerHTML = `<strong>Id: <strong> <span>${item.uuid}</span>`

        li.appendChild(produto)
        li.appendChild(descricao)
        li.appendChild(categoria)
        li.appendChild(preco)
        li.appendChild(estoque)
        li.appendChild(id)

        lista.append(li)


    })
}