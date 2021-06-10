import React from 'react';
import {Avatar, Tooltip} from 'antd';
import {Label} from '../labels/Label';

type UserProfileProps = {
  avatar: string;
  tooltipData: string;
  link: string;
  profileName: string;
};

export const UserProfile: React.FC<UserProfileProps> = ({
  link,
  avatar,
  tooltipData,
  profileName,
}) => {
  return (
    <>
      <Avatar src={avatar} className="mx-1" />
      <Tooltip title={tooltipData} placement="bottom" className="mx-1">
        <Label text={profileName} size="small" isLink href={link} />
      </Tooltip>
    </>
  );
};
