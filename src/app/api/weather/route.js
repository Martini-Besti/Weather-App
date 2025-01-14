import { NextResponse } from 'next/server'; 
import axios from 'axios'; 
 
export async function GET(request) { 
  const { searchParams } = new URL(request.url); 
  const params = Object.fromEntries(searchParams.entries()); 
  console.log(request);
 
  //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&units={units}
  //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

  try { 
    const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=51.51&lon=0.12&appid=${process.env.API_KEY}`); 
    return NextResponse.json(response.data); 
  } catch (error) { 
    console.error('API Error:', error); 
    return NextResponse.json( 
      { error: 'Failed to fetch users' },  
      { status: 500 } 
    ); 
  }
}