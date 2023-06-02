import {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';

const useDeviceInfo = () => {
  const bundleID = DeviceInfo.getBundleId();
  const version = DeviceInfo.getVersion();
  const buildNumber = DeviceInfo.getBuildNumber();
  const brandName = DeviceInfo.getBrand();
  const uid = DeviceInfo.getUniqueId();
  const model = `${DeviceInfo.getModel()} (${DeviceInfo.getDeviceId()})`;
  const softVersion = `${DeviceInfo.getSystemName()} ${DeviceInfo.getSystemVersion()}`;
  const [isCharging, setIsCharging] = useState<boolean>();
  const [batteryLevel, setBatteryLevel] = useState<number>();
  const [deviceName, setDeviceName] = useState<string>();
  const [manufacturer, setManufacturer] = useState<string>();
  const [installerPackageName, setInstallerPackageName] = useState<string>();

  useEffect(() => {
    /**
     * @description Tells if the battery is currently charging.
     */
    DeviceInfo.isBatteryCharging().then(charging => {
      setIsCharging(charging);
    });

    /**
     * @description Gets the battery level of the device as a float comprised between 0 and 1.
     */
    DeviceInfo.getBatteryLevel().then(battery => {
      setBatteryLevel(battery);
    });

    /**
     * @description Gets the device name.
     */
    DeviceInfo.getDeviceName().then(value => {
      setDeviceName(value);
    });

    /**
     * @description Gets the device manufacturer.
     */
    DeviceInfo.getManufacturer().then(value => {
      setManufacturer(value);
    });

    /**
     * @description The internal value used by the underlying source control to represent this build.
     */
    DeviceInfo.getInstallerPackageName().then(value => {
      setInstallerPackageName(value);
    });
  }, []);

  return {
    bundleID,
    version,
    buildNumber,
    brandName,
    uid,
    model,
    softVersion,
    isCharging,
    batteryLevel,
    deviceName,
    manufacturer,
    installerPackageName,
  };
};

export default useDeviceInfo;
