import { Request, Response} from 'express';

import knex from '../database/connection';

class itemsController
{
    async index(request: Request, response: Response)
    {
        {
            const items = await knex('items').select('*');
            
            const serializedItems = items.map(items =>{
                return {
                    id: items.id,
                    name: items.title,
                    image_url: `http://192.168.1.7:3333/uploads/${items.image}`,
                }
            })
            return response.json(serializedItems);
        
        }
    }
}

export default new itemsController()