import React from 'react';
import {
  Accordion,
  AudioPlayer,
  Breadcrumbs,
  Button,
  ButtonList,
  Card,
  CardGrid,
  Carousel,
  FloatingButton,
  FloatingShareButtons,
  Footer,
  HandlerButton,
  Hero,
  HubspotForm,
  ImageGallery,
  ListPaginated,
  LoadingButton,
  MapboxPopup,
  MapboxWrapper,
  NarrativeBlock,
  NarrativeBlockAdvanced,
  Notification,
  ParallaxContentSection,
  PeopleDetail,
  ShareButtons,
  SidebarWrapper,
  Tabs,
  VideoModal,
} from 'tectonica-ui';

export default function BlocksBuilder({ components }) {
  return (
    <>
      {components.map((block) => {
        switch (block.__typename) {
          case 'DatoCmsNarrativeBlock':
            return <NarrativeBlock block={block} key={block.id} />;

          case 'DatoCmsNarrativeBlockAdvanced':
            return <NarrativeBlockAdvanced block={block} key={block.id} />;

          case 'DatoCmsAcordion':
            return <Accordion block={block} key={block.id} />;

          case 'DatoCmsImageGallery':
            return <ImageGallery key={block.id} {...block} />;

          default:
            return null;
        }
      })}
    </>
  );
}
