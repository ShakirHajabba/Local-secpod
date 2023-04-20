import styles from "./App.module.css";
import AppRouter from "./components/AppRouter/AppRouter.component";

function App() {
	return (
		<div className={styles.App}>
			<AppRouter />
		</div>
	);
}

export default App;
