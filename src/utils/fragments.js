import { graphql } from 'gatsby';

export const DatoCMS = graphql`
  fragment MainNavigation on DatoCmsMenuItem {
    id
    title
    position
    isButton
    isSearchButton
    path {
      __typename
      ... on DatoCmsBasicPage {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsBlogPostsList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsPost {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsInvestmentsList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsInvestment {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsFieldBuildersList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsBuilder {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsFundersList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsFunder {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsResource {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsResourcesList {
        id
        slug
        model {
          apiKey
        }
      }
    }
    treeChildren {
      ... on DatoCmsMenuItem {
        id
        title
        position
        path {
          __typename
          ... on DatoCmsBasicPage {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsBlogPostsList {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsPost {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsInvestmentsList {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsInvestment {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsFieldBuildersList {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsBuilder {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsFundersList {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsFunder {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsResource {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsResourcesList {
            id
            slug
            model {
              apiKey
            }
          }
        }
      }
    }
  }

  fragment GlobalLink on DatoCmsGlobalLink {
    id
    title
    externalUrl
    content {
      __typename
      ... on DatoCmsBasicPage {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsBlogPostsList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsPost {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsInvestmentsList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsInvestment {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsFieldBuildersList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsBuilder {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsFundersList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsFunder {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsResource {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsResourcesList {
        id
        slug
        model {
          apiKey
        }
      }
    }
  }

  fragment BlockImage on DatoCmsImage {
    __typename
    id: originalId
    image {
      url
      alt
      title
      width
      height
      gatsbyImageData
    }
  }

  fragment BlockEmbedIframe on DatoCmsEmbedIframe {
    __typename
    id: originalId
    code
  }
`;
