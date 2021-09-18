import moment from 'moment'
import 'moment/locale/ru'

export const getDateTime = (dateString) => {
    moment.locale('ru')
    return `${moment(dateString).calendar()} i-GMT+3`
}