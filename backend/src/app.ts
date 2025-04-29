import fastify from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'

export const app = fastify().withTypeProvider<ZodTypeProvider>()
