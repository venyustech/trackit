import React, { useState } from 'react';
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";

function DateFormat() {
    const LOCALE = "pt-br";

    dayjs.extend(localeData);
    const [dateFormat, setDateFormat] = useState('');

    import(`dayjs/locale/${LOCALE}`).then(() => {
        dayjs.locale(LOCALE);

        const dateFormated = dayjs().format('dddd, DD/MM');
        setDate(dateFormated)
    });

    function setDate(format) {
        setDateFormat(format)
    }
    return (
        <div>{dateFormat}</div>
    )
}

export default DateFormat;








