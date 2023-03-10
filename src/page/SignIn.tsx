import { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const SignIn = () => {
  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('s');
  };

  const onHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSignInInfo({ ...signInInfo, [name]: value });
  };

  const onClickHandler = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Header>로그인</Header>
        <Header>로그인</Header>
        <Form onSubmit={e => onHandleSubmit(e)}>
          <Label htmlFor="email">email</Label>
          <Input
            type="email"
            name="email"
            value={signInInfo.email}
            placeholder="이메일"
            onChange={e => onHandleChange(e)}
          />
          <Label htmlFor="password">password</Label>
          <Input
            type="password"
            name="password"
            value={signInInfo.password}
            placeholder="비밀번호"
            onChange={e => onHandleChange(e)}
          />

          <Button type="submit">로그인</Button>
        </Form>
      </Wrapper>
      <P></P>
      <ImgContainer onClick={e => onClickHandler(e)}>
        <Img src="./kakaoLargeLogin.png" alt="df" />
      </ImgContainer>
    </Container>
  );
};
const ImgContainer = styled.div`
  margin: 0 auto;
  margin-left: 50px;
  width: 90%;
`;

const Img = styled.img`
  width: inherit;
`;

const P = styled.p`
  width: 100%;
  border-top: 1px solid black;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 30px;
  font-size: 30px;
`;

const Form = styled.form`
  width: 300px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;
const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 450;
`;

const Input = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid grey;
  outline: none;
  font-size: 14px;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  width: 80px;
  height: 30px;
  background-color: lightblue;
  border-radius: 10px;
  border: none;
  opacity: 0.86;
  &:hover {
    opacity: 1;
  }
`;

export default SignIn;
