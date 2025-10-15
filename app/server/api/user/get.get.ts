import { defineEventHandler } from 'h3'
import {prisma} from '../../utils/prisma'

export default defineEventHandler(async ()=> {
const request =  await prisma.user.findMany()

if(request.length== 0) return {
     message:"Nenhum utilizador encontrado"
}

return {
     success: true,
     message:"utilizadores",
     data: request
}
})