import styled from 'styled-components';

export const Card = styled.div`
  width: 280px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 70px;
  background-color: rgb(168, 242, 247);
  border-radius: 5%;
  border: 2px solid black;
`;

export const Container = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const ParUsername = styled.p`
  width: auto;

  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: rgb(32, 33, 41);
  margin-bottom: 10px;
`;

export const ParTag = styled.p`
  width: auto;

  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: black;
  margin-bottom: 5px;
`;

export const ParLocation = styled.p`
  width: auto;

  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: black;
  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  li {
    display: flex;
    flex-direction: column;
    flex-basis: 33%;
    align-items: center;
    justify-content: center;
    border-top: 1px solid black;
    padding: 15px;
    background-color: black;
  }

  span {
    color: white;
  }
  li:not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const Span = styled.span`
font-weight:700;
font-size: 19px;`