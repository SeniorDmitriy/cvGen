// Core
import React, { ChangeEvent, FC } from 'react';

// Elements
import { AppInput, AppTextarea } from '../../elements';
// Styles
import * as S from './styles';

// Types
export type voidFunc = (event: ChangeEvent<HTMLInputElement>) => void;

type PropTypes = {
    name: string;
    position: string;
    overview: string;
    handleChangeName: voidFunc;
    handleChangePosition: voidFunc;
    handleChangeOverview: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Info: FC<PropTypes> = ({
    position, overview, name,
    handleChangeName,
    handleChangePosition, handleChangeOverview,
}) => {
    return (
        <S.Container>
            <S.InputNameBox>
                <AppInput
                    defaultValue = { name }
                    handleChangeFunc = { handleChangeName }
                    placeholder = 'Name'
                />
            </S.InputNameBox>
            <S.InputPositionBox>
                <AppInput
                    defaultValue = { position }
                    handleChangeFunc = { handleChangePosition }
                    placeholder = 'Position'
                />
            </S.InputPositionBox>
            <S.InputOverviewBox>
                <AppTextarea
                    defaultValue = { overview }
                    handleChangeFunc = { handleChangeOverview }
                    placeholder = 'Overview'
                />
            </S.InputOverviewBox>
        </S.Container>
    );
};
