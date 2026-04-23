import styles from "../css/Button.module.css";
import {ButtonHTMLAttributes, ReactNode} from "react";
import {NavLink} from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({children, href, variant = "primary", ...buttonProps}: ButtonProps) {
  const className = `${styles.btn} ${variant === "secondary" ? styles.secondary : ""}`;

  if (href) {
    return (
      <NavLink className={className} to={href}>
        {children}
      </NavLink>
    )
  }

  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  )
}
