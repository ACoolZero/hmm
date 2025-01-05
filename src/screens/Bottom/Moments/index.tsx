import {Block} from '@components';
import React, {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Newsfeed} from './components';
import useMoments from './useMoments';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect


const Moments = () => {

  const {top} = useSafeAreaInsets();
  const {fetchData} = useMoments();

  const [lastFetchTime, setLastFetchTime] = useState(0); // State to track the last fetch time
  const refreshInterval = 30000; // Set refresh interval (30 seconds)

  useEffect(() => {
    // Users are allowed to view anonymously
      fetchData();
  }, [fetchData]);

  useFocusEffect(
    React.useCallback(() => {
      const currentTime = Date.now();

      // Check if the last fetch was more than the refresh interval ago
      if (currentTime - lastFetchTime > refreshInterval) {
        fetchData(); // Fetch data if the interval has passed
        setLastFetchTime(currentTime); // Update the last fetch time
      }

      // Optional cleanup function
      return () => {};
    }, [fetchData, lastFetchTime]) // Add fetchData to the dependency array
  );

  return (
    <Block flex safeBottom paddingTop={top + 12} backgroundColor="secondary_background">
      <Newsfeed />
    </Block>
  );
};

export default Moments;
