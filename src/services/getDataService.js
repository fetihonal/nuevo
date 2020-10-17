import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://5f7335deb63868001615f557.mockapi.io/list', )
          .then(function (response) {
           setData(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });   
    }, []);

    return {data};
}
