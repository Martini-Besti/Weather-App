"use client";
import { useEffect, useState } from "react";
import { ApiClient } from "./client";
const nationalities = ["US", "FR", "DE", "GB", "ES"];

export default function Home() {
  const client = new ApiClient();

  //array for all users to display
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await client.getUsersByFilters({
        nationality,
        gender,
      });
      setUsers(response.results);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [gender, nationality]);

  return (
    <div className="max-w-7xl mx-auto">
      {loading && <div>Loading...</div>}
      {error && <div>There was an error</div>}
      <div className="text-center">
        <h1 className="font-bold text-4xl">Random User Directory</h1>
      </div>
      <div>
        <select
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        >
          <option value="">All Nationalities</option>
          {nationalities.map((nat) => {
            return (
              <option key={nat} value={nat}>
                {nat}
              </option>
            );
          })}
        </select>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">All Genders</option>
          <option value={"male"}>Male</option>
          <option value={"female"}>Feale</option>
        </select>
      </div>

      {users.map((user) => {
        return (
          <div key={user.cell}>
            {user.name.first} {user.name.last}{" "}
            <img src={user.picture.thumbnail} />{" "}
          </div>
        );
      })}
    </div>
  );
}