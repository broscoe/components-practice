import WelcomeMessage from "../components/WelcomeMessage"

export default function About() {
    const name = "Navi"

    return (
    <>
        <h1>About Us</h1>
        <WelcomeMessage messageText={`Hello ${name}!`} />
    </>
    )
  }