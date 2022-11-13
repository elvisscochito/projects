import Card from './Card';
import cardList from '../styles/CardList.module.css';

function CardList(props) {
    return (
        <main className={cardList.container}>
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
        </main>
    );
};

export default CardList;
