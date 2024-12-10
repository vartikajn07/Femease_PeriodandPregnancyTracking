import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  useWindowDimensions,
  PanResponder,
} from 'react-native';
import {COLORS} from '../../constants/themes';

interface BottomDrawerProps {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const BottomDrawer = ({children, isVisible, onClose}: BottomDrawerProps) => {
  const animatedTranslateYRef = useRef(new Animated.Value(0)).current;
  const windowDimensions = useWindowDimensions();
  const contentRef = useRef<View>(null);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    if (isVisible) {
      const maxHeight = windowDimensions.height * 0.6;
      const adjustedHeight = Math.min(contentHeight, maxHeight);
      Animated.timing(animatedTranslateYRef, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedTranslateYRef, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [
    isVisible,
    animatedTranslateYRef,
    contentHeight,
    windowDimensions.height,
  ]);

  const handleOverlayPress = () => {
    if (isVisible) {
      onClose();
    }
  };

  const handleContentLayout = (event: any) => {
    setContentHeight(event.nativeEvent.layout.height);
  };

  const translateY = animatedTranslateYRef.interpolate({
    inputRange: [0, 1],
    outputRange: [contentHeight + 15, 0],
  });

  // PanResponder instance for dragging gesture
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newTranslateY = Math.max(0, gestureState.dy);
        animatedTranslateYRef.setValue(newTranslateY);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > contentHeight / 5) {
          onClose();
        } else {
          Animated.spring(animatedTranslateYRef, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <>
      {isVisible && (
        <TouchableWithoutFeedback onPress={handleOverlayPress}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      <Animated.View style={[styles.container, {transform: [{translateY}]}]}>
        <View style={styles.dragHandle} />
        <View
          ref={contentRef}
          style={styles.content}
          onLayout={handleContentLayout}>
          {children}
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Transparent black overlay
  },
  dragHandle: {
    alignSelf: 'center',
    marginTop: 8,
    width: 40,
    height: 4,
    backgroundColor: COLORS.gray,
    borderRadius: 2,
  },
  content: {
    padding: 16,
  },
  closeButton: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    paddingVertical: 12,
  },
  closeButtonText: {
    fontWeight: 'bold',
  },
});

export default BottomDrawer;
