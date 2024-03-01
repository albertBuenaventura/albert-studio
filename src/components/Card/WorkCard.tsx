import React from "react";
import styled, { css } from "styled-components";
import cx from "classnames";
import { Card } from "./Card";

export type WorkCardProps = {
  imgUrl?: string;
  color?: string;
  name?: string;
  cta?: React.ReactNode;
  className?: string;
  imgClassName?: string;
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
  name,
  cta,
  className,
  imgClassName,
}: WorkCardProps) {
  return (
    <Card
      className={cx(
        "bg-orange-100 w-full !rounded-[40px] transition hover:-translate-y-2",
        className
      )}
    >
      <Container className="flex flex-col h-full justify-between">
        <div className="text-black dark:text-white text-2xl flex flex-col space-y-2 self-end mx-10 my-8">
          <span>{name}</span>
          <span>{cta}</span>
        </div>
        <img
          className={cx("ml-10 h-auto drop-shadow-md rounded", imgClassName)}
          src={imgUrl}
        />
      </Container>
    </Card>
  );
}
