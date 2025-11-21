// import { StyleSheet, Text, View, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";


// function HomeScreen() {
//     const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <Text style={styles.title}>Hello World</Text>
//         <Text style={styles.subtitle}>This is the first page of your app.</Text>
//         <Button
//           title="Go to Jane's profile"
//           onPress={() =>
//             navigation.navigate('Profile', { name: 'Jane' })
//           }
//         />
//       </View>
//     </View>
//   );
// }

// interface ProfileScreenProps {
//   route: {
//     params: {
//       name: string;
//     };
//   };
// }


// function ProfileScreen({route}: ProfileScreenProps ) {
//   return <Text>This is {route.params.name}'s profile</Text>;
// }


// export default {
//   ProfileScreen,
//   HomeScreen
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
