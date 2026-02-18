import type {Transition, Variants} from "framer-motion";

export const animationOne: Variants = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
}

export const transition: Transition = {
  duration: 0.6
}

export const animationTextOne: Variants = {
  textIn: {
    x: 0
  },
  textOut: {
    x: -1000
  },
}

export const animationTextTwo: Variants = {
  textIn: {
    x: 0
  },
  textOut: {
    x: 1000
  },
}