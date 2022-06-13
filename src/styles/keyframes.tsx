import { keyframes } from "@emotion/react"

export const halfCyanShadow = keyframes`
  0% {
    top: 0;
    left: 0;
    height: 50%;
    width: 50%;
  }
  16.66% {
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
  }
  32.32% {
    top: 0;
    left: 50%;
    height: 50%;
    width: 50%;
  }
  49.98% {
    top: 50%;
    left: 50%;
    height: 50%;
    width: 50%;
  }
  66.64% {
    top: 50%;
    left: 0;
    height: 50%;
    width: 100%;
  }
  83.3% {
    top: 50%;
    left: 0;
    height: 50%;
    width: 50%;
  }
  100% {
    top: 0;
    left: 0;
    height: 50%;
    width: 50%;
  }`
export const halfYellowShadow = keyframes`
  0% {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 50%;
  }
  16.66% {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 100%;
  }
  32.32% {
    bottom: 0;
    right: 50%;
    height: 50%;
    width: 50%;
  }
  49.98% {
    bottom: 50%;
    right: 50%;
    height: 50%;
    width: 50%;
  }
  66.64% {
    bottom: 50%;
    right: 0;
    height: 50%;
    width: 100%;
  }
  83.3% {
    bottom: 50%;
    right: 0;
    height: 50%;
    width: 50%;
  }
  100% {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 50%;
  }`
export const bounceFadeBackward = keyframes`
    0% {
      opacity: 1;
    }
    30% {
      transform: translateY(-85%);
      opacity: 0.4;
    }
    90%{
      // transform: translateY(-90%);
    }
    60% {
      transform: translateY(-75%);
    }
    100% {
      transform: translateY(-75%);
      opacity: 0.3;
    }
  `
export const bounceFadeForward = keyframes`
    0% {
      transform: translateY(-75%);
      opacity: 0.3;
    }
    60% {
      transform: translateY(-75%);
    }
    80% {
      transform: translateY(10%);
      opacity: .8;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
   `