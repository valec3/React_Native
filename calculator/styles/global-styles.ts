import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 60,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    secondaryResult: {
        color: Colors.textSecondary,
        fontSize: 30,
        textAlign: 'right',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    calculatorButton: {
        backgroundColor: '#2D2D2D',
        width: 80,
        height: 80,
        borderRadius: 100,
        lineHeight: 80,
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    calculatorButtonText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
});
