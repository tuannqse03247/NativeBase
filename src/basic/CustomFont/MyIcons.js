import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const MyIcons = createIconSetFromIcoMoon(icoMoonConfig, 'MyIcons', 'MyIcons.ttf');
export { MyIcons }