import React from 'react';

const BaseComponents = {
  // DatoCmsInformationBlock: InformationBlock,
};

const BlockBuilder = ({ components = [] }) => {
  return (
    <>
      {components.map((blockComponent) => {
        const { __typename, id, ...rest } = blockComponent;
        const BlockComponent = BaseComponents[__typename];

        if (!BlockComponent) {
          console.log(`Block component with id ${__typename} not found`);
          return null;
        }

        return <BlockComponent key={id} {...rest} />;
      })}
    </>
  );
};

export default BlockBuilder;
