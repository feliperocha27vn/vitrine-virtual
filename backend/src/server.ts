import fastifySwagger from '@fastify/swagger'
import { app } from './app'
import { productInsertRoute } from './routes/product-insert-route'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { brandInsertRoute } from './routes/brand-insert-route'

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

app.register(brandInsertRoute)
app.register(productInsertRoute)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running')
  })
