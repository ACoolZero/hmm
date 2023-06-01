import dayjs from 'dayjs';

export const getCurrentDate = () => dayjs(new Date()).format('YYYY-MM-DD');

/**
 * @description Simple delay using setTimeout
 * @param ms = miliseconds
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
