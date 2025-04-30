import type { FastifyPluginAsync } from 'fastify'
import { prisma } from '../../prisma/prisma'

export const categoryGetAllRoute: FastifyPluginAsync = async app => {
  app.get(
    '/categorias',
    {
      schema: {
        summary: 'Rota responsável por trazer todas categorias',
      },
    },
    async (request, resposne) => {
      const allCategorys = await prisma.categoria.findMany()

      resposne.status(200).send({ allCategorys })
    }
  )
}
