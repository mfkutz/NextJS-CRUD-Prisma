//Este archivo comunica con la db

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()