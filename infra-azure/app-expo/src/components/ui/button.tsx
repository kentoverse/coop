// components/ui/Button.tsx
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonMobileProps { 
  title: string;
  onPress: () => void;
  styles?: object;
  size?: 'small' | 'medium' | 'large';
}




export default function ButtonMobile({ title, onPress, styles, size }: ButtonMobileProps) {
  return (
   
    <TouchableOpacity style={styles} onPress={onPress}>
      <Text style={styles}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 12, backgroundColor: 'blue', borderRadius: 8 },
  text: { color: 'white', fontWeight: 'bold' },
});