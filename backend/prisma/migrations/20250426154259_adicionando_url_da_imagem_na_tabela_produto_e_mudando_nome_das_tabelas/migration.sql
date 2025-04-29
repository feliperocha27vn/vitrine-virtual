/*
  Warnings:

  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Marca` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_marcaId_fkey";

-- DropTable
DROP TABLE "Categoria";

-- DropTable
DROP TABLE "Marca";

-- DropTable
DROP TABLE "Produto";

-- CreateTable
CREATE TABLE "categoria" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "url_imagem" TEXT NOT NULL,
    "categoriaId" TEXT NOT NULL,
    "marcaId" TEXT NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marca" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "marca_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "marca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
