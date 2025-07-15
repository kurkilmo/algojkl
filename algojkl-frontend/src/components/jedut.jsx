import ReactMarkdown from 'react-markdown'
import { useContentfulData } from '../services/useContentfulData'

const JasenEdut = () => {
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan jäsenetuja...</p>
  if (error) return <p>Virhe ladattaessa jäsenetuja</p>

  const edut = data?.jasenedut || []

  return (
    <div className="jasenedut-container">
      <h2>Jäsenedut</h2>
      <p className="jasenedut-text">
        Algo tarjoaa jäsenilleen hienoja etuja! Tsekkaa alta tarkemmin, mihin
        etuihin Algon jäsenyys sinut oikeuttaa. Jäsenyys todistetaan näyttämällä
        KideApp -sovelluksesta löytyvä Algon jäsenyys.{' '}
        <strong>
          {' '}
          Mikäli alennukseen tarvitaan alekoodi, löytyy ne Algon{' '}
          <a href="/salaisuudet">salaisuudet-sivulta</a>.
        </strong>{' '}
        Salasanan sivuille voit kysyä hallituslaiselta.
      </p>
      {edut.length > 0 ? (
        edut.map((etu) => (
          <div key={etu.id} className="jasenedut-item">
            {etu.kuvaUrl && (
              <img
                src={
                  etu.kuvaUrl.startsWith('//')
                    ? 'https:' + etu.kuvaUrl
                    : etu.kuvaUrl
                }
                alt={etu.otsikkofirma}
                className="jasenedut-image"
              />
            )}
            <div className="jasenedut-text">
              <h3>{etu.otsikkofirma}</h3>
              <ReactMarkdown>{etu.kuvaus}</ReactMarkdown>
            </div>
          </div>
        ))
      ) : (
        <p>Jäsenetuja lisätään pian!</p>
      )}
    </div>
  )
}

export default JasenEdut
