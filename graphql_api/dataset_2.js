//200 users and 100 repos but randomly distributed to get a real life scenario

const users = Array.from({ length: 200 }, (_, i) => ({
  id: (i + 1).toString(),
  login: `user${i + 1}`,
  name: `User ${i + 1}`,
}));

const repositories = Array.from({ length: 100 }, (_, i) => ({
  id: (i + 1).toString(),
  name: `Repo ${i + 1}`,
  owner: {
    id: (Math.floor(Math.random() * 200) + 1).toString(), // Randomly assign repositories to users
    login: `user${Math.floor(Math.random() * 200) + 1}`,
    name: `User ${Math.floor(Math.random() * 200) + 1}`,
  },
  description: `Description for Repo ${i + 1}`,
}));

// Adding repositories to users
users.forEach(user => {
  user.repositories = {
    totalCount: repositories.filter(repo => repo.owner.id === user.id).length,
    nodes: repositories.filter(repo => repo.owner.id === user.id),
  };
});

module.exports = {
  users,
  repositories,
  comments: Array.from({ length: 50 }, (_, i) => ({
    id: (i + 1).toString(),
    content: `This is a comment on Repo ${((i % 100) + 1)} by User ${((i % 200) + 1)}`,
    repositoryId: ((i % 100) + 1).toString(),
    userId: ((i % 200) + 1).toString(),
  })),
};
