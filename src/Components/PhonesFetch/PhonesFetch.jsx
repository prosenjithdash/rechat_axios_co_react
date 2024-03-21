import axios from "axios";
import { useEffect, useState } from "react";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhonesFetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        // .then(data => setData(data.data))

        // now using Axios data load

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(data => console.log(data.data.data))
            .then(data => {
                // setData(data.data.data)
                const phoneD = data.data.data;
                const phoneWithFakeData = phoneD.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phoneWithFakeData)
                setData(phoneWithFakeData)
            })


    }, [])
    return (
        <div>
            <h2 className="text-[30px] ">Phone Fetch Data : {data.length}</h2>

            <BarChart width={900} height={400} data={data}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>

            

        </div>
    );
};

export default PhonesFetch;