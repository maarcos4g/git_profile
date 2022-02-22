import {
    Container, Image,
    TextBold, Text,
    ContainerText,
    ContainerDescription,
    DescriptionItem,
    Separator
} from './styles'

import github from '../../assets/github.svg'
import { useSearch } from '../../hooks/useSearch';

type ModalProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function ModalInfo({onClick}: ModalProps) {

    const { user } = useSearch();

    return (
        <Container>
            <Image src={user?.avatar_url} alt={user?.name} />

            <TextBold>{user?.name}</TextBold>

            <ContainerText>
                <Text>@{user?.login}</Text>
                <Text>{user?.bio}</Text>
            </ContainerText>

            <ContainerDescription>
                <DescriptionItem onClick={onClick}>
                    <TextBold>{user?.public_repos}</TextBold>
                    <Text>Repositórios</Text>
                </DescriptionItem>

                <Separator />

                <DescriptionItem>
                    <TextBold>{user?.followers}</TextBold>
                    <Text>Seguidores</Text>
                </DescriptionItem>

                <Separator />

                <DescriptionItem>
                    <TextBold>{user?.following}</TextBold>
                    <Text>Seguindo</Text>
                </DescriptionItem>

            </ContainerDescription>
        </Container>
    );
}