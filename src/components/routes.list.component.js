import React from 'react';
import {Route, Routes} from "react-router-dom";

import CalendarPage from "../pages/events/calendar.page";
import FederalProjectPage from "../pages/events/federal_project.page";
import OnlineProjectPage from "../pages/events/online_project.page";
import WeekendHikePage from "../pages/events/weekend_hike.page";
import TeamStrengthPage from "../pages/events/team_strength.page";
import SportsTestingOfChildrenPage from "../pages/events/sports_testing_of_children.page";
import SportsHolidaysPage from "../pages/events/sports_holidays.page";
import SportsSaturdaysPage from "../pages/events/sports_saturdays.page";
import IWalkingMoscowPage from "../pages/events/i_walking_moscow.page";

const RoutesList = () => {

    return (
        <section className="content__section">
            <Routes>
                <Route path='/' element={<CalendarPage/>}/>
                <Route path='/federal_project' element={<FederalProjectPage/>}/>
                <Route path='/online_project' element={<OnlineProjectPage/>}/>
                <Route path='/weekend_hike' element={<WeekendHikePage/>}/>
                <Route path='/team_strength' element={<TeamStrengthPage/>}/>
                <Route path='/sports_testing_of_children' element={<SportsTestingOfChildrenPage/>}/>
                <Route path='/sports_holidays' element={<SportsHolidaysPage/>}/>
                <Route path='/sports_saturdays' element={<SportsSaturdaysPage/>}/>
                <Route path='/i_walking_moscow' element={<IWalkingMoscowPage/>}/>
            </Routes>
        </section>
    );
};

export default RoutesList;