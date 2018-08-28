import styled from 'styled-components';

const StyledLoadingPlaceholder = styled.div`
  .show-loading-animation.rect-shape, .show-loading-animation.round-shape, .show-loading-animation.text-row,
  .show-loading-animation .rect-shape,
  .show-loading-animation .round-shape,
  .show-loading-animation .text-row {
    animation: react-placeholder-pulse 1.5s infinite; }

  @keyframes react-placeholder-pulse {
    0% {
      opacity: .6; }
    50% {
      opacity: 1; }
    100% {
      opacity: .6; } }
`;

export default StyledLoadingPlaceholder;
