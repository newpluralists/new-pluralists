import React from 'react';
import { renderNodeRule, StructuredText } from 'react-datocms';
import { Accordion, Button, CustomImage, CustomLink } from 'tectonica-ui';
import BlockGridCards from '../blocks/block-grid-cards/block-grid-cards';
import BlockNarrativeGrid from '../blocks/block-narrative-grid/block-narrative-grid';
import { isHeading, isBlockquote, isParagraph, isRoot, isList } from 'datocms-structured-text-utils';
import BlockCtaGrid from '../blocks/block-cta-grid/block-cta-grid';
import BlockAccordionGrid from '../blocks/block-accordion-grid/block-accordion-grid';
import BlockHeadlinesGrid from '../blocks/block-headlines-grid/block-headlines-grid';
import BlockResources from '../blocks/block-resources/block-resources';
import BlockStories from '../blocks/block-stories/block-stories';
import BlockStats from '../blocks/block-stats/block-stats';
import BlockList from '../blocks/block-list/block-list';
import BlockImageGrid from '../blocks/block-image-grid/block-image-grid';
import BlockUpdates from '../blocks/block-updates/block-updates';
import BlockTimeline from '../blocks/block-timeline/block-timeline';
import VideoBlock from '../blocks/block-video/block-video';

const StructuredTextDefault = ({ content, withCustomRules = false }) => {
  if (!content || !content?.value) return null;

  return (
    <StructuredText
      data={content}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case 'DatoCmsCta':
            if (withCustomRules) {
              return (
                <div className="max-container-840 center" key={record.id}>
                  <Button block={record} />
                </div>
              );
            }
            return (
              <div key={record.id} className="button-wrapper">
                <Button block={record} />
              </div>
            );

          case 'DatoCmsAcordion':
            return <Accordion block={record} key={record.id} />;

          case 'DatoCmsImage':
            return (
              <div key={record.id} className={`structured-image img-alignment-${record.alignment}`}>
                <CustomImage image={record.image} />
              </div>
            );

          case 'DatoCmsGridOfCard':
            return <BlockGridCards block={record} key={record.id} />;

          case 'DatoCmsNarrativeGrid':
            return <BlockNarrativeGrid block={{ ...record, items: record.gridItems }} key={record.id} />;

          case 'DatoCmsResourcesBlock':
            return <BlockResources block={{ ...record, highlightResources: record.resourceItems }} key={record.id} />;

          case 'DatoCmsCtaGrid':
            if (withCustomRules) {
              return (
                <div className="max-container-840 center" key={record.id}>
                  <BlockCtaGrid block={record} key={record.id} />
                </div>
              );
            }
            return <BlockCtaGrid block={record} key={record.id} />;

          case 'DatoCmsAccordionGrid':
            return <BlockAccordionGrid block={{ ...record, items: record.accordionItems }} key={record.id} />;

          case 'DatoCmsHeadlinesGrid':
            if (withCustomRules) {
              return (
                <div className="max-container-840 center" key={record.id}>
                  <BlockHeadlinesGrid block={{ ...record, items: record.headlinesItems }} />
                </div>
              );
            }
            return <BlockHeadlinesGrid block={{ ...record, items: record.headlinesItems }} key={record.id} />;

          case 'DatoCmsStoriesBlock':
            return <BlockStories block={record} key={record.id} />;

          case 'DatoCmsEmbedIframe':
            return <div className="embed" dangerouslySetInnerHTML={{ __html: record.code }} key={record.id} />;

          case 'DatoCmsStatsBlock':
            if (withCustomRules) {
              return (
                <div className="max-container-840 center" key={record.id}>
                  <BlockStats block={record} />
                </div>
              );
            }
            return <BlockStats block={record} key={record.id} />;

          case 'DatoCmsListBlock':
            if (withCustomRules) {
              return (
                <div className="max-container-840 center" key={record.id}>
                  <BlockList block={record} />
                </div>
              );
            }
            return <BlockList block={record} key={record.id} />;

          case 'DatoCmsImageGrid':
            if (withCustomRules) {
              return (
                <div className="max-container-840 center" key={record.id}>
                  <BlockImageGrid block={record} />
                </div>
              );
            }
            return <BlockImageGrid block={record} key={record.id} />;

          case 'DatoCmsUpdatesBlock':
            if (withCustomRules) {
              return (
                <div className="max-container-840 center" key={record.id}>
                  <BlockUpdates block={record} />
                </div>
              );
            }
            return <BlockUpdates block={record} key={record.id} />;

          case 'DatoCmsTimelineBlock':
            return <BlockTimeline key={record.id} block={record} />;

          case 'DatoCmsVideoModal':
            return <VideoBlock key={record.id} block={record} />;

          default:
            return null;
        }
      }}
      renderLinkToRecord={({ record, children }) => {
        return <CustomLink to={{ path: record }}>{children}</CustomLink>;
      }}
      customNodeRules={
        withCustomRules
          ? [
              renderNodeRule(isParagraph, ({ adapter: { renderNode }, node, children, key, ancestors }) => {
                if (isRoot(ancestors[0])) {
                  // If this paragraph node is a top-level one, give it a special class
                  return (
                    <div className="max-container-840 center" key={key}>
                      {renderNode('p', { className: '' }, children)}
                    </div>
                  );
                } else {
                  // Proceed with default paragraph rendering...
                  // return renderNode('p', { key }, children);
                  return (
                    <div className="max-container-840 center" key={key}>
                      <React.Fragment>{children}</React.Fragment>
                    </div>
                  );
                }
              }),
              renderNodeRule(isHeading, ({ adapter: { renderNode }, node, children, key, ancestors }) => {
                if (isRoot(ancestors[0])) {
                  // If this paragraph node is a top-level one, give it a special class
                  return (
                    <div className="container" key={key}>
                      {renderNode(`h${node.level}`, { className: 'top-heading' }, children)}
                    </div>
                  );
                } else {
                  // Proceed with default paragraph rendering...
                  // return renderNode('p', { key }, children);
                  return (
                    <div className="max-container-840 center" key={key}>
                      <React.Fragment>{children}</React.Fragment>
                    </div>
                  );
                }
              }),
              renderNodeRule(isBlockquote, ({ adapter: { renderNode }, node, children, key, ancestors }) => {
                return (
                  <div className="max-container-840 center" key={key}>
                    {renderNode(
                      'blockquote',
                      { className: '' },
                      <>
                        {children}
                        {node.attribution && <footer>{node.attribution}</footer>}
                      </>
                    )}
                  </div>
                );
              }),
              renderNodeRule(isList, ({ adapter: { renderNode }, node, children, key, ancestors }) => {
                if (isRoot(ancestors[0])) {
                  return (
                    <div className="max-container-840 center" key={key}>
                      {renderNode('ul', { className: '' }, children)}
                    </div>
                  );
                } else {
                  return (
                    <ul className="max-container-840 center" key={key}>
                      <React.Fragment>{children}</React.Fragment>
                    </ul>
                  );
                }
              }),
            ]
          : []
      }
    />
  );
};

export default StructuredTextDefault;
