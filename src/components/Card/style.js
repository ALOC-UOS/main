import styled, { css } from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  margin-top: 24px;
  width: calc(100vw - 80px);
  @media (max-width: 480px) {
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

const CardWrapper = styled.div`
  min-width: 320px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.foreground};
  padding: 24px 16px;
  @media (max-width: 480px) {
    width: 100%;
  }
`

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #00000018;
  padding-bottom: 4px;
  margin-bottom: 16px;
`

const CardLabel = styled.div`
  color: ${(props) => props.theme.subText};
  font-size: 12px;
  font-weight: bold;
`

const CardTitle = styled.div`
  color: ${(props) => props.theme.titleText};
  font-size: 24px;
  font-weight: bold;
`

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`

const CardSubscription = styled.div`
  color: ${(props) => props.theme.subText};
  font-size: 12px;
  font-weight: 500;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
`

const Text = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.contentText};
  font-size: 16px;
  font-weight: 500;

  ${(props) => props.textColor === 'blue' && css`
    color: ${props.theme.primary};
  `}
  ${(props) => props.textColor === 'gold' && css`
    color: #FFB800;
  `}
  ${(props) => props.textColor === 'silver' && css`
    color: #BCBFC7;
  `}
`
export { CardContainer, CardWrapper, CardTop, CardLabel, CardTitle, CardContentWrapper, CardSubscription, CardContent, Icon, Text };
