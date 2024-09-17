import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserRepository {
  async create(data) {
    return prisma.user.create({ data });
  }

  async findAll() {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        emailAddress: true,
        // other fields
      },
    });
  }

  async findById(id) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(emailAddress) {
    return prisma.user.findUnique({
      where: { emailAddress },
    });
  }

  async update(id, data) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return prisma.user.delete({
      where: { id },
    });
  }
}

export default new UserRepository();