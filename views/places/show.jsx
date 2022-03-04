const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">No comments yet!</h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4></h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="m-4" src={data.place.pic} alt={data.place.name} />
                        <h4 className="text-center">
                            Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}
                        </h4>
                    </div>
                    <div className="col-sm-6">
                        <h1 className="m-4">{data.place.name}</h1>
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h5>Serving {data.place.cuisines}</h5>
                    </div>
                </div>
                <div class="row">
                    <div>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>
                    </div>
                    <div>
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mb-3">
                    <h2>Comments</h2>
                    {comments}
                </div>
            </main>
        </Def>
    )
}

module.exports = show