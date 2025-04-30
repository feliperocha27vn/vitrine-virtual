import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../../prisma/prisma'

export const productInsertRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/produto',
    {
      schema: {
        summary: 'Rota responsável por inserir um novo produto.',
        body: z.object({
          id: z.string().uuid(),
          nome: z.string(),
          sku: z.string(),
          descricao: z.string(),
          url_imagem: z.string(),
          marca: z.string().uuid(),
          categoria: z.string().uuid(),
        }),
      },
    },
    async (request, response) => {
      const { id, nome, sku, descricao, url_imagem, marca, categoria } =
        request.body

      await prisma.produto.create({
        data: {
          id,
          nome,
          sku,
          descricao,
          url_imagem,
          marcaId: marca,
          categoriaId: categoria,
        },
      })

      return response
        .status(201)
        .send({ message: 'Produto criado com sucesso!' })
    }
  )
}
