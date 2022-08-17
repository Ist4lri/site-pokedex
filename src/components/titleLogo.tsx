import logo from 'assets/logo.png'
import Image from 'next/image'

function TitleLogo() {
    return (
        <div>
        <h1 
            style={{
                textAlign: "center",
            }}>
                Pokédex 1.0
        </h1>
        <section>
        <Image src={logo} width={100} height={100} alt="Logo Pokemon"
    >
        </Image>
        </section>
        </div>
    )
}

export default TitleLogo

/*820/500*/