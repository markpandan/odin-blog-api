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

exports.createNewReader = async (username, email, rawPassword) => {
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

exports.getPostsById = async (authorId) => {
  return await prisma.posts.findMany({
    where: {
      authorId,
    },
  });
};

exports.createNewPosts = async (authorId, title, content, is_published) => {
  return await prisma.posts.create({
    data: {
      title,
      content,
      is_published,
      authorId,
    },
  });
};
