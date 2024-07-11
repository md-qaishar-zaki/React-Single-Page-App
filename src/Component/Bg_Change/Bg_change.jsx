import React, { useState } from 'react';
import Card from '../Card';

function App() {
    const [color, setColor] = useState("lightBlue")
    return (

        <div className='w-full h-screen' style={{ background: color }}>
            <div className='container'>
                <Card userName="Kumar Vivas" />
                <Card />
            </div>
            <div className='container'>
                <button type="button" onClick={()=>setColor('red')}
                class="text-white rounded-lg px-5 py-2.5 me-2 mb-2 bg-red-700">red</button>
                <button type="button" onClick={()=>setColor('green')}
                class="text-white rounded-lg px-5 py-2.5 me-2 mb-2 bg-green-700">green</button>
                <button type="button" onClick={()=>setColor('blue')}
                class="text-white rounded-lg px-5 py-2.5 me-2 mb-2 bg-blue-700">blue</button>
                <button type="button" onClick={()=>setColor('orange')}
                class="text-white rounded-lg px-5 py-2.5 me-2 mb-2 bg-orange-700">orange</button>
                <button type="button" onClick={()=>setColor('gray')}
                class="text-white rounded-lg px-5 py-2.5 me-2 mb-2 bg-gray-700">gray</button>
                <button type="button" onClick={()=>setColor('purple')}
                class="text-white rounded-lg px-5 py-2.5 me-2 mb-2 bg-purple-700">purple</button>
            </div>
        </div>
    );
}

export default App;
