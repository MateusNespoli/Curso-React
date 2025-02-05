import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Mateus", "Pedro", "Josias", "Otavio"])
  
    const [users, setUsers] = useState([
        { id: 1, name: "Mateus", age: 31},
        { id: 2, name:"Pedro", age: 45},
        { id: 3, name: "Josias", age: 70},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers ((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id)
        })

    } 
    
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div> 
  )
}

export default ListRender