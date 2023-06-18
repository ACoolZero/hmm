import {CommonActions, NavigationContainerRef, StackActions} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: object, key?: string) {
  if (key) {
    navigationRef.current?.dispatch(CommonActions.navigate({key, name, params}));
    return;
  }
  navigationRef.current?.dispatch(CommonActions.navigate({name, params}));
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function push(name: string, params?: object) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function replace(name: string, params?: object) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(count?: number) {
  navigationRef.current?.dispatch(StackActions.pop(count));
}

export function reset(index: number, name: string, params?: object) {
  navigationRef.current?.dispatch(CommonActions.reset({index, routes: [{name, params}]}));
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute()?.name;
}

export default {
  navigate,
  push,
  replace,
  pop,
  popToTop,
  reset,
  getCurrentRoute,
  navigationRef,
};
