import React from 'react';
import { CharacterPagination, Characters } from '../components';

const CharacterPage = () => {
    return (
        <div>
            <CharacterPagination/>
            <Characters/>
            <CharacterPagination/>
        </div>
    );
}

export {CharacterPage};
