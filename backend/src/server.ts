import fastifySwagger from '@fastify/swagger'
import { app } from './app'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import fastifySwaggerUi from '@fastify/swagger-ui'
// Rotas de produto
import { productInsertRoute } from './routes/product/product-insert-route'
import { productGettAllRoute } from './routes/product/product-get-all-route'
// Rotas de marca
import { brandInsertRoute } from './routes/brand/brand-insert-route'
import { brandGettAllRoute } from './routes/brand/brand-get-all-route'
// Rotas de categoria
import { categoryInsertRoute } from './routes/category/category-insert-route'
import { categoryGettAllRoute } from './routes/category/category-get-all-route'
import { productGetById } from './routes/product/product-get-by-id-route'
import { categoryGetById } from './routes/category/category-get-by-id-route'
import { brandGetById } from './routes/brand/brand-get-by-name-route'

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
app.register(brandInsertRoute)
app.register(productInsertRoute)
app.register(categoryInsertRoute)

// Rotas de busca de dados
// - produto
app.register(productGettAllRoute)
app.register(productGetById)
// - categoria
app.register(categoryGettAllRoute)
app.register(categoryGetById)
// - marca
app.register(brandGettAllRoute)
app.register(brandGetById)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running')
  })
