import type ICategoria from "@/interfaces/ICategoria"
import type IReceita from "@/interfaces/IReceita"

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url)
  return resposta.json() as T
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/jardelbazi/794a5a03e7b2fb6fe6fccf0ee78d6a9c/raw/7954177f41c4100f57f66be48549a0fba3e0ea29/categorias.json')
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/jardelbazi/edacba4b89c98d1ade8458c09516b5dc/raw/8264273ff8acfd07226ae460b24c0ee0cc140ba1/receitas.json')
}