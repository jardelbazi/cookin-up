import type ICategoria from "@/interfaces/ICategoria"

export async function obterCategorias() {
    const resposta = await fetch('https://gist.githubusercontent.com/jardelbazi/794a5a03e7b2fb6fe6fccf0ee78d6a9c/raw/7954177f41c4100f57f66be48549a0fba3e0ea29/categorias.json')
    const categorias: ICategoria[] = await resposta.json()

    return categorias
}