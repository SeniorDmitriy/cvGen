// Core
import { ChangeEvent } from 'react';
import { useExperienceHooksRedux } from '../../../bus/client/experienceFields';

// Bus
import { useLanguageFields } from '../../../bus/client/languageFields';
import { useInfoFields } from '../../../bus/client/infoFields';
import { useEducationField } from '../../../bus/client/educationFields';

// Types
import { languagesItem, experienceItem, descriptionList, project } from '../../../bus/client/types';

export const useCustomHooks = () => {
    const {
        infoFields, debounceChangeImg,
        debounceChangeName, debounceChangeOverview,
        debounceChangePosition,
    } = useInfoFields();

    const {
        experienceFieldRedux, debounceChangeExperienceFieldAction,
        debounceChangeExperienceDescrField, debounceRemoveExperienceDescrField,
        debounceAddExperienceDescrField, debounceChangeProjectsFieldAction,
        debounceAddExperienceProjectField, debounceRemoveExperienceProjectField,
    } = useExperienceHooksRedux();

    const {
        languageFields, debounceChangeLanguageField,
        debounceRemoveLanguageField,
    } = useLanguageFields();

    const {
        educationFields, debounceAddEducationField,
    } = useEducationField();

    const handleChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0);

        if (file) {
            debounceChangeImg(URL.createObjectURL(file));
        }
    };

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        debounceChangeName(event.target.value);
    };

    const handleChangePosition = (event: ChangeEvent<HTMLInputElement>) => {
        debounceChangePosition(event.target.value);
    };

    const handleChangeOverview = (event: ChangeEvent<HTMLTextAreaElement>) => {
        debounceChangeOverview(event.target.value);
    };

    const handleChangeLanguageField = (event: ChangeEvent<HTMLInputElement>, language: languagesItem) => {
        debounceChangeLanguageField({ ...language, language: event.target.value });
    };

    const handleChangeExperienceDate = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => {
        debounceChangeExperienceFieldAction({ ...experience, date: event.target.value }, 'date');
    };

    const handleChangeExperiencePosition = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => {
        debounceChangeExperienceFieldAction({ ...experience, position: event.target.value }, 'position');
    };

    const handleChangeExperienceLocation = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => {
        debounceChangeExperienceFieldAction({ ...experience, location: event.target.value }, 'location');
    };

    const handleChangeProjectsName = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, name: event.target.value });
    };

    const handleChangeProjectsCustomer = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, customer: event.target.value });
    };

    const handleChangeProjectsDuration = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, duration: event.target.value });
    };

    const handleChangeProjectsRole = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, role: event.target.value });
    };

    const handleChangeProjectsResponsibilities = (event: ChangeEvent<HTMLTextAreaElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, responsibilities: event.target.value });
    };

    const handleChangeProjectsTeamSize = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, teamSize: event.target.value });
    };

    const handleChangeProjectsStack = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, stack: event.target.value });
    };

    const handleChangeDescriptionList = (event: ChangeEvent<HTMLTextAreaElement>, description: descriptionList) => {
        debounceChangeExperienceDescrField({ ...description, description: event.target.value });
    };

    const handleRemoveLanguageField = (id: string) => {
        debounceRemoveLanguageField(id);
    };

    const handleRemoveExperienceField = (id: string) => {
        debounceRemoveExperienceDescrField(id);
    };

    const handleAddExperienceField = () => {
        debounceAddExperienceDescrField();
    };

    const handleRemoveExperienceProjectField = (id: string) => {
        debounceRemoveExperienceProjectField(id);
    };

    const handleAddExperienceProjectField = () => {
        debounceAddExperienceProjectField();
    };

    const handleAddEducationField = () => {
        debounceAddEducationField();
    };

    return {
        handleChangeImg,
        handleChangeName,
        handleChangePosition,
        handleChangeOverview,
        handleChangeLanguageField,
        handleRemoveLanguageField,
        handleChangeExperienceDate,
        handleChangeExperiencePosition,
        handleChangeExperienceLocation,
        handleChangeDescriptionList,
        handleRemoveExperienceField,
        handleAddExperienceField,
        handleChangeProjectsName,
        handleChangeProjectsCustomer,
        handleChangeProjectsDuration,
        handleChangeProjectsRole,
        handleChangeProjectsResponsibilities,
        handleChangeProjectsTeamSize,
        handleChangeProjectsStack,
        handleRemoveExperienceProjectField,
        handleAddExperienceProjectField,
        handleAddEducationField,
        infoFields,
        experienceFieldRedux,
        languageFields,
        educationFields,
    };
};
