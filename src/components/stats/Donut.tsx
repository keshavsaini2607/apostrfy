import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Circle, G, Svg} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface DonutProps {
  progress: number;
}

const Donut: React.FC<DonutProps> = ({progress}) => {
  const CIRCUMFERENCE = 200;
  const R = CIRCUMFERENCE / (2 * Math.PI);
  const STROKE_WIDTH = 10;
  const HALF_CIRCLE = R + STROKE_WIDTH;
  const DIAMETER = HALF_CIRCLE * 2;

  const progressValue = useSharedValue(0);

  useEffect(() => {
    if (!progress) {
      progressValue.value = withTiming(0, {duration: 1000});
    } else {
      progressValue.value = withTiming(progress, {duration: 1000});
    }
  }, [progress]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: CIRCUMFERENCE * (1 - progressValue.value),
    };
  }, [progressValue.value]);

  const animatedText = useDerivedValue(() => {
    return `${Math.floor(progressValue.value * 100)}%`;
  }, [progress]);

  return (
    <View style={styles.container}>
      <ReText text={animatedText} style={styles.text} />
      <Svg
        width={DIAMETER}
        height={DIAMETER}
        viewBox={`0 0 ${DIAMETER} ${DIAMETER}`}>
        <G origin={`${HALF_CIRCLE}, ${HALF_CIRCLE}`} rotation={'-90'}>
          {/* Outer Circle (Gray) */}
          <AnimatedCircle
            animatedProps={animatedProps}
            fill={'transparent'}
            stroke={'orange'}
            r={R}
            cx={'50%'}
            cy={'50%'}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
          />
          <Circle
            fill={'transparent'}
            stroke={'orange'}
            r={R}
            cx={'50%'}
            cy={'50%'}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeOpacity={0.3}
          />
          {/* Inner Circle (White) */}
          <Circle
            fill={'transparent'} // Set the fill color to white
            r={R - STROKE_WIDTH / 2} // Adjust the radius to make it appear as the inner circle
            cx={'50%'}
            cy={'50%'}
          />
        </G>
      </Svg>
    </View>
  );
};

export default Donut;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
});
