import profile from './profile.jpg';
import Card from './components/Card';
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<figure>
					<img src={profile} className="profile" alt="profile" />
					<figcaption>@elvisscochito</figcaption>
				</figure>
			</header>
			<main>
				<Card platform="twitter"/>
				<Card platform="tiktok"/>
			</main>
			<footer>
				<p>Elviro Dominguez Soriano</p>
			</footer>
		</div>
	);
}

export default App;
