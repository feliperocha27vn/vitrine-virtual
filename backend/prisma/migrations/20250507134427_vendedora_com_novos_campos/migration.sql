/*
  Warnings:

  - Added the required column `senha_hash` to the `Vendedora` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vendedora" ADD COLUMN     "senha_hash" TEXT NOT NULL;
