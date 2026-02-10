import React from "react"


type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

type Company = {
  name: string
  catchPhrase: string
  bs: string
}

type User = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}

export default async function AdminPage() {
  const users = await getUsers()
  //дата бүрэн ирсэн эсэхийг шалгаад дараа нь 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map(user => (
          <li 
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "10px"
            }}
          >
            <img
              src={`https://robohash.org/${user.id}?set=set4&size=80x80`}
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
              alt="avatar"
            />
              


            <div>
              <strong>{user.name}</strong>
              <div style={{ color: "#666" }}>{user.email}</div>
              <div style={{ color: "#666" }}>{user.phone}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
