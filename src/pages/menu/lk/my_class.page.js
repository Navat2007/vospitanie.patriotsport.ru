import React from 'react';

const MyClassPage = () => {

    React.useEffect(() => {

        document.title = "";

    }, []);

    return (
        <div className="content__block">

        </div>
    )

}

export default MyClassPage;