import styled from "styled-components"

const StyledTitle = styled.h1`
    text-align: center;
    text-color: white;
`;
const StyledText = styled.p`
    text-align: center;
    text-color: white;
`;
const Container = styled.div``;

const StyleLink = styled.a`
    text-decoration: none;
    color: red;
`;

const Presentation = () => {
    return (
        <Container>
            <StyledTitle>
                Pokédex 1.0
            </StyledTitle>
            <StyledText>
                 Ceci est un petit pokédex, effectué avec une API. Vous pouvez retrouver cette API en cliquant sur ce
                 <StyleLink href="https://pokeapi.co/" title="PokéAPI" rel="noopener norefer    rer" target='_blank'> lien </StyleLink> 
                 <br></br>
                 Pour utiliser ce pokédex, entrez le nom anglais du pokémon dont vous voulez avoir les informations, et il apparaitra sur la partie centrale de l&apos;écran.
             </StyledText>
        </Container>     
    );

};

export default Presentation