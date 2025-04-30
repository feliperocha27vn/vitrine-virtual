import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../../prisma/prisma'

export const sellerInsertRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/vendedora',
    {
      schema: {
        summary: 'Rota responsável por inserir uma nova vendedora.',
        body: z.object({
          id: z.string(),
          nome: z.string(),
        }),
      },
    },
    async (request, response) => {
      const { id, nome } = request.body

      await prisma.vendedora.create({
        data: {
          id,
          nome,
        },
      })

      return response
        .status(201)
        .send({ message: 'Vendedora criado com sucesso!' })
    }
  )
}
