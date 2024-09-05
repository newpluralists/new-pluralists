import { graphql } from 'gatsby';

export const DatoCMS = graphql`
  fragment MainNavigation on DatoCmsMenuItem {
    id
    title
    position
    isButton
    isSearchButton
    megaMenu {
      id
    }
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

  fragment BlockCta on DatoCmsCta {
    id
    title
    variant
    size
    icon {
      width
      height
      alt
      url
    }
    link {
      ...GlobalLink
    }
  }

  fragment BlockAccordion on DatoCmsAcordion {
    id
    items {
      ... on DatoCmsAcordionItem {
        id
        title
        text
      }
    }
  }

  fragment BlockImageGallery on DatoCmsImageGallery {
    id
    headline
    images {
      url
      width
      height
      alt
    }
  }

  fragment BlockNarrativeBlock on DatoCmsNarrativeBlock {
    id
    title
    preTitle
    backgroundColor
    content
    image {
      width
      height
      alt
      url
    }
    imageMobile {
      width
      height
      alt
      url
    }
    alignmentImage
    ctas {
      ...BlockCta
    }
  }

  fragment BlockNarrativeBlockAdvanced on DatoCmsNarrativeBlockAdvanced {
    id
    title
    preTitle
    backgroundColor
    content
    images {
      width
      height
      alt
      url
    }
    carrouselSettingsAutoloop
    carrouselSettingsArrows
    carrouselSettingsNavigation
    alignmentImage
    displayForm
    ctas {
      ...BlockCta
    }
  }
`;
