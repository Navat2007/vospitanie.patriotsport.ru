import React from 'react';
import {Route, Routes, Navigate } from "react-router-dom";
import {UserContext} from "../context";
import ScrollToTop from "./router.scroll.top.component";

import CalendarPage from "../pages/menu/events/calendar.page";
import FederalProjectPage from "../pages/menu/events/federal_project.page";
import OnlineProjectPage from "../pages/menu/events/online_project.page";
import WeekendHikePage from "../pages/menu/events/weekend_hike.page";
import TeamStrengthPage from "../pages/menu/events/team_strength.page";
import SportsTestingOfChildrenPage from "../pages/menu/events/sports_testing_of_children.page";
import SportsHolidaysPage from "../pages/menu/events/sports_holidays.page";
import SportsSaturdaysPage from "../pages/menu/events/sports_saturdays.page";
import IWalkingMoscowPage from "../pages/menu/events/i_walking_moscow.page";

import ProfessionalOrientationPage from "../pages/menu/child_success/professional_orientation.page";
import CityProjectsPage from "../pages/menu/child_success/professional_orientation/city_projects.page";
import FederalProjectsPage from "../pages/menu/child_success/professional_orientation/federal_projects.page";
import ChampionshipMasteryPage from "../pages/menu/child_success/professional_orientation/championship_mastery.page";
import CivilActivityPage from "../pages/menu/child_success/civil_activity.page";
import SportPage from "../pages/menu/child_success/sport.page";
import GtoPage from "../pages/menu/child_success/sport/gto.page";
import CybersportPage from "../pages/menu/child_success/sport/cybersport.page";
import CreativityPage from "../pages/menu/child_success/creativity.page";
import ProjectActivityPage from "../pages/menu/child_success/project_activity.page";
import EducationPage from "../pages/menu/child_success/education.page";

import FederalLawPage from "../pages/menu/normativ_documents/federal_law.page";
import FederalConceptionStrategyPage from "../pages/menu/normativ_documents/federal_conception_strategy.page";
import OrderDonmPage from "../pages/menu/normativ_documents/order_donm.page";
import DocumentsSearchPage from "../pages/menu/normativ_documents/documents_search.page";
import DocumentsUsefulResourcesPage from "../pages/menu/normativ_documents/documents_useful_resources.page";

import BullyingPage from "../pages/menu/hard_situation/bullying.page";
import DeviantBehaviorPage from "../pages/menu/hard_situation/deviant_behavior.page";
import SituationUsefulResourcesPage from "../pages/menu/hard_situation/situation_useful_resources.page";

import InjuryPreventionPage from "../pages/menu/safe_environment/injury_prevention.page";
import RoadSafetyPage from "../pages/menu/safe_environment/road_safety.page";
import SecurityLaboratoryPage from "../pages/menu/safe_environment/security_laboratory.page";
import SafeSummerPage from "../pages/menu/safe_environment/safe_summer.page";
import SafeSchoolPage from "../pages/menu/safe_environment/safe_school.page";
import RegulationsPage from "../pages/menu/safe_environment/regulations.page";
import BriefingsPage from "../pages/menu/safe_environment/briefings.page";
import EmergencyServicesPage from "../pages/menu/safe_environment/emergency_services.page";

import MyClassPage from "../pages/menu/lk/my_class.page";
import RecommendationsPage from "../pages/menu/lk/recommendations.page";
import SubmitApplicationPage from "../pages/menu/lk/submit_application.page";
import LkDocumentsPage from "../pages/menu/lk/lk_documents.page";
import ProfessionalCommunitiesPage from "../pages/menu/lk/professional_communities.page";
import LkTeacherOnlinePage from "../pages/menu/lk/lk_teacher_online.page";
import LkResourcesPage from "../pages/menu/lk/lk_resources.page";

import TeacherOnlinePage from "../pages/menu/teacher_online.page";
import SpecialChildPage from "../pages/menu/special_child.page";
import AdditionalEducationPage from "../pages/menu/additional_education.page";
import ContactsPage from "../pages/contacts.page";
import LoginPage from "../pages/login/login.page";
import Page404 from "../pages/404.page";
import Page from "./page/page.component";
import Menu from "./menu/menu.component";

const RoutesList = () => {

    const {user} = React.useContext(UserContext);

    const privateRoutes = [
        // ЛИЧНЫЙ КАБИНЕТ
        {path: '/my_class', element: MyClassPage, exact: true, title: "Мой класс"},
        {path: '/recommendations', element: RecommendationsPage, exact: true, title: "Рекомендации"},
        {path: '/submit_application', element: SubmitApplicationPage, exact: true, title: "Подать заявку"},
        {path: '/lk_documents', element: LkDocumentsPage, exact: true, title: "Документы"},
        {path: '/professional_communities', element: ProfessionalCommunitiesPage, exact: true, title: "Профессиональные сообщества"},
        {path: '/lk_teacher_online', element: LkTeacherOnlinePage, exact: true, title: "Классный руководитель онлайн"},
        {path: '/lk_resources', element: LkResourcesPage, exact: true, title: "Ресурсы"},
    ];

    const publicRoutes = [
        // СОБЫТИЯ И МЕРОПРИЯТИЯ
        {path: '/calendar', element: CalendarPage, exact: true, title: "Календарь"},
        {path: '/federal_project', element: FederalProjectPage, exact: true, title: "Федеральные проекты по воспитанию"},
        {path: '/online_project', element: OnlineProjectPage, exact: true, title: "Онлайн-проекты"},
        {path: '/weekend_hike', element: WeekendHikePage, exact: true, title: "Поход выходного дня «300 ПВД»"},
        {path: '/team_strength', element: TeamStrengthPage, exact: true, title: ""},
        {path: '/sports_testing_of_children', element: SportsTestingOfChildrenPage, exact: true, title: ""},
        {path: '/sports_holidays', element: SportsHolidaysPage, exact: true, title: ""},
        {path: '/sports_saturdays', element: SportsSaturdaysPage, exact: true, title: ""},
        {path: '/i_walking_moscow', element: IWalkingMoscowPage, exact: true, title: ""},
        // ТРАЕКТОРИЯ УСПЕХА РЕБЕНКА
        {path: '/professional_orientation', element: ProfessionalOrientationPage, exact: true, title: ""},
        {path: '/professional_orientation/city_projects', element: CityProjectsPage, exact: true, title: ""},
        {path: '/professional_orientation/federal_projects', element: FederalProjectsPage, exact: true, title: ""},
        {path: '/professional_orientation/championship_mastery', element: ChampionshipMasteryPage, exact: true, title: ""},
        {path: '/civil_activity', element: CivilActivityPage, exact: true, title: ""},
        {path: '/sport', element: SportPage, exact: true, title: ""},
        {path: '/sport/gto', element: GtoPage, exact: true, title: ""},
        {path: '/sport/cybersport', element: CybersportPage, exact: true, title: ""},
        {path: '/creativity', element: CreativityPage, exact: true, title: ""},
        {path: '/project_activity', element: ProjectActivityPage, exact: true, title: ""},
        {path: '/education', element: EducationPage, exact: true, title: ""},
        // НОРМАТИВНЫЕ ДОКУМЕНТЫ
        {path: '/federal_law', element: FederalLawPage, exact: true, title: ""},
        {path: '/federal_conception_strategy', element: FederalConceptionStrategyPage, exact: true, title: ""},
        {path: '/order_donm', element: OrderDonmPage, exact: true, title: ""},
        {path: '/documents_search', element: DocumentsSearchPage, exact: true, title: ""},
        {path: '/documents_useful_resources', element: DocumentsUsefulResourcesPage, exact: true, title: ""},
        // СЛОЖНЫЕ СИТУАЦИИ
        {path: '/bullying', element: BullyingPage, exact: true, title: ""},
        {path: '/deviant_behavior', element: DeviantBehaviorPage, exact: true, title: ""},
        {path: '/situation_useful_resources', element: SituationUsefulResourcesPage, exact: true, title: ""},
        // БЕЗОПАСНАЯ СРЕДА
        {path: '/injury_prevention', element: InjuryPreventionPage, exact: true, title: ""},
        {path: '/road_safety', element: RoadSafetyPage, exact: true, title: ""},
        {path: '/security_laboratory', element: SecurityLaboratoryPage, exact: true, title: ""},
        {path: '/safe_summer', element: SafeSummerPage, exact: true, title: ""},
        {path: '/safe_school', element: SafeSchoolPage, exact: true, title: ""},
        {path: '/regulations', element: RegulationsPage, exact: true, title: ""},
        {path: '/briefings', element: BriefingsPage, exact: true, title: ""},
        {path: '/emergency_services', element: EmergencyServicesPage, exact: true, title: ""},
        // КЛАССНЫЙ РУКОВОДИТЕЛЬ ОНЛАЙН
        {path: '/teacher_online', element: TeacherOnlinePage, exact: true, title: ""},
        // ОСОБЕННЫЙ РЕБЕНОК
        {path: '/special_child', element: SpecialChildPage, exact: true, title: ""},
        // ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ
        {path: '/additional_education', element: AdditionalEducationPage, exact: true, title: ""},
        // КОНТАКТЫ
        {path: '/contacts', element: ContactsPage, exact: true, title: ""},
        // ЛОГИН
        {path: '/login', element: LoginPage, exact: true, title: ""},
    ];

    return (
        <main className="content">
            <Menu opened/>
            <ScrollToTop>
                <Routes>
                    {
                        publicRoutes.map(route =>
                            <Route
                                path={route.path}
                                key={route.path}
                                exact={route.exact}
                                element={<route.element/>}
                            />
                        )
                    }
                    {
                        user ?
                            privateRoutes.map(route =>
                                <Route
                                    path={route.path}
                                    key={route.path}
                                    exact={route.exact}
                                    element={<route.element/>}
                                />
                            )
                            :
                            (<></>)
                    }
                    <Route path="/" exact={true} element={<Navigate to="/calendar" />} />
                    <Route path="*" element={<Page404/>} />
                </Routes>
            </ScrollToTop>
        </main>

    );
};

export default RoutesList;