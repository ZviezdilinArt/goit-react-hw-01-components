import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 25px;
  padding: 25px 25px;
  background-color: rgb(168, 242, 247);
  border-radius: 10px;
  border: 1px solid black; 
  p {
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 20px;
  }
`;

export const SpanStatus = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
background-color:${({isOnline})=> isOnline ? 'green' : 'red'};
`