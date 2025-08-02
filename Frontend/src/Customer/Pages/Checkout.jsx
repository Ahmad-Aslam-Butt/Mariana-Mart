import React, { useEffect, useState } from 'react';
import { Country, State, City } from 'country-state-city';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Checkout = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    phoneNumber: '',
    address: ''
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    setSelectedState('');
    setSelectedCity('');
    setStates(State.getStatesOfCountry(countryCode));
    setCities([]);
  };

  const handleProvinceChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    setCities(City.getCitiesOfState(selectedCountry, stateCode));
    setSelectedCity('');
  };

  const handlePayment = async (e) => {
    e.preventDefault(); // Prevent page reload

    const dataToSend = {
      ...formData,
      country: selectedCountry,
      state: selectedState,
      city: selectedCity
    };

    try {
      const response = await axios.post("https://api.example.com/data", dataToSend);
      console.log("Form submitted successfully:", response.data);
      navigate('/customer/payment');
    } catch (error) {
      console.error("Form submission error:", error);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-10 px-6">
      <div className="bg-white rounded shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">Delivery Information</h1>

        <form onSubmit={handlePayment} className="grid md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your First Name"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Second Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Second Name</label>
            <input
              name="secondName"
              value={formData.secondName}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your Second Name"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              type="tel"
              placeholder="Enter your Phone Number"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Province */}
          <div>
            <label className="block text-sm font-medium mb-1">Province</label>
            <select
              value={selectedState}
              onChange={handleProvinceChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <option value="">Select Province</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your Address"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Submit + Payment Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
            >
              Continue To Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
