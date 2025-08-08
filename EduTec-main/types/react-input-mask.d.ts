declare module "react-input-mask" {
  import * as React from "react";

  export interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string;
    maskChar?: string | null;
    alwaysShowMask?: boolean;
    beforeMaskedValueChange?: (
      newState: {
        value: string;
        selection: { start: number; end: number };
        previousValue: string;
      },
      oldState: {
        value: string;
        selection: { start: number; end: number };
        previousValue: string;
      },
      userInput: string,
      maskOptions: object
    ) => {
      value: string;
      selection: { start: number; end: number };
    };
  }

  const InputMask: React.FC<InputMaskProps>;
  export default InputMask;
}
