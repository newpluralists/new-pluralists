import React from 'react';
import { Accordion, Button, ImageGallery, NarrativeBlock, NarrativeBlockAdvanced } from 'tectonica-ui';
import BlockPrinciples from '../blocks/block-principles/block-principles';
import BlockImpact from '../blocks/block-impact/block-impact';
import BlockStories from '../blocks/block-stories/block-stories';
import BlockUpdates from '../blocks/block-updates/block-updates';
import BlockPartners from '../blocks/block-partners/block-partners';
import BlockNarrativeFull from '../blocks/block-narrative-full/block-narrative-full';

export default function BlocksBuilder({ components }) {
  return (
    <>
      {components
        .filter((c) => !c.hideBlock)
        .map((block) => {
          switch (block.__typename) {
            case 'DatoCmsNarrativeBlock':
              return <NarrativeBlock block={block} key={block.id} />;

            case 'DatoCmsNarrativeBlockAdvanced':
              return <NarrativeBlockAdvanced block={block} key={block.id} />;

            case 'DatoCmsAcordion':
              return <Accordion block={block} key={block.id} />;

            case 'DatoCmsImageGallery':
              return <ImageGallery key={block.id} {...block} />;

            case 'DatoCmsPrinciplesBlock':
              return <BlockPrinciples block={block} key={block.id} />;

            case 'DatoCmsImpactBlock':
              return <BlockImpact block={block} key={block.id} />;

            case 'DatoCmsStoriesBlock':
              return <BlockStories block={block} key={block.id} />;

            case 'DatoCmsUpdatesBlock':
              return <BlockUpdates block={block} key={block.id} />;

            case 'DatoCmsPartnersBlock':
              return <BlockPartners block={block} key={block.id} />;

            case 'DatoCmsNarrativeBlockFull':
              return <BlockNarrativeFull block={block} key={block.id} />;

            case 'DatoCmsCta':
              return <Button block={block} key={block.id} />;

            default:
              return null;
          }
        })}
    </>
  );
}
