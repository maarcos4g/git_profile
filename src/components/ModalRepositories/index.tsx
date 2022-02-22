import { useSearch } from '../../hooks/useSearch';
import {
    Container, 
    HeaderContainer,
    ButtonBack, ImageBack,
    Title, CountText,
    DescriptionContainer,
    Image, ContainerDetail,
    TitleRepo, DescriptionRepo
} from './styles'

import github from '../../assets/github.svg'
import arrowBack from '../../assets/arrow_back.svg'

export function ModalRepositories() {

    const { repositories, closeModal } = useSearch();

    return (
        <Container>
            <HeaderContainer>
                <ButtonBack onClick={closeModal}>
                    <ImageBack src={arrowBack} />
                </ButtonBack>

                <Title>Seus Repositórios</Title>

            </HeaderContainer>
            <CountText>Total: {repositories?.length}</CountText>

            {
                repositories?.map(repo => {
                    return (
                        <DescriptionContainer key={repo.full_name}>

                            <Image src={github} alt={repo.full_name} />

                            <ContainerDetail>

                                <TitleRepo
                                    href={`https://github.com/${repo.full_name}`}
                                    target='_blank'
                                >
                                    {repo.full_name}
                                </TitleRepo>

                                <DescriptionRepo>{repo.description}</DescriptionRepo>
                            </ContainerDetail>

                        </DescriptionContainer>
                    );
                })
            }
        </Container>
    );
}