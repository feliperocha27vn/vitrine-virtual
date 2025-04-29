import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { prisma } from '../../prisma/prisma'

export const productGetById: FastifyPluginAsyncZod = async app => {
  app.get(
    '/produto/:id',
    {
      schema: {
        params: z.object({ id: z.string().uuid() }),
      },
    },
    async (request, response) => {
      const { id } = request.params
      const product = await prisma.produto.findUnique({ where: { id } })
      if (!product) {
        return response.status(404).send({ error: 'Produto não encontrado' })
      }
      return response.send(product)
    }
  )
}
