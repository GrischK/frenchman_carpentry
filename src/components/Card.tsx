import styles from "../css/Card.module.css";
import {ReactNode} from "react";

interface CardProps {
  children: ReactNode;
  img?: string;
  imgAlt?: string;
}


export default function Card({children, img, imgAlt}: CardProps) {
  return (
    <div className={styles.card}>
      {img ? <img src={img} alt={imgAlt}/> : null}
      <h3>{children}</h3>
    </div>
  )
}
