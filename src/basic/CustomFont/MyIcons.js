import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const MyIcons = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'MyIcons.ttf');
export { MyIcons }