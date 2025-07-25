import React from 'react';
import { Breadcrumbs, Button, FloatingShareButtons, formatDate, isArrayAndNotEmpty, truncateText } from 'tectonica-ui';
import StructuredTextDefault from '../../components/structured-text-default';
import BlockResources from '../../blocks/block-resources/block-resources';
import Tooltip from '../../components/tooltip/tooltip';
import { useLocation } from '@reach/router';
import AnimateLines from '../../transitions/animate-lines';
import { useTextSize } from '../../../context/text-size-context';
import TextSizeAdjuster from '../../components/text-resize/text-resize';

import './styles.scss';

const ResourceDetail = ({ resource, related, listLink }) => {
  const location = useLocation();
  const { scaleClass } = useTextSize();
  const { title, content, authorName, date, tags, externalUrl } = resource;

  const paths = [
    { d: 'M9.75941 89.2122L4.8797 33.8982L0 89.2122H9.75941Z' },
    { d: 'M25.0573 80.4697L20.1776 26.3606L15.2979 80.4697H25.0573Z' },
    { d: 'M40.3561 72.5676L35.4904 18.4726L30.5967 72.5676H40.3561Z' },
    { d: 'M55.6676 65.4783L50.7879 10.2764L45.9082 65.4783H55.6676Z' },
    { d: 'M70.9664 59.2437L66.0867 1.85609L61.207 59.2437H70.9664Z' },
    { d: 'M86.2643 53.8215L81.3846 -6.74644L76.5049 53.8215H86.2643Z' },
    { d: 'M101.562 49.1699L96.6824 -15.4752L91.8027 49.1699H101.562Z' },
    { d: 'M116.875 45.2329L112.009 -24.2879L107.115 45.2329H116.875Z' },
    { d: 'M132.187 41.9966L127.307 -33.1565L122.428 41.9966H132.187Z' },
    { d: 'M147.485 39.3765L142.605 -41.9833L137.726 39.3765H147.485Z' },
    { d: 'M162.783 37.4431L157.903 -50.7679L153.023 37.4431H162.783Z' },
    { d: 'M178.081 36.3081L173.201 -59.4126L168.321 36.3081H178.081Z' },
    { d: 'M193.393 35.958L188.513 -67.8888L183.634 35.958H193.393Z' },
    { d: 'M208.691 36.3921L203.811 -76.1133L198.932 36.3921H208.691Z' },
    { d: 'M223.99 37.5688L219.11 -83.9734L214.23 37.5688H223.99Z' },
    { d: 'M239.288 39.4185L234.408 -91.3708L229.528 39.4185H239.288Z' },
    { d: 'M254.6 41.9543L249.735 -98.11L244.841 41.9543H254.6Z' },
    { d: 'M269.912 45.1208L265.032 -103.938L260.152 45.1208H269.912Z' },
    { d: 'M285.211 48.8755L280.331 -108.408L275.451 48.8755H285.211Z' },
    { d: 'M300.508 53.1909L295.629 -112.079L290.749 53.1909H300.508Z' },
    { d: 'M315.806 58.0806L310.927 -115.889L306.047 58.0806H315.806Z' },
    { d: 'M331.105 63.4607L326.239 -119.784L321.359 63.4607H331.105Z' },
    { d: 'M346.417 69.3032L341.537 -123.707L336.657 69.3032H346.417Z' },
    { d: 'M361.715 75.594L356.836 -127.532L351.956 75.594H361.715Z' },
    { d: 'M377.013 82.291L372.134 -131.147L367.254 82.291H377.013Z' },
    { d: 'M392.311 89.3523L387.445 -134.44L382.552 89.3523H392.311Z' },
    { d: 'M407.637 96.75L402.758 -137.284L397.878 96.75H407.637Z' },
    { d: 'M422.935 104.414L418.056 -139.567L413.176 104.414H422.935Z' },
    { d: 'M438.234 112.344L433.354 -141.319L428.475 112.344H438.234Z' },
    { d: 'M453.532 120.47L448.652 -142.44L443.772 120.47H453.532Z' },
    { d: 'M468.83 128.764L463.965 -143L459.085 128.764H468.83Z' },
    { d: 'M484.142 137.171L479.263 -142.986L474.383 137.171H484.142Z' },
    { d: 'M499.44 145.647L494.56 -142.482L489.681 145.647H499.44Z' },
    { d: 'M514.739 154.151L509.859 -141.501L504.979 154.151H514.739Z' },
    { d: 'M530.037 162.642L525.171 -139.693L520.277 162.642H530.037Z' },
    { d: 'M545.349 171.034L540.483 -136.835L535.604 171.034H545.349Z' },
    { d: 'M560.661 179.273L555.781 -133.207L550.901 179.273H560.661Z' },
    { d: 'M575.96 187.315L571.08 -128.961L566.2 187.315H575.96Z' },
    { d: 'M591.257 195.063L586.378 -124.212L581.498 195.063H591.257Z' },
    { d: 'M606.555 202.474L601.69 -119.07L596.796 202.474H606.555Z' },
    { d: 'M621.868 209.451L616.988 -113.606L612.108 209.451H621.868Z' },
    { d: 'M637.166 215.911L632.286 -107.819L627.406 215.911H637.166Z' },
    { d: 'M667.776 226.867L662.896 -96.4287L658.017 226.867H667.776Z' },
    { d: 'M652.464 220.632L647.599 -101.669L642.705 220.632H652.464Z' },
    { d: 'M683.075 231.224L678.209 -89.003L673.329 231.224H683.075Z' },
    { d: 'M728.983 238.117L724.103 -74.6983L719.224 238.117H728.983Z' },
    { d: 'M713.165 236.338L708.3 -80.4426L703.42 236.338H713.165Z' },
    { d: 'M697.769 233.27L692.889 -86.9573L688.01 233.27H697.769Z' },
    { d: 'M744.281 238.916L739.415 -61.2619L734.521 238.916H744.281Z' },
    { d: 'M759.579 239L754.714 -53.9484L749.834 239H759.579Z' },
    { d: 'M774.891 238.412L770.012 -46.4666L765.132 238.412H774.891Z' },
    { d: 'M790.189 237.109L785.309 -38.8729L780.43 237.109H790.189Z' },
    { d: 'M805.488 235.049L800.608 -31.125L795.729 235.049H805.488Z' },
    { d: 'M820.785 232.219L815.92 -23.2229L811.04 232.219H820.785Z' },
    { d: 'M836.112 228.576L831.232 -15.1949L826.353 228.576H836.112Z' },
    { d: 'M851.41 224.163L846.53 -6.99866L841.65 224.163H851.41Z' },
    { d: 'M866.709 219.007L861.829 1.40764L856.949 219.007H866.709Z' },
    { d: 'M882.007 213.206L877.127 10.0661L872.247 213.206H882.007Z' },
  ];

  return (
    <>
      <article className="blog-detail resource-variant">
        <div className="waves-decorator">
          <AnimateLines paths={paths} />
        </div>

        <div className="inner-header">
          <div className="container">
            <Breadcrumbs
              breadcrumb={{
                title: listLink.title,
                path: { ...listLink, slug: `${listLink.slug}${location.search.toString()}` },
              }}
              currentPage={truncateText(title)}
            />

            <div className="inner-container">
              <h1 className={scaleClass}>{title}</h1>
            </div>
          </div>
        </div>
        <div className={`tags-wrapper ${scaleClass}`}>
          <div className="container">
            <span className="label">Tags</span>
            <div className="resource-tags">
              {tags.map((tag) => (
                <Tooltip text={tag.name} description={tag.description} color={tag.color} />
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="share-buttons">
            <FloatingShareButtons />
            <TextSizeAdjuster />
          </div>
          <div className="inner-container">
            {(authorName || date) && (
              <div className={`author-name ${scaleClass}`}>
                {authorName && (
                  <p>
                    BY <span>{authorName}</span>
                  </p>
                )}
                {date && <p className={`date ${scaleClass}`}>{formatDate(date)}</p>}
              </div>
            )}

            <div className={`main-content ${scaleClass}`}>
              <StructuredTextDefault content={content} />

              {externalUrl && (
                <div className="view-resource">
                  <Button block={{ title: 'View Resource', link: { externalUrl } }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {isArrayAndNotEmpty(related.nodes) && (
        <section className="blog-related purple">
          <BlockResources
            block={{
              headline: 'Related Resources',
              highlightResources: related.nodes,
              ctas: [
                {
                  title: 'All Resources',
                  link: { path: listLink },
                  variant: 'primary',
                },
              ],
            }}
          />
        </section>
      )}
    </>
  );
};

export default ResourceDetail;
