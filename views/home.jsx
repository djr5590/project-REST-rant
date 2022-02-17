const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <h2 className='text-center'>Welcome to REST-Rant!</h2>
                    <center><img src="/images/fancy-toast.jpg" alt="Fancy Toast" /></center>
                    <div className='text-center'>
                        <sub>Photo by <a href="https://unsplash.com/@ellaolsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ella Olsson</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></sub>
                    </div>
                </div>                
            </main>
        </Def>
    )
}

module.exports = home