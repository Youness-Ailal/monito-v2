import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, type ReactNode } from "react";
import "./button.scss";

type ButtonProps = {
  variant?: "primary" | "outline" | "ghost";
  icon?: ReactNode;
  children?: ReactNode;
  styling?: "normal" | "overflow" | "expand";
  placeIcon?: "right" | "left";
} & ComponentPropsWithoutRef<"button">;
function index({
  variant = "primary",
  styling = "normal",
  icon,
  placeIcon = "left",
  children,
  ...props
}: ButtonProps) {
  if (styling === "overflow") {
    return (
      <button className={cn("btn", variant, "btn-overflow")}>
        <p>{children}</p>
        <span className="btn-overflow__icon btn-overflow__icon--1">{icon}</span>
        <span className="btn-overflow__icon btn-overflow__icon--2">{icon}</span>
      </button>
    );
  }
  if (styling === "expand") {
    return (
      <button className={cn("btn", variant, "btn-expand")}>
        <p>{children}</p>
        <span className="btn-expand__icon">{icon}</span>
      </button>
    );
  }
  return (
    <button className={cn("btn ", variant)} {...props}>
      {icon && placeIcon === "left" && (
        <span className="btn--icon">{icon}</span>
      )}
      {children}
      {icon && placeIcon === "right" && (
        <span className="btn--icon">{icon}</span>
      )}
    </button>
  );
}

export default index;
