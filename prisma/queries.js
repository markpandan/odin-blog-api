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

exports.getPosts = async () => {
  return await prisma.posts.findMany({});
};

exports.getPostsByPostId = async (postId) => {
  return await prisma.posts.findMany({
    where: {
      id: postId,
    },
  });
};

exports.getPostsByAuthorId = async (authorId) => {
  return await prisma.posts.findMany({
    where: {
      authorId,
    },
  });
};

exports.getCommentsById = async (postId) => {
  return await prisma.comments.findMany({
    where: {
      postId,
    },
    include: {
      reader: true,
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

exports.createNewComment = async (readerId, postId, comment) => {
  return await prisma.comments.create({
    data: {
      content: comment,
      readerId,
      postId,
    },
  });
};

exports.updatePostById = async (authorName, postId, data) => {
  const { title, content, is_published } = data;
  return await prisma.posts.update({
    where: {
      id: postId,
      author: {
        is: {
          username: authorName,
        },
      },
    },
    data: {
      title,
      content,
      is_published,
    },
  });
};
