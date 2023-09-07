import { BlurView } from "expo-blur";
import { View, StyleSheet } from "react-native";

export default BlurBlock = () => {
    return (
        <View style={styles.blurContainer}>
            <BlurView intensity={80} style={styles.blur} />
        </View>
    );
}

const styles = StyleSheet.create({
    blurContainer: {
        height: '79%',
        width: '85%',
        position: 'absolute',
        top: 165,
        borderRadius: 15,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
    },
    blur: {
        height: '100%',
        width: '100%',
    }
});