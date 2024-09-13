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
      ... on DatoCmsEventList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsTeamList {
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
          ... on DatoCmsEventList {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsTeamList {
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
      ... on DatoCmsEventList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsEvent {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsTeamList {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsTeam {
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
      # gatsbyImageData
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

  fragment BlockPrinciples on DatoCmsPrinciplesBlock {
    id
    headlines {
      ... on DatoCmsHeadline {
        id
        title
      }
    }
    introduction
    image {
      width
      height
      alt
      url
      gatsbyImageData
    }
    ctas {
      ...BlockCta
    }
    boxHeadline
    boxIntroduction
    boxCtas {
      ...BlockCta
    }
    boxImage {
      width
      height
      alt
      url
      gatsbyImageData
    }
  }

  fragment BlockImpact on DatoCmsImpactBlock {
    id
    headline
    introduction
    ctas {
      ...BlockCta
    }
    leftTitles {
      ... on DatoCmsHeadline {
        id
        title
      }
    }
  }

  fragment BlockStories on DatoCmsStoriesBlock {
    id
    headline
    ctas {
      ...BlockCta
    }
    backgroundImage {
      width
      height
      alt
      url
      gatsbyImageData
    }
    stories {
      ... on DatoCmsStoriesImpact {
        id
        title
        introduction
        cardColorVariant
        tags {
          ... on DatoCmsTag {
            id
            name
          }
        }
        image {
          width
          height
          alt
          url
          # gatsbyImageData
        }
        slug
        model {
          apiKey
        }
      }
    }
  }

  fragment BlockUpdates on DatoCmsUpdatesBlock {
    id
    headline
    ctas {
      ...BlockCta
    }
    backgroundImage {
      width
      height
      alt
      url
      gatsbyImageData
    }
    highlightPosts {
      ... on DatoCmsPost {
        id
        title
        slug
        model {
          apiKey
        }
        mainImage {
          width
          height
          alt
          url
          # gatsbyImageData
        }
      }
    }
  }

  fragment BlockPartners on DatoCmsPartnersBlock {
    id
    headline
    introduction
    ctas {
      ...BlockCta
    }
    logos {
      width
      height
      alt
      url
    }
  }
`;
