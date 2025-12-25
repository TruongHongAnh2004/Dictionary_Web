export interface DictionaryAPI {
    word: string,
    phonetic: string,
    phonetics: Phonetics[],
    meanings: Meanings[],
}

export interface Phonetics {
    text: string,
    audio: string,
}

export interface Meanings {
    partOfSpeech: string,
    definitions: Definitions[],
    synonyms: string[],
    antonyms: string[],
}

export interface Definitions {
    definition: string,
    example: string,
}

