import { css } from 'styled-components'
import * as style from '@styles/config/utilities'

export const nprogress = css`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${props =>
			props.theme.palette.name === 'light' ? style.colors.primary50 : style.colors.primary50};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 3px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${props =>
			props.theme.palette.name === 'light' ? style.colors.primary50 : style.colors.primary50}
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: none;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.primary50 : style.colors.primary50};
    border-left-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.primary50 : style.colors.primary50};
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
