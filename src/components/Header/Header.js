import { useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderText } from './styled';

export default function Header(props) {

    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <HeaderText onClick={() => navigate("/")}>Viagens Alucinantes</HeaderText>
            {props.goBack ? <button onClick={() => navigate(-1)}>Voltar</button> : <></>}
        </HeaderContainer>

    )
}