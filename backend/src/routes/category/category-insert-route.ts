import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { prisma } from '../../prisma/prisma'

export const categoryInsertRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/categoria',
    {
      schema: {
        summary: 'Rota responsável pela criação de categorias',
        body: z.object({
          id: z.string().uuid(),
          descricao: z.string(),
        }),
      },
    },
    async (request, response) => {
      const { descricao } = request.body

      await prisma.categoria.create({
        data: {
          descricao,
        },
      })

      response.status(201).send({ message: 'Categoria criada com sucesso!' })
    }
  )
}
