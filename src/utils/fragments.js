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

  fragment BlockImage on DatoCmsImage {
    __typename
    id: originalId
    image {
      url
      alt
      title
      width
      height
    }
  }

  fragment BlockEmbedIframe on DatoCmsEmbedIframe {
    id: originalId
    code
  }

  fragment BlockList on DatoCmsListBlock {
    id: originalId
    headline
    list
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
    hideBlock
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
    hideBlock
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
          ...Tag
        }
        image {
          width
          height
          alt
          url
        }
        slug
        model {
          apiKey
        }
      }
    }
    hideBlock
  }

  fragment BlockUpdates on DatoCmsUpdatesBlock {
    id: originalId
    headline
    introduction
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
    hideBlock
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
    hideBlock
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
    ctas {
      ...BlockCta
    }
    hideBlock
  }

  fragment Tag on DatoCmsTag {
    id
    name
    description
    color {
      hex
    }
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
    introduction
    gridItems: items {
      ...BlockNarrativeBlock
    }
    ctas {
      ...BlockCta
    }
  }

  fragment BlockImageGrid on DatoCmsImageGrid {
    id: originalId
    images {
      url
      width
      height
      alt
    }
    caption
  }

  fragment BlockResources on DatoCmsResourcesBlock {
    id: originalId
    headline
    resourceItems: items {
      ... on DatoCmsResource {
        id
        slug
        title
        date
        introduction
        topics {
          id
          name
        }
        tags {
          ...Tag
        }
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

  fragment BlockStats on DatoCmsStatsBlock {
    id: originalId
    items {
      ... on DatoCmsStatsItem {
        id
        title
        information
        headingColor {
          hex
        }
      }
    }
  }

  fragment FunderCategory on DatoCmsFunderCategory {
    id
    name
  }

  fragment PostCard on DatoCmsPost {
    id
    slug
    title
    date
    mainImage {
      url
      width
      height
      alt
    }
    topics {
      ...Topic
    }
    model {
      apiKey
    }
  }

  fragment ResourceCard on DatoCmsResource {
    id
    title
    slug
    date
    externalUrl
    introduction
    tags {
      ...Tag
    }
    topics {
      id
      name
    }
    model {
      apiKey
    }
  }

  fragment TeamCard on DatoCmsTeam {
    id
    name
    lastName
    memberPosition
    email
    image {
      url
      width
      height
      alt
    }
  }

  fragment DonorCard on DatoCmsIndividualDonor {
    id
    fullname
    information
    category {
      ...FunderCategory
    }
  }

  fragment FunderCard on DatoCmsFunderLogo {
    id
    name
    lastName
    logo {
      width
      height
      alt
      url
    }
    category {
      ...FunderCategory
    }
    url
  }

  fragment StoryImpactCard on DatoCmsStoriesImpact {
    id
    title
    slug
    model {
      apiKey
    }
    introduction
    region
    sector
    image {
      width
      height
      alt
      url
    }
  }
`;
