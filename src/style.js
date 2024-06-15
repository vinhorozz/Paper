import styled from "styled-components";
import Background from './assets/background1.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: autopx;
`;

export const CoverImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto; /* Ajuste conforme necessário */
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 80px;
`;

export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: 25px;
    color: #EEEEEE;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin: 4px;
    color: #FFFFFF;
`;

export const Button = styled.button`
    width: 342px;
    height: 58px;
    margin: 4px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    cursor: pointer;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`;

export const User = styled.li`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #FFFFFF;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;

export const Footer = styled.footer`
    background-color: #f8f9fa;
    padding: 20px 0;
    margin-top: 20px;
    width: 100%;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
`;

export const FooterSection = styled.div`
    flex: 1;
    padding: 10px;
    min-width: 200px;
`;

export const FooterTitle = styled.h4`
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: white;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const LinkButton = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    .cursor: pointer;
    text-decoration: none;
    text-align: center;
`;

export const FooterText = styled.p`
    margin: 5px 0;
    color: white;
`;

export const FiltersContainer = styled.div`
    position: relative absolute;
    width: 400px;
    height: 100%;
    overflow-y: auto;
    background-color: none; #f8f9fa;
    padding: 20px;
    border:none;

`;

export const ProductPageContainer = styled.div`
    flex: 1;
    padding: 20px;
`;

