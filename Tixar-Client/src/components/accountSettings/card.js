import { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ColorContext } from '../../../context';

export default Card = (props) => {
    const {colors} = useContext(ColorContext);
    return (
        <View style={[styles.cardContainer, {backgroundColor: colors.primary}]}>
            <View>
                {props.children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 14,
        padding: 5,
    }
})