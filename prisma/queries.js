const { PrismaClient } = require("@prisma/client");
const util = require("../lib/passwordUtils");

const prisma = new PrismaClient();

exports.createNewAuthor = async (username, email, rawPassword) => {
  const hashedPassword = await util.encryptPassword(rawPassword);

  await prisma.authors.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
};

exports.createReaders = async (username, email, rawPassword) => {
  const hashedPassword = await util.encryptPassword(rawPassword);

  await prisma.readers.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
};

exports.getAuthorByUsername = async (username) => {
  return await prisma.authors.findFirst({
    where: {
      username,
    },
  });
};

exports.getReadersByUsername = async (username) => {
  return await prisma.readers.findFirst({
    where: {
      username,
    },
  });
};
