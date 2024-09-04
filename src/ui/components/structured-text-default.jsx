import React from 'react';
import { StructuredText } from 'react-datocms';
import { CustomImage } from 'tectonica-ui';

const StructuredTextDefault = ({ content }) => {
  if (!content || !content?.value) return null;

  return (
    <StructuredText
      data={content}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case 'DatoCmsEmbedIframe':
            // return <EmbedIframe content={record} key={record.id} />;
            return <></>;

          case 'DatoCmsImage':
            return <CustomImage image={record.image} key={record.id} />;

          default:
            return null;
        }
      }}
    />
  );
};

export default StructuredTextDefault;
