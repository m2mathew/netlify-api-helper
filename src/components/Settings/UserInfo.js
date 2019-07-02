// External Dependencies
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

// Internal Dependencies
import { connectComponent } from '../../utils';

// Local Variables
const InfoSection = styled.section`
  padding: 16px;
`;

const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid lightskyblue;
  border-radius: 8px;
  padding-left: 16px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 36px;
  width: 36px;
  margin-right: 16px;
`;

const DataContainer = styled.div`
  padding: 16px;
`;

const Key = styled.strong`
  margin-right: 6px;
`;

// Component Definition
function UserInfo(props) {
  const { user } = props;

  if (!user) {
    window.location.href = '/';
  }

  console.log(Array.isArray(user.connected_accounts));

  return (
    <InfoSection>
      <SubtitleContainer>
        {user.avatar_url && <Avatar src={user.avatar_url} />}
        <h4>{user.full_name}</h4>
      </SubtitleContainer>
      <DataContainer>
        <p>
          <Key>Email:</Key> {user.email}
        </p>
        <p>
          <Key>Number of Sites:</Key> {user.site_count}
        </p>
        <p>
          <Key>Member since:</Key> {moment(user.created_at).format('M-D-Y')}
        </p>
      </DataContainer>
    </InfoSection>
  );
}

export default connectComponent(
  state => {
    const { apiData } = state.user;

    return {
      user: apiData
    };
  },
  {},
  UserInfo
);
