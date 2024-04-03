"use server"
import { createRouter } from 'next-connect';
import cors from "cors";

export default async function handler(req, res){
    const username = req.query.ig
    const response = await fetch(`https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile?ig=${username}&response_type=short&corsEnabled=true`, {
      mode: 'cors',
      method: 'GET',
      headers: {
      "X-Rapidapi-Host":"instagram-bulk-profile-scrapper.p.rapidapi.com",
      "X-Rapidapi-Key":"1a78ab1e6dmshf05ff7c71870d40p140bcbjsn44864e406cfe",
    },
  });
  const data = await response.json();
  res.status(200).json(data[0]);
}