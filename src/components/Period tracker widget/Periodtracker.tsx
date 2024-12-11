import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  addDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  format,
  subDays,
} from 'date-fns';
import PagerView from 'react-native-pager-view';
import {AppText} from '../../common/AppText';

const dates = eachWeekOfInterval(
  {
    //the range of your calendar
    start: subDays(new Date(), 30),
    end: addDays(new Date(), 60),
  },
  {
    weekStartsOn: 1,
  },
).reduce((acc: Date[][], cur) => {
  const allDays = eachDayOfInterval({
    start: cur,
    end: addDays(cur, 6),
  });
  acc.push(allDays);
  return acc;
}, []);

// console.log(dates); log to check the dates

const Periodtracker = () => {
  return (
    <>
      <AppText></AppText>
      <PagerView style={styles.container}>
        {dates.map((week, i) => {
          return (
            <View key={i}>
              <View style={styles.row}>
                {week.map(day => {
                  const txt = format(day, 'EEEEE');
                  return (
                    <View style={styles.day}>
                      <AppText>{txt}</AppText>
                      <AppText>{day.getDate()}</AppText>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </PagerView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'beige',
    maxHeight: 60,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  day: {
    alignItems: 'center',
  },
});

export default Periodtracker;

//   dates.map((week, i) => {
//     return (
//       <View key={i}>
//         <View style={styles.row}>
//           {week.map(day => {
//             const txt = format(day, 'EEEEE');
//             return (
//               <View style={styles.day}>
//                 <AppText>{txt}</AppText>
//                 <AppText>{day.getDate()}</AppText>
//               </View>
//             );
//           })}
//         </View>
//       </View>
//     );
//   });
// }
