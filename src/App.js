import logo from "./logo.svg";
import "./App.sass";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="content">
					<div className="logo-area">
						<h1 className="logo-title">白金瑪麗</h1>
						<div className="logo-background"></div>
					</div>

					<div className="main-title">已蒐集到的店家清單​</div>
					<div className="sub-title-area">
						<div className="sub-title sub-title-gap">
							10/12 Bar Mood
						</div>
						<div className="sub-title">
							11/29 Infinity and Beyond
						</div>
					</div>

					<div className="main-btn-area">
						<button className="white-btn btn-one">
							點這集點
						</button>
					</div>

					<div className="items-btn-area">
						<button className="gray-btn btn-item-one items-btn">
							LINE POINTS<br></br>兌換
						</button>
						<button className="white-btn btn-item-two items-btn">活動店家</button>
						<button className="gray-btn btn-item-three items-btn">已集點店家</button>
					</div>

					<div className="footer-banner"></div>
				</div>
			</header>
		</div>
	);
}

export default App;
