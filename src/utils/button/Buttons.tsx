import React from "react";
import { ArrowCircleRight } from "phosphor-react";
import { ArrowCircleLeft } from "phosphor-react";
import "./Button.scss";
interface IProps {
  value: string;
  width: string;
  height: string;
  lineHeight: string;
  hasIcon?: string;
  onClick: () => void;
}

export function AppButton(props: IProps) {
  return (
    <button
      className='appButton'
      style={{ width: `${props.width}`, height: `${props.height}` }}
      onClick={props.onClick}>
      <label className='appButton__text'>
        {props.value}
        {props.hasIcon && (
          <ArrowCircleRight
            style={{ marginTop: "10px", marginLeft: "5px" }}
            size={15}
            color='#000'
            weight='bold'
          />
        )}
      </label>
    </button>
  );
}

export const BackButton = (props: IProps) => {
  return (
    <button className='backButton' onClick={props.onClick}>
      <ArrowCircleLeft
        style={{ marginTop: "5px", marginLeft: "-5px" }}
        size={15}
        color='#fff'
        weight='bold'
      />{" "}
      {props.value}
    </button>
  );
};
