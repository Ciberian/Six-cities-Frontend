import dayjs from 'dayjs';
import { Review } from '../../types/types';
import { ONE_STAR_RATING_IN_PERCENT } from '../../const';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem ({ review }: ReviewItemProps): JSX.Element {
  const { user, rating, comment, date } = review;
  const formattedDate = dayjs(date).format('MMMM YYYY');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * ONE_STAR_RATING_IN_PERCENT}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{formattedDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
