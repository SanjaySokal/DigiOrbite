import React from 'react';
import HomeAbout from './Parts/HomeAbout';
import HomeAwesome from './Parts/HomeAwesome';
import HomeBanner from './Parts/HomeBanner';
import HomeFaq from './Parts/HomeFaq';
import HomeFaqIcons from './Parts/HomeFaqIcons';
import HomeMembers from './Parts/HomeMembers';
import HomeServices from './Parts/HomeServices';
import HomeWorked from './Parts/HomeWorked';
import SubServices from './Parts/SubServices';

const HomePage = () => {
    return (
        <>
            <HomeBanner />
            <SubServices />
            <HomeMembers />
            <HomeServices />
            <HomeAbout />
            <HomeWorked />
            <HomeAwesome />
            <HomeFaq />
            <HomeFaqIcons />
        </>
    )
}

export default HomePage
