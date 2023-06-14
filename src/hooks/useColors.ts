import {useStore} from '@hooks';
import {COLORS as AppColors} from '@theme';

const useColors = () => {
  const {useSelector} = useStore();
  const {mode} = useSelector('theme');

  const COLORS = AppColors[mode as keyof typeof AppColors];

  return {COLORS};
};

export default useColors;
