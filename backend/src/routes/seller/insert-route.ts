import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../../prisma/prisma'
import { hash } from 'bcryptjs'

export const sellerInsertRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/vendedora',
    {
      schema: {
        summary: 'Rota responsável por inserir uma nova vendedora.',
        body: z.object({
          id: z.string().cuid(),
          nome: z.string().toLowerCase(),
          senha: z.string(),
        }),
        tags: ['Vendedora'],
      },
    },
    async (request, response) => {
      const { id, nome, senha } = request.body

      const senha_hash = await hash(senha, 10)

      await prisma.vendedora.create({
        data: {
          id,
          nome,
          senha_hash,
        },
      })

      return response
        .status(201)
        .send({ message: 'Vendedora criado com sucesso!' })
    }
  )
}
