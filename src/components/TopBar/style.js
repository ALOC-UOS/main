import styled, { css } from 'styled-components';

const TopBarContainer = styled('div')`
  z-index: 100;
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 16px 24px;
  margin: 0 40px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.foreground}a0;
  backdrop-filter: blur(16px);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.05);
  gap: 40px;

  ${(props) => props.isScroll && css`
    top: 0;
    margin: 0;
    padding: 24px 64px;
    border-radius: 0px;
  `}
`;

const TopBarItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.subText};
  cursor: pointer;
  user-select: none;
  &:hover {
    color: ${props => props.theme.titleText};
  }
  ${(props) => props.selected && css`
    color: ${props => props.theme.primary};
    &:hover {
      color: ${props => props.theme.primary};
    }
  `}
`

export { TopBarContainer, TopBarItem };
