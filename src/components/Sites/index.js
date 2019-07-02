// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import SitesTable from './SitesTable';
import Wrapper from '../Wrapper';
import { connectComponent } from '../../utils';
import { getSitesList } from '../../state/sites/actions';

// Local Variables
const propTypes = {
  onGetSitesList: PropTypes.func.isRequired
};

// Component Definition
function Sites(props) {
  const { onGetSitesList } = props;

  useEffect(() => {
    onGetSitesList();
  }, [onGetSitesList]);

  return (
    <Wrapper>
      <SectionTitle>Sites</SectionTitle>
      <SitesTable />
    </Wrapper>
  );
}

Sites.propTypes = propTypes;

export default connectComponent(
  () => ({}),
  {
    onGetSitesList: getSitesList
  },
  Sites
);
