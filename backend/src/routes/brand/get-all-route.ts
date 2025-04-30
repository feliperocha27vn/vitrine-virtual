import type { FastifyPluginAsync } from 'fastify'
import { prisma } from '../../prisma/prisma'

export const brandGetAllRoute: FastifyPluginAsync = async app => {
  app.get(
    '/marcas',
    {
      schema: {
        summary: 'Rota responsável por trazer todas marcas',
      },
    },
    async (request, resposne) => {
      const allBrands = await prisma.marca.findMany()

      resposne.status(200).send({ allBrands })
    }
  )
}
