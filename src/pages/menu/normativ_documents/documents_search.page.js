import React from 'react';
import styled from "styled-components";
import MyLink from '../../../components/link/link.component';

const DocumentsSearchPage = () => {

    const Input = ({className, type, placeholder, children}) => (
        <input className={className} placeholder={placeholder} type={type}>
            {children}
        </input>
    );

    const StyledInput = styled(Input)`
        text-align: right;
        padding-right: 54px;
        
             
        :before {
            color: lightgrey;
            content: attr(placeholder) !important;
            margin-right: 0.5em;
        }
        :focus:before {
            content: '' !important;
        }
    `

    return (
        <div className="content__block">
            <h2 className='content__title'>Поиск нормативных документах</h2>
            <div className="search">
                <div className="search__field field">
                    <input
                        className="field__input" type="text" autoComplete="off" placeholder="Введите название документа"
                    />
                    <span className="field__icon --type-error mdi mdi-alert-circle"/>
                </div>
                <div className="search__field field">
                    <StyledInput className={"field__input"} type="date" placeholder="Дата публикации"/>
                    {/*<input*/}
                    {/*    className="field__input" type="date" autoComplete="off" placeholder="Дата публикации"*/}
                    {/*/>*/}
                    <span className="field__icon --type-error mdi mdi-alert-circle"/>
                </div>
                <div className="search__field field">
                    <input
                        className="field__input" type="date" autoComplete="off" placeholder="Дата публикации"
                    />
                    <span className="field__icon --type-error mdi mdi-alert-circle"/>
                </div>
                <button type='button' className="search__button button --theme-primary">Найти</button>
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
                        <tr>
                            <td>
                                <MyLink text={"Национальный проект «Образование»"}
                                        href={"https://voenpatriot-my.sharepoint.com/personal/kovalchukeg_cpvs_moscow/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fkovalchukeg_cpvs_moscow%2FDocuments%2FВкладка%20МЭШ%20-%20Сайт%20Организация%20воспитания%2FСодержание%20пунктов%2F%212%2E%20Пункт%20бокового%20меню%20Нормативные%20документы%2FФедеральные%20концепции%20и%20стратегии%2FПлан%20нацпроекта%20Образование%2Epdf&parent=%2Fpersonal%2Fkovalchukeg_cpvs_moscow%2FDocuments%2FВкладка%20МЭШ%20-%20Сайт%20Организация%20воспитания%2FСодержание%20пунктов%2F%212%2E%20Пункт%20бокового%20меню%20Нормативные%20документы%2FФедеральные%20концепции%20и%20стратегии"}/>
                            </td>
                            <td>
                                29.07.2022
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <MyLink
                                    href={"https://voenpatriot-my.sharepoint.com/personal/kovalchukeg_cpvs_moscow/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fkovalchukeg_cpvs_moscow%2FDocuments%2FВкладка%20МЭШ%20-%20Сайт%20Организация%20воспитания%2FСодержание%20пунктов%2F%212%2E%20Пункт%20бокового%20меню%20Нормативные%20документы%2FФедеральные%20законы%2FОб%20образовании%20в%20Российской%20Федерации%2Epdf&parent=%2Fpersonal%2Fkovalchukeg_cpvs_moscow%2FDocuments%2FВкладка%20МЭШ%20-%20Сайт%20Организация%20воспитания%2FСодержание%20пунктов%2F%212%2E%20Пункт%20бокового%20меню%20Нормативные%20документы%2FФедеральные%20законы"}
                                    text={"Федеральный закон от 29.12.2012 N 273-ФЗ (ред. от 14.07.2022) \"Об образовании в Российской Федерации\" (с изм. и доп., вступ. в силу с 25.07.2022)"}/>
                            </td>
                            <td>
                                29.07.2022
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

};

export default DocumentsSearchPage;