import {Pressable, ScrollView, Text, View} from 'react-native';
import {COLORS, ICONS} from '../../assets';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
const QuranEnglish = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainTitleContainer}>
        <Pressable
          style={styles.backIconContainer}
          onPress={() => {
            navigation.goBack()
          }}>
          <ICONS.BackIcon />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Al-Fatihah</Text>
          <Text style={styles.romanName}>The Opening</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.maiEngQuranText}>
          <View style={styles.introContainer}>
            <Text style={styles.introHeading}>(Introduction)</Text>
          </View>
          <Text style={styles.engQuranText}>
            The opening surat of the Majestic Quran summarises the major themes
            and topics of the Quran: shaping a world view through the belief
            system; faith in Allah, His messengers and the Hereafter; the
            Angels; Predestination and the Day of Resurrection; challenging
            idolatry and materialism; practising the five pillars; emphasis on
            obeying the laws: halal and haram; an invitation to embrace
            spiritual ideals: mindfulness and alertness, reliance on Allah; the
            promotion of moral teachings; the condemnation of moral vices;
            social obligations; the life and beautiful character of the
            Messenger \u200e\u200e[PBUH] the history of human disobedience;
            Satan the arch enemy, how he misleads and his snares and traps;
            human diversity and pluralism; the awe-inspiring nature; vivid
            descriptions of Heaven and Hell. This is the essencekey to the
            Quran. It is read dozens of time daily in the prayers and is a plea,
            a prayer that the devout servant makes to the Caring Lord. The rest
            of the Quran is a response to this, and the blessed Messenger
            \u200e\u200e[PBUH] praised its virtue: “by Him in whose hand is my
            life, nothing like this was ever revealed in the Torah, or the
            Psalms or the Gospel” (Ahmed). A concise prayer that is life
            transforming, no wonder the Messenger \u200e\u200e[PBUH] described
            it as: (al-fatihah), the door to the treasury of wisdom; Umm
            al-Quran, the Fountain of Quranic wisdom; (al-shifa), the healing
            for moral, spiritual and social diseases
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default QuranEnglish;
