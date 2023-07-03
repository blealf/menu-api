import { gv } from '../types'

let items: gv.Items = {
  1: {
    id: 1,
    name: "Burger",
    price: 599,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
  },
  2: {
    id: 2,
    name: "Pizza",
    price: 299,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
  },
  3: {
    id: 3,
    name: "Tea",
    price: 199,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
  }
}

export const findAll = async (): Promise<gv.Item[]> => Object.values(items)

export const findOne = async (id: number): Promise<gv.Item> => Object.values(items).find((item) => item.id === id)

export const create = async (value: gv.BaseItem): Promise<gv.Item | string> => {
  if (value) {
    const id = new Date().valueOf()
    items[id] = {
      id, ...value
    }
    return items[id]
  }
  return 'Could not create item'
}

export const update = async (id: number, value: gv.BaseItem): Promise<gv.Item | null> => {
  const item = items[id]

  if (!item) return null
  
  items[id] = { id, ...value }

  return item
}

export const remove = async (id: number): Promise<void | null> => {
  const item = items[id]
  if (!item) return null

  delete items[id]
}