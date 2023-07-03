export namespace gv {
  interface BaseItem {
    name: string
    price: number
    description: string
    image: string
  }

  interface Item extends BaseItem {
    id: number
  }

  interface Items {
    [key: number]: Item
  }
}