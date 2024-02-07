import { ComponentPropsWithoutRef } from "react";
import "../ui.scss";
type CheckboxProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

function Checkbox({ label, id, ...props }: CheckboxProps) {
  return (
    <div className="checkbox">
      <input type="checkbox" name={id} id={id} {...props} />
      <label htmlFor={id}>{label} </label>
    </div>
  );
}

export default Checkbox;
