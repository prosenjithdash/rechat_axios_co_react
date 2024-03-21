import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LineChat = () => {
    const lineChatData = [
        {
            "name": "Alice",
            "math_mark": 85,
            "physics_mark": 78,
            "biology_mark": 92 },
        {
            "name": "Bob",
            "math_mark": 78,
            "physics_mark": 82,
            "biology_mark": 85
        },
        {
            "name": "Charlie",
            "math_mark": 92,
            "physics_mark": 88,
            "biology_mark": 90
        },
        {
            "name": "David",
            "math_mark": 65,
            "physics_mark": 70,
            "biology_mark": 75
        },
        {
            "name": "Emily",
            "math_mark": 88,
            "physics_mark": 92,
            "biology_mark": 85
        },
        {
            "name": "Frank",
            "math_mark": 70,
            "physics_mark": 75,
            "biology_mark": 78
        },
        {
            "name": "Grace",
            "math_mark": 95,
            "physics_mark": 90,
            "biology_mark": 92
        },
        {
            "name": "Henry",
            "math_mark": 83,
            "physics_mark": 85,
            "biology_mark": 80
        },
        {
            "name": "Ivy",
            "math_mark": 90,
            "physics_mark": 88,
            "biology_mark": 94
        },
        {
            "name": "Jack",
            "math_mark": 72,
            "physics_mark": 75,
            "biology_mark": 70
        }
    ];
    return (
        <div>
            <LineChart width={1200} height={500} data={lineChatData}>
                <Line type="" dataKey="math_mark" stroke="green" />

                <Line type="" dataKey="physics_mark" stroke="#8884d8" />

                <Line type="" dataKey="biology_mark" stroke="red" />

                <XAxis dataKey="name" />
                <YAxis />

            </LineChart>
        </div>
    );
};

export default LineChat;