// Core
import React, { FC } from 'react';

// Bus
import { useEducationField } from '../../../../bus/client/educationFields';

// Elements
import { AppDebounceInput, AppDebounceTextarea, Title, AddBtn, RemoveBtn } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorEducation: FC = () => {
    const {
        educationFields, addEducationField,
        handleChangeEducationDateField, handleChangeEducationDegreeField,
        handleChangeEducationDescriptionField, removeEducationField,
    } = useEducationField();

    return (
        <S.Container>
            <S.Box>
                <Title text = 'Education' />
                <AddBtn handleAddFunc = { addEducationField } />
            </S.Box>
            <S.List>
                {educationFields.map((education) => {
                    const {
                        date, degree,
                        description, id,
                    } = education;

                    return (
                        <S.Item key = { id }>
                            <S.Wrapper>
                                <S.Date>
                                    <AppDebounceInput
                                        handleChangeFunc = { (event) => {
                                            handleChangeEducationDateField({ id, text: event.target.value });
                                        }  }
                                        placeholder = '2007 - 2013'
                                        value = { date }
                                    />
                                </S.Date>
                                <S.Degree>
                                    <AppDebounceInput
                                        handleChangeFunc = { (event) => {
                                            handleChangeEducationDegreeField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Degree name / University Location'
                                        value = { degree }
                                    />
                                </S.Degree>
                                <S.Description>
                                    <AppDebounceTextarea
                                        handleChangeFunc = { (event) => {
                                            handleChangeEducationDescriptionField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Tell about your degree'
                                        value = { description }
                                    />
                                </S.Description>
                            </S.Wrapper>
                            <RemoveBtn handleRemoveFunc = { () => removeEducationField(id) }/>
                        </S.Item>
                    );
                })}
            </S.List>
        </S.Container>
    );
};
