//Init
import { uniqueId } from 'lodash';

// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from '../../../tools/hooks';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = {
    avatar:   '',
    name:     '',
    position: '',
    overview: '',
    contacts: [
        {
            id:          'mail',
            url:         'dimaponomarenko@gmail.com',
            placeholder: 'youremail@gmail.com',
        },
        {
            id:          'phone',
            url:         '+380993523741',
            placeholder: '+380 88 88 88 888',
        },
        {
            id:          'adress',
            url:         'zaporizhia',
            placeholder: 'Ukraine, Zaporizhia. Charivna street 50',
        },
        {
            id:          'linkedin',
            url:         '',
            placeholder: 'Linkedin.com/in/yourname',
        },

        {
            id:          'github',
            url:         '',
            placeholder: 'github.com/YourName',
        },
    ],
    languages: [
        {
            id:          uniqueId(),
            language:    '',
            placeholder: 'Language...',
        },
        {
            id:          uniqueId(),
            language:    '',
            placeholder: 'Language...',
        },
    ],
};

// Types
export type fieldsKeys = keyof typeof initialState;
type Options = { type: fieldsKeys, value: string };

export type contactItem = {
    id: string;
    url: string;
    placeholder: string;
}

export type languagesItem = {
    id: string;
    language: string;
    placeholder: string;
}

type OptionsContactsField = { type: fieldsKeys, value: contactItem };
type OptionsLanguageField = { type: fieldsKeys, value: languagesItem };

// Slice
export const fieldsSlice = createSlice({
    name:     'fields',
    initialState,
    reducers: {
        fieldsCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        setContactsField: (state, action: PayloadAction<OptionsContactsField>) => ({
            ...state,
            contacts: state.contacts.map((elem) => {
                if (elem.id === action.payload.value.id) {
                    return {
                        ...elem,
                        url: action.payload.value.url,
                    };
                }

                return elem;
            }),
        }),
        setLanguageField: (state, action: PayloadAction<OptionsLanguageField>) => ({
            ...state,
            languages: state.languages.map((language) => {
                if (language.id === action.payload.value.id) {
                    return {
                        ...language,
                        language: action.payload.value.language,
                    };
                }

                return language;
            }),
        }),

        removeLanguageField: (state, action: PayloadAction<Options>) => ({
            ...state,
            languages: state.languages.filter((language) => language.id !== action.payload.value),
        }),

        removeContactField: (state, action: PayloadAction<Options>) => ({
            ...state,
            contacts: state.contacts.filter((contact) => contact.id !== action.payload.value),
        }),

        createLanguageField: (state, action: PayloadAction<Options>) => ({
            ...state,
            languages: [
                ...state.languages,
                { id: action.payload.value, language: '', placeholder: 'Language...' },
            ],
        }),
        resetfieldsToInitialAction: () => initialState,
    },
});

// Interfaces
const fieldsActions = fieldsSlice.actions;
export default fieldsSlice.reducer;

export const useFieldsRedux = () => {
    const dispatch = useDispatch();

    return {
        fieldsRedux:          useSelector(({ fields }) => fields),
        setFieldsAction:      (options: Options) => void dispatch(fieldsActions.fieldsCreatorAction(options)),
        setContactField:      (options: OptionsContactsField) => void dispatch(fieldsActions.setContactsField(options)),
        setLanguageField:     (options: OptionsLanguageField) => void dispatch(fieldsActions.setLanguageField(options)),
        removeLanguageField:  (options: Options) => void dispatch(fieldsActions.removeLanguageField(options)),
        removeContactField:   (options: Options) => void dispatch(fieldsActions.removeContactField(options)),
        createLanguageField:  (options: Options) => void dispatch(fieldsActions.createLanguageField(options)),
        resetFieldsToInitial: () => void dispatch(fieldsActions.resetfieldsToInitialAction()),
    };
};

// Used ./src/tools/helpers/makeRequest
export const fieldsCreatorAction = fieldsActions.fieldsCreatorAction;
