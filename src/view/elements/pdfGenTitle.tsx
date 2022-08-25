// Core
import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems:    'center',
        position:      'relative',
    },
    decoreElem: {
        position:        'absolute',
        left:            -30,
        top:             6,
        height:          15,
        width:           20,
        backgroundColor: '#4c576b',
    },
    title: {
        fontSize:     20,
        color:        '#4c576b',
        marginBottom: 10,
        fontWeight:   800,
    },
});

type PropTypes = {
    text: string
}

export const PdfGenTitle = ({ text }: PropTypes) => {
    return (
        <View style = { styles.box }>
            <View style = { styles.decoreElem }></View>
            <Text style = { styles.title }>
                {text}
            </Text>
        </View>
    );
};
