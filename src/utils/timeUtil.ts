import Moment from 'moment';

export function messageTime(dateData: any) {
    let targetMoment = Moment(dateData);
    return targetMoment.fromNow();
}