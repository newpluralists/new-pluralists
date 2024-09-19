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
      ... on DatoCmsOurImpact {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsStoriesImpact {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsThePromiseOfPluralism {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsGranteesList {
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
          ... on DatoCmsOurImpact {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsStoriesImpact {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsThePromiseOfPluralism {
            id
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsGranteesList {
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
    path: content {
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
      ... on DatoCmsOurImpact {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsStoriesImpact {
        id
        slug
        model {
          apiKey
        }
      }
      ... on DatoCmsThePromiseOfPluralism {
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
    id: originalId
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
    id: originalId
    items {
      ... on DatoCmsAcordionItem {
        id
        title
        text
      }
    }
  }

  fragment BlockImageGallery on DatoCmsImageGallery {
    id: originalId
    headline
    images {
      url
      width
      height
      alt
    }
  }

  fragment BlockNarrativeBlock on DatoCmsNarrativeBlock {
    id: originalId
    title
    content
    image {
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
    id: originalId
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
    id: originalId
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
    id: originalId
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
    id: originalId
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
    id: originalId
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
    id: originalId
    headline
    introduction
    ctas {
      ...BlockCta
    }
    partners {
      ... on DatoCmsFunderLogo {
        id
        logo {
          width
          height
          alt
          url
        }
      }
    }
  }

  fragment BlockNarrativeBlockFull on DatoCmsNarrativeBlockFull {
    id: originalId
    title
    introduction
    mainImage {
      width
      height
      alt
      url
    }
  }

  fragment Tag on DatoCmsTag {
    id
    name
  }

  fragment Topic on DatoCmsTopic {
    id
    name
  }

  fragment Breadcrumb on DatoCmsMenuItem {
    id
    title
  }

  fragment BlockGridCards on DatoCmsGridOfCard {
    id: originalId
    headline
    introduction
    items {
      ... on DatoCmsGenericCard {
        id
        title
        introduction
        image {
          url
          width
          height
          alt
        }
        link {
          ...GlobalLink
        }
      }
    }
  }

  fragment BlockNarrativeGrid on DatoCmsNarrativeGrid {
    id: originalId
    headline
    gridItems: items {
      ...BlockNarrativeBlock
    }
    ctas {
      ...BlockCta
    }
  }

  fragment BlockResources on DatoCmsResourcesBlock {
    id: originalId
    headline
    resourceItems: items {
      ... on DatoCmsResource {
        id
        slug
        title
        model {
          apiKey
        }
      }
    }
    ctas {
      ...BlockCta
    }
  }

  fragment BlockCtaGrid on DatoCmsCtaGrid {
    id: originalId
    ctaItems: items {
      ...BlockCta
    }
  }

  fragment BlockAccordionGrid on DatoCmsAccordionGrid {
    id: originalId
    headline
    introduction
    accordionItems: items {
      ... on DatoCmsAcordionItem {
        id
        title
        text
      }
    }
    ctas {
      ...BlockCta
    }
  }

  fragment BlockHeadlines on DatoCmsHeadlinesGrid {
    id: originalId
    headlinesItems: items {
      ... on DatoCmsHeadline {
        id
        title
      }
    }
  }
`;
