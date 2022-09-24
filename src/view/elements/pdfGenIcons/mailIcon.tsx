// Core
import React from 'react';
import { Path, Svg } from '@react-pdf/renderer';

// Types
type propsType = {
    color: string
}
export const MailIcon = ({ color }: propsType) => {
    return (
        <Svg
            height = '12px'
            viewBox = '0 0 24 24'
            width = '12px'>
            <Path
                d = 'M 20.035156 20.875 L 3.941406 20.875 C 1.839844 20.875 0.132812 19.167969 0.132812 17.066406 L 0.132812 6.90625 C 0.132812 4.808594 1.839844 3.097656 3.941406 3.097656 L 20.035156 3.097656 C 22.132812 3.097656 23.839844 4.808594 23.839844 6.90625 L 23.839844 17.066406 C 23.839844 19.167969 22.132812 20.875 20.035156 20.875 Z M 3.941406 4.210938 C 2.453125 4.210938 1.246094 5.421875 1.246094 6.90625 L 1.246094 17.066406 C 1.246094 18.550781 2.453125 19.761719 3.941406 19.761719 L 20.035156 19.761719 C 21.519531 19.761719 22.726562 18.550781 22.726562 17.066406 L 22.726562 6.90625 C 22.726562 5.421875 21.519531 4.210938 20.035156 4.210938 Z M 3.941406 4.210938 '
                fill = { color }
            />
            <Path
                d = 'M 3.042969 6.960938 C 5.886719 9.734375 8.734375 12.507812 11.578125 15.28125 C 12.109375 15.796875 12.925781 14.984375 12.394531 14.464844 C 9.546875 11.691406 6.699219 8.917969 3.855469 6.144531 C 3.324219 5.628906 2.511719 6.441406 3.042969 6.960938 Z M 3.042969 6.960938 '
                fill = { color }
            />
            <Path
                d = 'M 12.394531 15.28125 C 15.238281 12.507812 18.085938 9.734375 20.933594 6.960938 C 21.464844 6.441406 20.648438 5.628906 20.117188 6.144531 C 17.273438 8.917969 14.425781 11.691406 11.578125 14.464844 C 11.046875 14.984375 11.863281 15.796875 12.394531 15.28125 Z M 12.394531 15.28125 '
                fill = { color }
            />
            <Path
                d = 'M 20.902344 17.242188 C 19.007812 15.445312 17.113281 13.652344 15.21875 11.855469 C 14.679688 11.34375 13.867188 12.15625 14.40625 12.667969 C 16.300781 14.464844 18.191406 16.261719 20.085938 18.054688 C 20.625 18.566406 21.4375 17.753906 20.902344 17.242188 Z M 20.902344 17.242188 '
                fill = { color }
            />
            <Path
                d = 'M 3.9375 18.054688 C 5.832031 16.261719 7.726562 14.464844 9.621094 12.667969 C 10.15625 12.15625 9.34375 11.34375 8.804688 11.855469 C 6.910156 13.652344 5.019531 15.445312 3.125 17.242188 C 2.585938 17.753906 3.398438 18.566406 3.9375 18.054688 Z M 3.9375 18.054688 '
                fill = { color }
            />
        </Svg>
    );
};
