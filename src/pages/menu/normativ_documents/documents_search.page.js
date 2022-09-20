import React from 'react';
import moment from "moment";
import MyLink from '../../../components/link/link.component';

const DocumentsSearchPage = () => {

    const [error, setError] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);

    const [searchTitle, setSearchTitle] = React.useState('');
    const [searchDateFrom, setSearchDateFrom] = React.useState('');
    const [searchDateTo, setSearchDateTo] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    const handleTitleChange = event => {
        setSearchTitle(event.target.value);
    };

    const handleDateFromChange = event => {
        setSearchDateFrom(event.target.value === "" ? "" : moment(event.target.value, 'YYYY-MM-DD'));
    };

    const handleDateToChange = event => {
        setSearchDateTo(event.target.value === "" ? "" : moment(event.target.value, 'YYYY-MM-DD'));
    };

    React.useEffect(() => {

        setItems([
            {
                id: 1,
                title: "Об образовании в Российской Федерации",
                date: moment("26.12.2012", 'DD.MM.YYYY'),
                href: "/files/normativ_documents/Об образовании в Российской Федерации.pdf"
            },
            {
                id: 2,
                title: "План нацпроекта Образование",
                date: moment("25.02.2022", 'DD.MM.YYYY'),
                href: "/files/normativ_documents/План нацпроекта Образование.pdf"
            },
            {
                id: 3,
                title: "Постановление Правительства Москвы от 27 сентября 2011 г. № 447-ПП «Об утверждении Положения о Департаменте образования и науки города Москвы» (с изменениями на 07.09.2021)»",
                date: moment("27.09.2011", 'DD.MM.YYYY'),
                href: "/files/normativ_documents/Постановление Правительства Москвы от 27 сентября 2011 г. № 447-ПП «Об утверждении Положения о Департаменте образования и науки города Москвы» (с изменениями на 07.09.2021)».pdf"
            },
            {
                id: 4,
                title: "Приказ Департамента образования и науки города Москвы от 26 июля 2022 г. № 625 «О Регламенте Департамента образования и науки города Москвы»",
                date: moment("26.07.2022", 'DD.MM.YYYY'),
                href: "/files/normativ_documents/Приказ Департамента образования и науки города Москвы от 26 июля 2022 г. № 625 «О Регламенте Департамента образования и науки города Москвы».pdf"
            },
        ]);
        setError(false);
        setIsLoaded(true);

    }, []);

    React.useEffect(() => {

        const results = items.filter(item => {

            let tmpTitle = false;
            let tmpDateFrom = false;
            let tmpDateTo = false;

            if (searchDateFrom === "" || item.date.isSameOrAfter(searchDateFrom))
                tmpDateFrom = true;

            if (searchDateTo === "" || item.date.isSameOrBefore(searchDateTo))
                tmpDateTo = true;

            if (searchTitle === "" || item.title.toLowerCase().includes(searchTitle.toLowerCase()))
                tmpTitle = true;

            if (tmpTitle && tmpDateFrom && tmpDateTo)
                return item;

            return false;

        });
        setSearchResults(results);

    }, [items, searchTitle, searchDateFrom, searchDateTo]);

    if (error)
        return <div className="content__block">Ошибка загрузки документов.</div>;
    else if (!isLoaded)
        return <div className="content__block">Загрузка...</div>;
    else
        return (
            <div className="content__block">
                <h2 className='content__title'>Поиск в нормативных документах</h2>
                <div className="search">
                    <div className="search__field field">
                        <p className='field__label'>Название документа</p>
                        <input
                            className="field__input" type="text" autoComplete="off"
                            placeholder="Введите название документа"
                            value={searchTitle}
                            onChange={handleTitleChange}
                        />
                        <span className="field__icon --type-error mdi mdi-alert-circle"/>
                    </div>
                    <div className="search__field field">
                        <p className='field__label'>Дата публикации от</p>
                        <input
                            className="field__input" type="date" autoComplete="off"
                            onChange={handleDateFromChange}
                        />
                        <span className="field__icon --type-error mdi mdi-alert-circle"/>
                    </div>
                    <div className="search__field field">
                        <p className='field__label'>Дата публикации до</p>
                        <input
                            className="field__input" type="date" autoComplete="off"
                            onChange={handleDateToChange}
                        />
                        <span className="field__icon --type-error mdi mdi-alert-circle"/>
                    </div>
                </div>
                <div className="table --theme-list --place-normative-docs">
                    <div className="table__wrap">
                        <table>
                            <thead>
                            <tr>
                                <th>Название документа</th>
                                <th>
                                    <p className='sort-button'>
                                        Дата публикации <span className='mdi mdi-chevron-down'
                                                              aria-label='Сортировка по дате'/>
                                    </p>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {searchResults.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <MyLink text={item.title}
                                                href={item.href}/>
                                    </td>
                                    <td>
                                        {item.date.format('DD.MM.YYYY')}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )

};

export default DocumentsSearchPage;