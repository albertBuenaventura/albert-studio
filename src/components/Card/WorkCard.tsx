import React from "react";
import styled, { css } from "styled-components";
import { Card } from "./Card";

export type WorkCardProps = {
  imgUrl?: string;
  color?: string;
  name?: string;
  cta?: React.ReactNode;
};

const Container = styled.div<Pick<WorkCardProps, "color">>`
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`;

export function WorkCard({ imgUrl, color, name, cta }: WorkCardProps) {
  return (
    <Card>
      <Container className="flex flex-col" color={color}>
        <div className="text-white text-lg flex flex-col space-y-2 self-end mr-8 my-8">
          <span>{name}</span>
          <span>{cta}</span>
        </div>
        <img
          className="ml-10 h-auto w-full drop-shadow-md rounded"
          src={imgUrl}
        />
      </Container>
    </Card>
  );
}
