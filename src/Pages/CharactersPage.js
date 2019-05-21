import React, {Component} from 'react';
import CharacterList from "../comps/CharacterList/CharacterList";
const characters_url = 'http://localhost:8080/characters';

class CharactersPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            characters: []
        };

    }

    componentDidMount() {
        this.setState({ isLoading: true });

        const defaultOptions = { headers: {page: 1, count: 100, name: '', nameStartsWith: '' }};
        const options = Object.assign(defaultOptions, {});

        fetch( characters_url, options)
            .then(response => response.json())
            .then(data => this.setState({ characters: data, isLoading: false }));
    }

    render() {
        const { isLoading, characters } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
                <CharacterList characters={characters} ></CharacterList>
        );

    }
};

export default CharactersPage;
