import React from "react";
import styled, { css } from "styled-components";
import { Card } from "./Card";

export type WorkCardProps = {
  imgUrl?: string;
  color?: string;
  websiteUrl?: string;
  name?: string;
  description?: string;
  children: React.ReactNode;
};

const Container = styled.div<Pick<WorkCardProps, "color">>`
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`;

export function WorkCard({
  imgUrl,
  color,
  websiteUrl,
  name,
  description,
  children,
}: WorkCardProps) {
  return (
    <Card>
      <Container className="relative" color={color}>
        <img className="absolute" src={imgUrl} />
        {children}
      </Container>
    </Card>
  );
}
