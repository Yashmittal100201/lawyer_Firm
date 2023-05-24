
import './App.css';
import Header from './components/Header/Header';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Lawyers from './components/LawyersTable/Lawyers';
import LawyerDetails from './components/LawyersTable/LawyerDetails/LawyerDetails';

function App() {
  const lawyers = [
    {
      "lawyers": [
        {
          "id": 1,
          "name": "Himanand D C",
          "speciality": "Academic Laws",
          "firms": [
            "Singhania & Partners LLP (Ed. 1999)",
            "Remfry & Sagar"
          ],
          "address": "236 Court Avenue, Meerut",
          "phone": "+91 1234567890",
          "available_time": "9:00 AM - 5:00 PM"
        },
        {
          "id": 2,
          "name": "Guru Prasad M",
          "speciality": "Banking Laws",
          "firms": [
            "Kim & Co"
          ],
          "address": "342 Liberty Road, Allahabad",
          "phone": "+91 9876543210",
          "available_time": "10:00 AM - 6:00 PM"
        },
        {
          "id": 3,
          "name": "Balu Mahendra Y H",
          "speciality": "Criminal Laws",
          "firms": [
            "Tatva Lega",
            "Kochhar & Co"
          ],
          "address": "238 Court Avenue, Meerut",
          "phone": "+91 2345678901",
          "available_time": "8:00 AM - 4:00 PM"
        },
        {
          "id": 4,
          "name": "Praveen Kachole",
          "speciality": "Cyber Laws",
          "firms": [
            "Kashyap Partners & Associates"
          ],
          "address": "324 Liberty Road, Allahabad",
          "phone": "+91 3456789012",
          "available_time": "9:00 AM - 5:00 PM"
        },
        {
          "id": 5,
          "name": "Rajesh Yadav S N",
          "speciality": "Family Laws",
          "firms": [
            "ICL Consultancy Services Private Limited",
            "Remfry & Sagar"
          ],
          "address": "244 Court Avenue, Meerut",
          "phone": "+91 4567890123",
          "available_time": "8:30 AM - 4:30 PM"
        },
        {
          "id": 6,
          "name": "HSK Harbinder Singh Kalsi",
          "speciality": "Family Laws",
          "firms": [
            "Law Firms"
          ],
          "address": "323 Liberty Road, Allahabad",
          "phone": "+91 5678901234",
          "available_time": "10:00 AM - 6:00 PM"
        },
        {
          "id": 7,
          "name": "Najamoddin Deshmukh",
          "speciality": "Cyber Laws",
          "firms": [
            "Ahlawat & Associates"
          ],
          "address": "234 Court Avenue, Meerut",
          "phone": "+91 6789012345",
          "available_time": "9:30 AM - 5:30 PM"
        },
        {
          "id": 8,
          "name": "Srilatha",
          "speciality": "Criminal Laws",
          "firms": [
            "Luthra and Luthra Law Offices India",
            "Phoenix Legal"
          ],
          "address": "322 Liberty Road, Allahabad",
          "phone": "+91 7890123486",
          "available_time": "9:00 AM - 5:00 PM"
        },
        {
          "id": 9,
          "name": "Vikaram Mittal",
          "speciality": "Banking Laws",
          "firms": [
            "Krishnamurthy and Co",
            "ATLAS LAW PARTNERS"
          ],
          "address": "247 Court Avenue, Meerut",
          "phone": "+91 7890156336",
          "available_time": "9:00 AM - 5:00 PM"
        },
        {
          "id": 10,
          "name": "Shwetha Anand",
          "speciality": "Academic Laws",
          "firms": [
            "Mansukhlal Hiralal & Company",
            "S&A Law Offices"
          ],
          "address": "331 Liberty Road, Allahabad",
          "phone": "+91 9890523456",
          "available_time": "9:00 AM - 5:00 PM"
        }
      ]
    }
  ]
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/lawyers" element={<Lawyers/>}/>
        <Route path='/lawyers/:name' element={<LawyerDetails/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
