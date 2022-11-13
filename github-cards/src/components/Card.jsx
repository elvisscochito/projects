import card from '../styles/Card.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookBookmark, faBook } from "@fortawesome/free-solid-svg-icons";

function Card(profile) {
    const url = `https://github.com/${profile.login}`;

    return(
        <div className={card.githubProfile}>
            <header className={card.header}>
                <img src={profile.avatar_url} alt="profile"/>
            </header>

            <div className={card.body}>
                    <span className={card.name}>{profile.name}</span>
                    <span className={card.username}>@{profile.login}</span>
                    
                    <p className={card.bio}>{profile.bio}</p>
                    <div className={card.info}>
                        <div className={card.infoItem}>
                            <FontAwesomeIcon className={card.icon} icon={faUser}/>
                            <span className={card.followers}>{profile.followers}</span>
                        </div>

                        <div className={card.infoItem}>
                            <FontAwesomeIcon className={card.icon} icon={faBookBookmark}/>
                            <span className={card.repos}>{profile.public_repos}</span>
                        </div>

                        <div className={card.infoItem}>
                            <FontAwesomeIcon className={card.icon} icon={faBook}/>
                            <span className={card.gists}>{profile.public_gists}</span>
                        </div>
                    </div>
            </div>

            <footer className={card.footer}>
                <a href={url} target="a_blank">View profile ↗</a>
            </footer>
        </div>
    )
};

export default Card;
