import React from "react";
import { Card, List, ListItem, Tag, oltStyles } from "@lightelligence/react";

export const Device = ({
  connectedBy,
  description,
  deviceTypeId,
  location,
  name,
  tags
}) => {
  const tagComponents = tags.map(tag => (
    <Tag
      key={tag}
      className={`${oltStyles.uMargin1} ${oltStyles.uFontSizeXxSmall}`}
    >
      {tag}
    </Tag>
  ));
  return (
    <Card title={name} style={{ height: "100%" }}>
      <List definition>
        <ListItem term="Location">{location}</ListItem>
        <ListItem term="Description">{description}</ListItem>
        <ListItem term="Device Type ID">{deviceTypeId}</ListItem>
        <ListItem term="Connected By">{connectedBy}</ListItem>
      </List>
      <div>{tagComponents}</div>
    </Card>
  );
};
