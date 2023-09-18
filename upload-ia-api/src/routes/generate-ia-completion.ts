import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'

export async function GenerateIaCompletion(app: FastifyInstance ){
    app.post('/', async () => {

    })
}