import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { prisma } from '../../prisma/prisma'

export const brandGetById: FastifyPluginAsyncZod = async app => {
  app.get(
    '/marca/:id',
    {
      schema: {
        params: z.object({ id: z.string().uuid() }),
      },
    },
    async (request, response) => {
      const { id } = request.params
      const brand = await prisma.marca.findUnique({ where: { id } })
      if (!brand) {
        return response.status(404).send({ error: 'Marca não encontrado' })
      }
      return response.send(brand)
    }
  )
}
