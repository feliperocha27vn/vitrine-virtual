import fastifySwagger from '@fastify/swagger'
import { app } from './app'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import fastifySwaggerUi from '@fastify/swagger-ui'
// Rotas de produto
import { productInsertRoute } from './routes/product/insert-route'
import { productGetAllRoute } from './routes/product/get-all-route'
import { productGetById } from './routes/product/get-by-id-route'
// Rotas de marca
import { brandInsertRoute } from './routes/brand/insert-route'
import { brandGetAllRoute } from './routes/brand/get-all-route'
import { brandGetById } from './routes/brand/get-by-id-route'
// Rotas de categoria
import { categoryInsertRoute } from './routes/category/insert-route'
import { categoryGetAllRoute } from './routes/category/get-all-route'
import { categoryGetById } from './routes/category/get-by-id-route'
// Rotas de vendedora
import { sellerInsertRoute } from './routes/seller/insert-route'
import { sellerGetAllRoute } from './routes/seller/get-all-route'
import { productGetByCategoryId } from './routes/product/get-by-category'

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for the Virtrine Perola backend',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

// Rotas de inserção de dados
// - marca
app.register(brandInsertRoute)
// - produto
app.register(productInsertRoute)
// - categoria
app.register(categoryInsertRoute)
// - vendedora
app.register(sellerInsertRoute)

// Rotas de busca de dados
// - produto
app.register(productGetAllRoute)
app.register(productGetById)
app.register(productGetByCategoryId)
// - categoria
app.register(categoryGetAllRoute)
app.register(categoryGetById)
// - marca
app.register(brandGetAllRoute)
app.register(brandGetById)
// - vendedora
app.register(sellerGetAllRoute)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running')
  })
