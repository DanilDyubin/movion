import {useState} from 'react';
import {FaStar} from 'react-icons/fa';

const StarRating = ({style = {}, totalStars = 10}) => {
    const [selectedStars, setSelectedStars] = useState(1);
    // const stars = [
    //     <FaStar color='yellow'/>,
    //     <FaStar color='yellow'/>,
    //     <FaStar color='yellow'/>,
    //     <FaStar color='grey'/>,
    //     <FaStar color='grey'/>
    // ];

    const onSelect = (i) => {
        setSelectedStars(i + 1);
    }

    const Star = ({selected = false, onSelect}) => (  // onSelect = f => f
        <FaStar style={{cursor: 'pointer'}} fontSize="36px" color={selected ? 'var(--color-primary)' : 'grey'} onClick={onSelect} className="star-svg"/>
    );

    const createArray = length => [...Array(length)];

    // return createArray(totalStars).map((item, i) => <Star key={i}/>)

    return (
        <div style={{color: '#9b9c9d', ...style}}>
        {createArray(totalStars).map((item, i) => (
            <Star
                key={i} 
                selected={selectedStars > i}
                // onSelect={() => setSelectedStars(i + 1)}
                onSelect={() => onSelect(i)}/>
        ))}
        <p>{selectedStars} из {totalStars} звезд</p>
        </div>
    )
};

export default StarRating;