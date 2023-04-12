import React from 'react';
import { View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import TutorialItem from '../../components/TutorialItem/TutorialItem';
import styles from './styles';
import { verticalScale } from '../../utils/scaling';

const cardData = [
    {
        title: 'Tasty',
        subtitle: 'BreakFast',
        description: 'Breakfast is everything. The beginning, the first thing. It is the mouthful that is the commitment to a new day, a continuing life.',
        page: '0',
        bcolor: '#FFF7BE',
    },
    {
        title: 'Refreshing',
        subtitle: 'Drinks',
        description: 'True silence is the rest of the mind, and is to the spirit what sleep is to the body, nourishment and refreshment.',
        page: '1',
        bcolor: '#C4F2FF',

    },
    {
        title: 'Delicous',
        subtitle: 'Icecream',
        description: 'Age does not diminish the extreme disappointment of having a scoop of ice cream fall from the cone',
        page: '2',
        bcolor: '#FEE0EC',
    },
];

class Tutorial extends React.Component {
    moveToLogin = () => {
        this.props.navigation.navigate('LoginOrReg');
    }

    render() {
        return (
            <View style={styles.container}>
                <SwiperFlatList
                    index={0}
                    showPagination
                    paginationDefaultColor="#bbbbbb"
                    paginationActiveColor="#797979"
                    paginationStyle={{ marginBottom: '5%' }}
                    paginationStyleItem={{ height: verticalScale(15), width: verticalScale(15), marginLeft: 0 }}
                >
                    {
                        cardData.map((data, ind) => (
                            <TutorialItem
                                key={ind}
                                on_press_event={this.moveToLogin}
                                heading_1={data.title}
                                heading_2={data.subtitle}
                                description={data.description}
                                page={data.page}
                                bcolor={data.bcolor}
                            />
                        ))
                    }
                </SwiperFlatList>
            </View>
        );
    }
}

export default Tutorial;
