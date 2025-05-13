import type { FastifyPluginAsync } from 'fastify'
import { prisma } from '../../prisma/prisma'

export const sellerGetAllRoute: FastifyPluginAsync = async app => {
  app.get(
    '/vendedoras',
    {
      schema: {
        summary: 'Rota responsável por trazer todas vendedoras',
        tags: ['Vendedora'],
      },
    },
    async (request, resposne) => {
      const allSellers = await prisma.vendedora.findMany()

      resposne.status(200).send({ allSellers })
    }
  )
}
