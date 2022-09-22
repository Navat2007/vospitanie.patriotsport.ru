import React from 'react';

const Page404 = () => {

    React.useEffect(() => {

        document.title = "404";

    }, []);

    return (
        <div className="content__block">
            <p>К сожалению данная страница не найдена!</p>
        </div>
    )

}

export default Page404;

