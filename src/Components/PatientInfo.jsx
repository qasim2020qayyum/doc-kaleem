import React from 'react'
import { NavLink } from 'react-router-dom';


const PatientInfo = () => {
  return (
 <>
 <table class="table">
  <thead>
    <tr>
      <th scope="col">Prefix</th>
      <th scope="col">Name</th>
      <th scope="col">DOB</th>
      <th scope="col">Sex</th>
      <th scope="col">Address</th>
      <th scope="col">Phone #</th>
      <th scope="col">Family Doctor</th>
      <th scope="col">Blood Type</th>
      <th scope="col">Ethnicity</th>
      <th scope="col">Allergies</th>
      <th scope="col">Prescriptions</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Mr.</td>
      <td><NavLink exact to="/D1">Anthony Yakhni</NavLink></td>
      <td>10/28/1999</td>
      <td>M</td>
      <td>305 Plains Rd e</td>
      <td>905-321-9876</td>
      <td>Dr. Sonia Mossad</td>
      <td>B+</td>
      <td>Lebanse</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>Next Appointment: <br/> February26th, 2016</td>
    </tr>
    <tr>
      <td scope="row">Mr.</td>
      <td><NavLink exact to="/D2">Tracy Toliver</NavLink></td>
      <td>11/23/1984</td>
      <td>F</td>
      <td>2693 Appleby In</td>
      <td>315-694-7207</td>
      <td>Dr. Brandon Lee</td>
      <td>O</td>
      <td>Caucasian</td>
      <td>Peanuts</td>
      <td>Aderall</td>
      <td>Next Appointment:<br/> Feburary26th,2016</td>
    </tr>
    <tr>
      <td scope="row">Mr.</td>
      <td><NavLink exact to="/D3">Quinn Mithani</NavLink></td>
      <td>11/28/1999</td>
      <td>M</td>
      <td>3062 HarVerster rd</td>
      <td>469-437-9876</td>
      <td>Dr. Sonia Mossad</td>
      <td>A+</td>
      <td>Indian/Chines</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>Next Appointment:<br/> Waiting for bloodwork</td>
    </tr>
    <tr>
      <td scope="row">Mr.</td>
      <td><NavLink exact to="/D4">Ashwin.B</NavLink></td>
      <td>10/23/1999</td>
      <td>M</td>
      <td>305 Plains Rd e</td>
      <td>905-331-5133</td>
      <td>Dr. Sonia Mossad</td>
      <td>B-</td>
      <td>Indian</td>
      <td>Seafood,Beef</td>
      <td>N/A</td>
      <td>Need to Schedule:<br/> allergy test</td>
    </tr>
  </tbody>
</table>
 </>
  )
}

export default PatientInfo;