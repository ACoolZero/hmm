import {getSize} from '@utils/responsive';

const styles = {
  closeButtonContainer: (top: number) => ({
    position: 'absolute',
    backgroundColor: '#00000090',
    marginLeft: getSize.m(16),
    padding: getSize.m(12),
    borderRadius: getSize.m(6),
    marginTop: top,
  }),
};

export default styles;
