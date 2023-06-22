import {useStore} from '@hooks';
import {COLORS as AppColors} from '@theme';

const TEXT_COLORS_SCHEME = ['#FF575F', '#FF974A', '#FFC542', '#3DD598', '#0062FF', '#755FE2'];
const BACKGROUND_COLORS_SCHEME = ['#FFE5E7', '#FFEFE3', '#FEF3D9', '#D4F5E9', '#E3EEFF', '#EDEAFD'];

const useColors = () => {
  const {useSelector} = useStore();
  const {mode} = useSelector('theme');

  const COLORS = AppColors[mode as keyof typeof AppColors];

  const randomTextColor = () => {
    const colorIdx = Math.floor(Math.random() * 6);
    return TEXT_COLORS_SCHEME[colorIdx];
  };

  const randomBackgroundColor = () => {
    const colorIdx = Math.floor(Math.random() * 6);
    return BACKGROUND_COLORS_SCHEME[colorIdx];
  };

  return {COLORS, randomTextColor, randomBackgroundColor};
};

export default useColors;
