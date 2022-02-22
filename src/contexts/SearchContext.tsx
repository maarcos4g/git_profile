import axios from 'axios';
import { createContext, useState, ReactNode } from 'react';

type User = {
    login: string;
    avatar_url: string;
    name: string;
    location: string;
    bio: string;
    public_repos: string;
    followers: string;
    following: string;
}

type Repository = {
    full_name: string;
    description: string;
}

type UserContextType = {
    user: User | undefined;
    repositories: Repository[] | undefined;
    getUserInGithub: (login: string) => Promise<void>;
    getRepositoriesInGithub: (login: string) => Promise<void>;
    isLoadingUser: boolean;
    isLoadingRepo: boolean;
    closeModal: () => void;
}

type ContextProps = {
    children: ReactNode;
}

export const SearchContext = createContext({} as UserContextType);

export function SearchContextProvider({ children }: ContextProps) {

    const [user, setUser] = useState<User>();
    const [repositories, setRepositories] = useState<Repository[]>();
    const [isLoadingUser, setIsLoadingUser] = useState(true);
    const [isLoadingRepo, setLoadingRepo] = useState(false);

    async function getUserInGithub(login: string) {
        setIsLoadingUser(true)
        axios.get(`https://api.github.com/users/${login}`)
            .then(response => {
                setUser(response.data);
                setIsLoadingUser(false)

            })
            .catch(err => alert(err));
    }

    async function getRepositoriesInGithub(username: string) {
        setLoadingRepo(false);
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(response => {
                setRepositories(response.data);
                setIsLoadingUser(true);
                setLoadingRepo(true);

            })
            .catch(err => alert(err));
    }

    function closeModal () {
        setLoadingRepo(false);
        setIsLoadingUser(false);
    }

    return (
        <SearchContext.Provider value={{
            user,
            repositories,
            getUserInGithub,
            getRepositoriesInGithub,
            isLoadingUser,
            isLoadingRepo,
            closeModal
        }}>
            {children}
        </SearchContext.Provider>
    );
}