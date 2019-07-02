// External Dependencies
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import { connectComponent } from '../../utils';

// Local Variables
const propTypes = {
  isGettingSites: PropTypes.bool.isRequired
};

const Root = styled.section`
  padding: 16px;
`;

const DataRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 10px 0 10px 16px;

  &:hover {
    background: #ddd;
    cursor: pointer;
  }
`;

const Screenshot = styled.img`
  height: 50px;
  margin-right: 16px;
`;

// Component Definition
function SitesTable(props) {
  const { isGettingSites, siteList, user } = props;

  if (!user) {
    window.location.href = '/';
  } else if (isGettingSites) {
    return <CircularProgress size={50} thickness={5} />;
  }

  return (
    <Root>
      {siteList.map(site => (
        <DataRow key={site.id}>
          <Screenshot src={site.screenshot_url} />
          <div>
            <h3>
              <a href={site.url}>{site.name}</a>
            </h3>
            <p>{site.url}</p>
          </div>
        </DataRow>
      ))}
    </Root>
  );
}

SitesTable.propTypes = propTypes;

export default connectComponent(
  state => {
    const { apiData } = state.user;

    return {
      isGettingSites: state.sites.isGetting,
      siteList: state.sites.apiData ? state.sites.apiData.Items : [],
      user: apiData
    };
  },
  {},
  SitesTable
);
