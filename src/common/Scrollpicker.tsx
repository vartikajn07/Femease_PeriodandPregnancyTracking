import ScrollPicker from 'react-native-wheel-scrollview-picker';

interface ScrollPickerProps {
  dataSource: string[];
  selectedIndex: number;
  onValueChange: (value: string | undefined, index: number) => void;
  itemHeight: number;
  highlightColor: string;
  highlightBorderWidth?: number;
  renderItem: (data: string, index: number, isSelected: boolean) => JSX.Element;
}

const Scrollpicker: React.FC<ScrollPickerProps> = ({
  dataSource,
  selectedIndex,
  onValueChange,
  itemHeight,
  highlightColor,
  highlightBorderWidth,
  renderItem,
}) => {
  const wrapperHeight = 200;
  const wrapperBackground = '#FFFFFF';
  return (
    <>
      <ScrollPicker
        dataSource={dataSource}
        selectedIndex={selectedIndex}
        renderItem={renderItem}
        onValueChange={onValueChange}
        wrapperHeight={wrapperHeight}
        wrapperBackground={wrapperBackground}
        itemHeight={itemHeight}
        highlightColor={highlightColor}
        highlightBorderWidth={highlightBorderWidth}
      />
    </>
  );
};

export default Scrollpicker;
