import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-neutral-900">
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-xl dark:text-white">Toggle Theme</Text>
        <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
      </View>
      <Text>
        lorem23
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
