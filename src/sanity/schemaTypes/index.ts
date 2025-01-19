import { type SchemaTypeDefinition } from 'sanity'

import banner from '../schemas/banner'
import products from './products'
import categories from './categories'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner , products , categories ],
}