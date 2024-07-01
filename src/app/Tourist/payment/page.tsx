"use client";
import React, { useState } from 'react';
import './paymentFormStyles.scss'; // Import external stylesheet
import Breadcrumb from '@/components/Common/Breadcrumb';
import { useRouter } from 'next/navigation';

const validCards = [
  {
    name: 'Alice Johnson',
    number: '4111111111111111',
    expirationMonth: '01',
    expirationYear: '2025',
    securityCode: '123',
  },
  {
    name: 'Bob Smith',
    number: '5500000000000004',
    expirationMonth: '02',
    expirationYear: '2026',
    securityCode: '456',
  },
  {
    name: 'Charlie Brown',
    number: '340000000000009',
    expirationMonth: '03',
    expirationYear: '2027',
    securityCode: '789',
  },
];

const PaymentForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('01');
  const [expirationYear, setExpirationYear] = useState('2024');
  const [securityCode, setSecurityCode] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    cardNumber: '',
    expiration: '',
    securityCode: ''
  });

  const handlePayment = async () => {
    // Validate inputs
    const newErrors = {
      name: '',
      cardNumber: '',
      expiration: '',
      securityCode: ''
    };

    if (name.trim() === '') newErrors.name = 'Name on card is required';
    if (!/^\d{15,16}$/.test(cardNumber)) newErrors.cardNumber = 'Card number must be 15 or 16 digits';
    if (!/^\d{3,4}$/.test(securityCode)) newErrors.securityCode = 'Security code must be 3 or 4 digits';

    const isValidCard = validCards.some(card => 
      card.name === name &&
      card.number === cardNumber &&
      card.expirationMonth === expirationMonth &&
      card.expirationYear === expirationYear &&
      card.securityCode === securityCode
    );

    if (!isValidCard) newErrors.cardNumber = 'Invalid card details';

    setErrors(newErrors);
    if (Object.values(newErrors).some(error => error !== '')) return;


    router.push('/Tourist/success'); // Redirect to a confirmation page
  };

  return (
    <>
      <Breadcrumb
        pageName="Payment Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: "600px" }}>
          <div className="w-full pt-1 pb-5">
            <div className="bg-orange-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
          </div>
          <div className="mb-3 flex -mx-2">
            <div className="px-2">
              <label htmlFor="type1" className="flex items-center cursor-pointer">
                <input type="radio" className="form-radio h-5 w-5 text-orange-500" name="type" id="type1" defaultChecked />
                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="type2" className="flex items-center cursor-pointer">
                <input type="radio" className="form-radio h-5 w-5 text-orange-500" name="type" id="type2" />
                <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="John Smith"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                maxLength={16}
              />
              {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
            </div>
          </div>
          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
              <div>
                <select
                  className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                  value={expirationMonth}
                  onChange={(e) => setExpirationMonth(e.target.value)}
                >
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <select
                className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                value={expirationYear}
                onChange={(e) => setExpirationYear(e.target.value)}
              >
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>
          <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
              <input
                className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="000"
                type="text"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                maxLength={4}
              />
              {errors.securityCode && <p className="text-red-500 text-sm">{errors.securityCode}</p>}
            </div>
          </div>
          <div>
            <button onClick={handlePayment} className="block w-full max-w-xs mx-auto bg-orange-500 hover:bg-orange-700 focus:bg-orange-700 text-white rounded-lg px-3 py-3 font-semibold">
              <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
