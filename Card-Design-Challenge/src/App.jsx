import './App.css'
import Card from './components/Card.jsx'
import data from "./assets/data.json"

function App() {
    return (
        <>
            <h1>Welcome to Card-Component Challenge!</h1>
            <div className='grid grid-cols-3 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1'>
                {
                    data.map(user => {
                        return <Card key={user.id} title={user.title} body={user.body} likeCount={user.likeCount} commentCount={user.commentCount} shareCount={user.shareCount} />
                    })
                }
            </div>
        </>
    )
}

export default App
