import { FormEvent, useState } from "react";

import searchIcon from '../../assets/search.svg'

import { ModalInfo } from "../../components/ModalInfo";
import { ModalRepositories } from "../../components/ModalRepositories";
import { useSearch } from "../../hooks/useSearch";

import {
    Container, Title,
    InputArea, Form,
    InputText, ButtonSearch,
    Image
} from "./styles";

export function Home() {

    const [username, setUsername] = useState('')

    const { isLoadingUser, isLoadingRepo, getUserInGithub, getRepositoriesInGithub } = useSearch();

    async function getUsers(event: FormEvent) {
        event.preventDefault();

        getUserInGithub(username);
    }

    return (
        <Container>
            {isLoadingUser && !isLoadingRepo ? (
                <Title>
                    Que tal buscar seus dados do GitHub? Digite seu nome de usuário abaixo e vamos lá...
                </Title>
            ) : (<p></p>)}
            <InputArea>
                <Form onSubmit={getUsers}>
                    <InputText
                        placeholder="Digite seu nome de usuário no github"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                    <ButtonSearch type="submit">
                        <Image src={searchIcon} alt="Search" />
                    </ButtonSearch>
                </Form>

                {
                    !isLoadingUser ? (
                        <ModalInfo
                            onClick={() => {
                                getRepositoriesInGithub(username);
                            }}
                        />
                    ) : isLoadingRepo && (
                        <ModalRepositories />
                    )
                }
            </InputArea>
        </Container>
    );
}