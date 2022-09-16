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

import ProfessionalOrientationPage from "../pages/child_success/professional_orientation.page";
import CivilActivityPage from "../pages/child_success/civil_activity.page";
import SportPage from "../pages/child_success/sport.page";
import CreativityPage from "../pages/child_success/creativity.page";
import ProjectActivityPage from "../pages/child_success/project_activity.page";
import EducationPage from "../pages/child_success/education.page";

import FederalLawPage from "../pages/normativ_documents/federal_law.page";
import FederalConceptionStrategyPage from "../pages/normativ_documents/federal_conception_strategy.page";
import OrderDonmPage from "../pages/normativ_documents/order_donm.page";
import DocumentsSearchPage from "../pages/normativ_documents/documents_search.page";
import DocumentsUsefulResourcesPage from "../pages/normativ_documents/documents_useful_resources.page";

import HelpPage from "../pages/hard_situation/help.page";
import IdentificationResponsePage from "../pages/hard_situation/identification_response.page";
import BullyingPage from "../pages/hard_situation/bullying.page";
import SuicidalBehaviorPage from "../pages/hard_situation/suicidal_behavior.page";
import DifficultChildPage from "../pages/hard_situation/difficult_child.page";
import SchoolShootingPage from "../pages/hard_situation/school_shooting.page";
import SituationUsefulResourcesPage from "../pages/hard_situation/situation_useful_resources.page";

import InjuryPreventionPage from "../pages/safe_environment/injury_prevention.page";
import RoadSafetyPage from "../pages/safe_environment/road_safety.page";
import SecurityLaboratoryPage from "../pages/safe_environment/security_laboratory.page";
import SafeSummerPage from "../pages/safe_environment/safe_summer.page";
import SafeSchoolPage from "../pages/safe_environment/safe_school.page";
import RegulationsPage from "../pages/safe_environment/regulations.page";
import BriefingsPage from "../pages/safe_environment/briefings.page";
import EmergencyServicesPage from "../pages/safe_environment/emergency_services.page";

import MyClassPage from "../pages/lk/my_class.page";
import RecommendationsPage from "../pages/lk/recommendations.page";
import SubmitApplicationPage from "../pages/lk/submit_application.page";
import LkDocumentsPage from "../pages/lk/lk_documents.page";
import ProfessionalCommunitiesPage from "../pages/lk/professional_communities.page";
import LkTeacherOnlinePage from "../pages/lk/lk_teacher_online.page";
import LkResourcesPage from "../pages/lk/lk_resources.page";

import TeacherOnlinePage from "../pages/teacher_online.page";
import SpecialChildPage from "../pages/special_child.page";
import AdditionalEducationPage from "../pages/additional_education.page";
import ContactsPage from "../pages/contacts.page";

const RoutesList = () => {

    return (
        <section className="content__section">
            <Routes>
                {/* СОБЫТИЯ И МЕРОПРИЯТИЯ */}
                <Route path='/' element={<CalendarPage/>}/>
                <Route path='/federal_project' element={<FederalProjectPage/>}/>
                <Route path='/online_project' element={<OnlineProjectPage/>}/>
                <Route path='/weekend_hike' element={<WeekendHikePage/>}/>
                <Route path='/team_strength' element={<TeamStrengthPage/>}/>
                <Route path='/sports_testing_of_children' element={<SportsTestingOfChildrenPage/>}/>
                <Route path='/sports_holidays' element={<SportsHolidaysPage/>}/>
                <Route path='/sports_saturdays' element={<SportsSaturdaysPage/>}/>
                <Route path='/i_walking_moscow' element={<IWalkingMoscowPage/>}/>

                {/* ТРАЕКТОРИЯ УСПЕХА РЕБЕНКА */}
                <Route path='/professional_orientation' element={<ProfessionalOrientationPage/>}/>
                <Route path='/civil_activity' element={<CivilActivityPage/>}/>
                <Route path='/sport' element={<SportPage/>}/>
                <Route path='/creativity' element={<CreativityPage/>}/>
                <Route path='/project_activity' element={<ProjectActivityPage/>}/>
                <Route path='/education' element={<EducationPage/>}/>

                {/* НОРМАТИВНЫЕ ДОКУМЕНТЫ */}
                <Route path='/federal_law' element={<FederalLawPage/>}/>
                <Route path='/federal_conception_strategy' element={<FederalConceptionStrategyPage/>}/>
                <Route path='/order_donm' element={<OrderDonmPage/>}/>
                <Route path='/documents_search' element={<DocumentsSearchPage/>}/>
                <Route path='/documents_useful_resources' element={<DocumentsUsefulResourcesPage/>}/>

                {/* СЛОЖНЫЕ СИТУАЦИИ */}
                <Route path='/help' element={<HelpPage/>}/>
                <Route path='/identification_response' element={<IdentificationResponsePage/>}/>
                <Route path='/bullying' element={<BullyingPage/>}/>
                <Route path='/suicidal_behavior' element={<SuicidalBehaviorPage/>}/>
                <Route path='/difficult_child' element={<DifficultChildPage/>}/>
                <Route path='/school_shooting' element={<SchoolShootingPage/>}/>
                <Route path='/situation_useful_resources' element={<SituationUsefulResourcesPage/>}/>

                {/* БЕЗОПАСНАЯ СРЕДА */}
                <Route path='/injury_prevention' element={<InjuryPreventionPage/>}/>
                <Route path='/road_safety' element={<RoadSafetyPage/>}/>
                <Route path='/security_laboratory' element={<SecurityLaboratoryPage/>}/>
                <Route path='/safe_summer' element={<SafeSummerPage/>}/>
                <Route path='/safe_school' element={<SafeSchoolPage/>}/>
                <Route path='/regulations' element={<RegulationsPage/>}/>
                <Route path='/briefings' element={<BriefingsPage/>}/>
                <Route path='/emergency_services' element={<EmergencyServicesPage/>}/>

                {/* КЛАССНЫЙ РУКОВОДИТЕЛЬ ОНЛАЙН */}
                <Route path='/teacher_online' element={<TeacherOnlinePage/>}/>

                {/* ОСОБЕННЫЙ РЕБЕНОК */}
                <Route path='/special_child' element={<SpecialChildPage/>}/>

                {/* ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ */}
                <Route path='/additional_education' element={<AdditionalEducationPage/>}/>

                {/* ЛИЧНЫЙ КАБИНЕТ */}
                <Route path='/my_class' element={<MyClassPage/>}/>
                <Route path='/recommendations' element={<RecommendationsPage/>}/>
                <Route path='/submit_application' element={<SubmitApplicationPage/>}/>
                <Route path='/lk_documents' element={<LkDocumentsPage/>}/>
                <Route path='/professional_communities' element={<ProfessionalCommunitiesPage/>}/>
                <Route path='/lk_teacher_online' element={<LkTeacherOnlinePage/>}/>
                <Route path='/lk_resources' element={<LkResourcesPage/>}/>

                {/* КОНТАКТЫ */}
                <Route path='/contacts' element={<ContactsPage/>}/>
            </Routes>
        </section>
    );
};

export default RoutesList;