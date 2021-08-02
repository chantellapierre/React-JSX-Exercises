function App() {
	return (
		<div>
			<Tweet name="Jane Doe" username="janedoe" date={new Date().toDateString()} message="I hate Twitter" />
			<Tweet name="John Doe" username="johndoe" date={new Date().toDateString()} message="I, too, hate Twitter" />
			<Tweet
				name="Johnson & Johnson"
				username="byecovid"
				date={new Date().toDateString()}
				message="Get vaccinated"
			/>
		</div>
	);
}
