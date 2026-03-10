import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

const scale = (size: number) => (width / guidelineBaseWidth) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor;
const moderateVerticalScale = (size: number, factor = 0.5) =>
    size + (verticalScale(size) - size) * factor;

export { scale, verticalScale, moderateScale, moderateVerticalScale };
