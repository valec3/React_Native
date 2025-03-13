import { Text, TextProps } from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global-styles';
interface Props extends TextProps {
    text: string;
    variant?: 'primary' | 'secondary';
    style?: object;
}
const stylesVariant = {
    primary: globalStyles.mainResult,
    secondary: globalStyles.secondaryResult,
};
const SimpleText = ({ style, text, variant, ...rest }: Props) => {
    return (
        <Text
            style={{
                fontFamily: 'SpaceMono',
                color: 'white',
                textAlign: 'right',
                fontSize: stylesVariant[variant ?? 'primary'].fontSize,
                ...style,
            }}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...rest}
        >
            {text}
        </Text>
    );
};

export default SimpleText;
