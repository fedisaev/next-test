import {RatingProps} from "./Rating.props";
import styles from './Rating.module.css';
import classNames from 'classnames';
import {useEffect, useState, KeyboardEvent, ReactElement} from "react";

function Rating({rating, setRating, isEditable = false, ...props}: RatingProps): ReactElement {

    const [ratingArray, setRatingArray] = useState<ReactElement[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updateRating = ratingArray.map((r: ReactElement, i: number) => {
            return (
                <span className={classNames(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable
                })}
                      onMouseEnter={() => changeDisplay(i + 1)}
                      onMouseLeave={() => changeDisplay(rating)}
                      onClick={() => onClick(i + 1)}
                >
                    <img tabIndex={isEditable ? 0 : -1}
                         onKeyDown={(e: KeyboardEvent<HTMLImageElement>) => isEditable && handleSpace(i + 1, e)}
                         src="/star.svg" alt="star"
                    />
                </span>
            )
        })
        setRatingArray(updateRating);
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    }

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<HTMLImageElement>) => {
        if (e.code !== 'Space' || !setRating) {
            return
        }
        setRating(i);
    }

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
}

export default Rating;