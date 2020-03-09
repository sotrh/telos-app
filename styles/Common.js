import {StyleSheet} from 'react-native';

export const highlightColor = 'orange';

export default { ...StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    list: {
        width: '100%',
    },

    listItem: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
    },

    statusBar: {
        backgroundColor: 'orange',
    },

    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
    },

    text: {
        marginBottom: 10
    }
})};