import React from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const CharacterList = ({ characters }) => (
        <table>
            <tbody>
                {
                    characters.map(character =>
                        <CharacterListItem key={character.id} character={character} />
                    )
                }
            </tbody>
        </table>
        );

CharacterList.propsTypes = {
    files: PropTypes.array
};

export default CharacterList;
