import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../../prisma/prisma'

export const categoryInsertRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/categoria',
    {
      schema: {
        summary: 'Rota responsável pela criação de categorias',
        body: z.object({
          descricao: z.string(),
        }),
        response: {
          201: z.object({
            message: z.string(),
          }),
        },
        tags: ['Categoria'],
      },
    },
    async (request, response) => {
      const { descricao } = request.body

      await prisma.categoria.create({
        data: {
          descricao,
        },
      })

      return response
        .status(201)
        .send({ message: 'Categoria criada com sucesso!' })
    }
  )
}
