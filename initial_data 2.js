

/*------------------------*/
/*
const faker = require('faker');

// Function to generate fake users
const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
    };
    users.push(user);
  }
  return users;
};

// Function to generate fake posts
const generatePosts = (count, users) => {
  const posts = [];
  for (let i = 0; i < count; i++) {
    const post = {
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      userId: faker.random.arrayElement(users).id,
    };
    posts.push(post);
  }
  return posts;
};

// Function to generate fake comments
const generateComments = (count, posts, users) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    const comment = {
      id: faker.datatype.uuid(),
      content: faker.lorem.sentence(),
      postId: faker.random.arrayElement(posts).id,
      userId: faker.random.arrayElement(users).id,
    };
    comments.push(comment);
  }
  return comments;
};

// Generate 500 users
const users = generateUsers(500);

// Generate 1000 posts
const posts = generatePosts(1000, users);

// Generate 1200 comments
const comments = generateComments(1200, posts, users);

module.exports = {
  users,
  posts,
  comments,
};
*/