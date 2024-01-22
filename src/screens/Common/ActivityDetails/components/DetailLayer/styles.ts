import {getSize} from '@utils/responsive';

const styles = {
  closeButtonContainer: (top: any, secondary_background: any) => ({
    position: 'absolute',
    backgroundColor: `${secondary_background}66`,
    marginLeft: 15,
    padding: getSize.m(15),
    marginTop: top,
    borderRadius: getSize.m(8),
  }),
};

export default styles;
