import z from 'zod'
import { prisma } from '../../prisma/prisma'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const brandInsertRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/marca',
    {
      schema: {
        summary: 'Rota responsável pela criação de marcas',
        body: z.object({
          id: z.string().uuid(),
          nome: z
            .string()
            .min(1, { message: 'O campo do nome da marca é obrigatório!' }),
        }),
        tags: ['Marca'],
      },
    },
    async (request, response) => {
      const { nome } = request.body

      await prisma.marca.create({
        data: {
          nome,
        },
      })

      response.status(201).send({ message: 'Marca criada com sucesso!' })
    }
  )
}
