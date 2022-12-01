import moment from 'moment'
import 'moment/locale/ru'
import i18n from "i18next"

export const getDateTime = (dateString: any) => {
    i18n.on('languageChanged', function(lng) {
        moment.locale(lng);
    });
    return `${moment(dateString).calendar()} i-GMT+3`
}