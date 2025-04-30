import type { FastifyPluginAsync } from 'fastify'
import { prisma } from '../../prisma/prisma'

export const productGetAllRoute: FastifyPluginAsync = async app => {
  app.get(
    '/produtos',
    {
      schema: {
        summary: 'Rota responsável por trazer todos produtos',
      },
    },
    async (request, resposne) => {
      const allProducts = await prisma.produto.findMany()

      resposne.status(200).send({ allProducts })
    }
  )
}
