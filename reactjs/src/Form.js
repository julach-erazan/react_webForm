import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');

  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [streetAddress, setStreetAddress] = useState('');
  const [streetAddressLine2, setStreetAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('FirstName:', fname);
    console.log('LastName:', lname);

    console.log('Date:', date);
    console.log('Month:', month);
    console.log('Year:', year);

    console.log('Sex:', gender);
    console.log('Email:', email);
    console.log('Phone:', phone);

    console.log('Street Address:', streetAddress);
    console.log('Street Address Line 2:', streetAddressLine2);
    console.log('City:', city);
    console.log('State/Province:', stateProvince);
    console.log('Postal/Zip Code:', postalCode);
  };

  return (
    <div className='body'>
        <form className="form-container" onSubmit={handleSubmit}>

          
          <div className='nameRow'>
            <label className='fieldNames'>Name</label>
            <div>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              />

              <label>First Name</label>
            </div>

            <div>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
              />

              <label>Last Name</label>
            </div>
          </div>

          <div className='dobRow'>
            <label className='fieldNames'>Date of Birth</label>

              <div>
                <select value={date} onChange={(e) => setDate(e.target.value)}>
                  <option value=""></option>
                  {/* Generate options for dates 1 to 31 */}
                  {Array.from({ length: 31 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>

                <label>Date</label>
              </div>

              <div>
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                  <option value=""></option>
                  {/* Generate options for months January to December */}
                  {Array.from({ length: 12 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>

                <label>Month</label>
              </div>

              <div>
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value=""></option>
                  {/* Generate options for years from 1900 to current year */}
                  {Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, index) => (
                    <option key={index + 1900} value={index + 1900}>
                      {index + 1900}
                    </option>
                  ))}
                </select>

                <label>Year</label>
              </div>
            </div>

          <div className='genderRow'>
            <label className='fieldNames'>Sex</label>

            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Please Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className='phoneRow'>
            <label className='fieldNames'>Contact Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
          </div>
          
          <div className='emailRow'>
          <label className='fieldNames'>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='addressRow'>
          
            <div className='adrs1'>
              <label className='fieldNames'>Address</label>

                <div>
                  <input
                    type="text"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    placeholder="Enter street address"
                  />
                  <label>Street Address</label>
              </div>
            </div>

            <div className='adrs2'>

                <div>
                  <input
                    type="text"
                    value={streetAddressLine2}
                    onChange={(e) => setStreetAddressLine2(e.target.value)}
                    placeholder="Enter street address line 2"
                  />
                  <label>Street Address Line 2</label>
                </div>

                <div className='adrs3'>
                  <div>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                      />
                      <label>City</label>
                  </div>

                  <div>
                      <input
                        type="text"
                        value={stateProvince}
                        onChange={(e) => setStateProvince(e.target.value)}
                        placeholder="Enter state or province"
                      />
                      <label>State / Province</label>
                  </div>
              </div>

              <div>
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Enter postal or zip code"
                />
                <label>Postal / Zip Code</label>
              </div>
            </div>  
          </div>

          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Form;