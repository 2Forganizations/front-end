import { ChangeEvent } from "react";

interface IProps {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CommonInput = ({ onChangeInput }: IProps) => {
  return <input onChange={onChangeInput} />;
};

export default CommonInput;
