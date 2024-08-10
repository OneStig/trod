import { Text, View } from "react-native";
import GLView from '../components/GLView';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>placeholder</Text>
      <GLView />
    </View>
  );
}
