// Core
import React from 'react';
import { Path, Svg } from '@react-pdf/renderer';

// Types
type propsType = {
    color: string
}
export const LinkedinIcon = ({ color }: propsType) => {
    return (
        <Svg
            style = {{ width: 12, height: 12 }}
            viewBox = '0 0 24 24'>
            <Path
                d = 'M 0.523438 8.011719 L 5.4375 8.011719 L 5.4375 23.820312 L 0.523438 23.820312 Z M 2.980469 0.152344 C 4.550781 0.152344 5.828125 1.429688 5.828125 3.003906 C 5.828125 4.574219 4.550781 5.851562 2.980469 5.851562 C 1.40625 5.851562 0.132812 4.574219 0.132812 3.003906 C 0.132812 1.429688 1.40625 0.152344 2.980469 0.152344 '
                fill = { color }
            />
            <Path
                d = 'M 8.519531 8.011719 L 13.230469 8.011719 L 13.230469 10.171875 L 13.296875 10.171875 C 13.953125 8.929688 15.558594 7.621094 17.949219 7.621094 C 22.921875 7.621094 23.839844 10.894531 23.839844 15.148438 L 23.839844 23.820312 L 18.929688 23.820312 L 18.929688 16.132812 C 18.929688 14.296875 18.898438 11.941406 16.375 11.941406 C 13.820312 11.941406 13.429688 13.9375 13.429688 16 L 13.429688 23.820312 L 8.519531 23.820312 Z M 8.519531 8.011719 '
                fill = { color }
            />
        </Svg>
    );
};
