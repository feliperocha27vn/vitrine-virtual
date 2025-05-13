import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { prisma } from '../../prisma/prisma'

export const categoryGetById: FastifyPluginAsyncZod = async app => {
  app.get(
    '/categoria/:id',
    {
      schema: {
        params: z.object({ id: z.string().uuid() }),
        summary: 'Rota responsável por trazer a categoria pelo id',
        tags: ['Categoria'],
      },
    },
    async (request, response) => {
      const { id } = request.params
      const category = await prisma.categoria.findUnique({ where: { id } })
      if (!category) {
        return response.status(404).send({ error: 'Categoria não encontrado' })
      }
      return response.send(category)
    }
  )
}
