import React, {useState} from 'react';
import {Tooltip} from 'antd';

type FollowersProps = {
  followersNumber: number;
};

export const Followers: React.FC<FollowersProps> = ({followersNumber}) => {
  const [follow, setFollowing] = useState<boolean>(false);

  const followRepository = () => setFollowing(prev => !prev);

  return (
    <div className="d-in-block w-100">
      <Tooltip title="Follow repository" className="rating-row m-auto">
        <div className="followers">
          {followersNumber} <span className="mx-1">follows</span>
        </div>
        <img
          onClick={followRepository}
          className="star"
          src={require('../../assets/star.svg')}
          alt="star"
        />
      </Tooltip>
    </div>
  );
};
