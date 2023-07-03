import express, { Request, Response} from "express"
import { gv } from '../types'
import * as ItemService from '../items/items.service'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const items = await ItemService.findAll()
    res.status(200).send(items)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const item = await ItemService.findOne(parseInt(req.params.id))
    
    if (item) {
      return res.status(200).send(item)
    }
    
    res.status(404).send("item not found")
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const item: gv.BaseItem = req.body
    const newItem = await ItemService.create(item)
    
    res.status(201).send(newItem)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const item = await ItemService.findOne(id)

    if (item) {
      const updatedItem = await ItemService.update(id, req.body)
      return res.status(200).send(updatedItem)
    }
    const newItem = await ItemService.create(req.body)
    res.status(201).send(newItem)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await ItemService.remove(parseInt(req.params.id))
    res.status(200).send('Item deleted successfully')
  } catch (error) {
    res.status(500).send(error.message)
  }
})




export const itemsRouter = router