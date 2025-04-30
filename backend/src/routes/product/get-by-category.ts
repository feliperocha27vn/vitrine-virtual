import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { prisma } from '../../prisma/prisma'

export const productGetByCategoryId: FastifyPluginAsyncZod = async app => {
  app.get(
    '/categorias/:categoriaId/produtos',
    {
      schema: {
        params: z.object({ id: z.string().uuid() }),
        summary: 'Rota responsável por trazer produtos pela categoria',
      },
    },
    async (request, response) => {
      const { id } = request.params
      const productByCategory = await prisma.categoria.findMany({
        where: { id },
      })
      if (!productByCategory) {
        return response.status(404).send({ error: 'Produtos não encontrado' })
      }
      return response.send(productByCategory)
    }
  )
}
