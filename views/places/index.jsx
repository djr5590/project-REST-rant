const React = require('react')
const Def = require('../default')

function index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6" key={place.id}>
                <h2 className='text-center'>
                    <a href={`/places/${place.id}`}>{place.name}</a>
                </h2>
                <p key={data.index} className="text-center">
                    {place.cuisines}
                </p>
                <center><img src={place.pic} alt={place.name}></img></center>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <div>
                    <h1>Places to Rant or Rave about!</h1>
                </div>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index 
